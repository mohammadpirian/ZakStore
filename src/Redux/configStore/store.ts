import { configureStore } from "@reduxjs/toolkit";
import modalSlices from "../slices/modalSlices";

const store = configureStore({
  reducer: {
    modalReducer: modalSlices,
  },
});
export default store;
