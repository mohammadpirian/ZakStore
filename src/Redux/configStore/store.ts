import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
