import { combineReducers, createSlice, current } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import produce from "immer";

// const initialState = {
//   openModal: false,
//   product: "",
// };

const presistConfig = {
  key: "cartSlices",
  version: 1,
  storage,
};

const initialState = {
  // openModal: false,
  CartProducts: [],
};

const cartSlices = createSlice({
  initialState,
  name: "cart",
  reducers: {
    handeleAddTOCart: (state, action) => {
      console.log(current(state));
      const existingOrder = state.CartProducts.find(
        (order) => order._id === action.payload._id
      );
      if (existingOrder) {
        existingOrder.orderQuantity += action.payload.orderQuantity;
        existingOrder.totalPriceproduct +=
          action.payload.orderQuantity * action.payload.price;
      } else {
        state.CartProducts.push({
          ...action.payload,
          totalPriceproduct:
            action.payload.orderQuantity * action.payload.price,
        });
      }
      // console.log(orderOfCart.orderQuantity);
    },
    handeleEmptyCart: (state) => {
      return initialState
      // state.CartProducts=[]
      // state.CartProducts.splice(0, state.CartProducts.length);
      // return produce(state, (draftState) => {
      //   draftState.CartProducts = [];
      // });
    },
    handeleRemoveFromCart: (state, action) => {
      console.log(action.payload);
      const afterRemove = state.CartProducts.filter(
        (item) => item._id !== action.payload._id
      );
      state.CartProducts = afterRemove;
    },
  },
});

// export default cartSlices.reducer;
const reducers = combineReducers({ cartSlices: cartSlices.reducer });
export const persistedReducer = persistReducer(presistConfig as any, reducers);
export const { handeleAddTOCart, handeleEmptyCart, handeleRemoveFromCart } =
  cartSlices.actions;
