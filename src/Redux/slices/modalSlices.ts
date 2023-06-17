import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
  product: "",
};
const modalSlices = createSlice({
  initialState,
  name: "openModal",
  reducers: {
    handeleOpenModal: (state, action) => {
      state.openModal = true;
      state.product = action.payload;
    },
    handeleCloseModal: (state) => {
      state.openModal = false;
      state.product = "";
    },
  },
});

export default modalSlices.reducer;

export const { handeleOpenModal, handeleCloseModal } = modalSlices.actions;
