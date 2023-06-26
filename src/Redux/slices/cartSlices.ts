import { createSlice, current } from "@reduxjs/toolkit";

// const initialState = {
//   openModal: false,
//   product: "",
// };
const initialState = {
  // openModal: false,
  CartProducts: [],
};

const cartSlices = createSlice({
  initialState,
  name: "cart",
  reducers: {
    handeleAddTOCart: (state, action) => {
      // state.openModal = true;
      console.log(current(state));
      const existingOrder = state.CartProducts.find(
        (order) => order._id === action.payload._id
      );
      if (existingOrder) {
        existingOrder.orderQuantity += action.payload.orderQuantity;
        existingOrder.totalPriceproduct += action.payload.orderQuantity*action.payload.price;

      } else {
        state.CartProducts.push({...action.payload, totalPriceproduct:action.payload.orderQuantity*action.payload.price});
      }
      // console.log(orderOfCart.orderQuantity);
    },
    handeleEmptyCart: (state) => {
      // state.openModal = false;
      state.CartProducts = [];
    },
  },
});

export default cartSlices.reducer;

export const { handeleAddTOCart, handeleEmptyCart } = cartSlices.actions;
