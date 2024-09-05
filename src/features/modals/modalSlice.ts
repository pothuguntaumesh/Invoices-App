import { createSlice } from "@reduxjs/toolkit";
import { ModalState, ModalType } from "../../types/types";

const initialState: ModalState = {
  isModalOpen: false,
  modalType: ModalType.ADD,
};
const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setModalTypeToAdd: (state) => {
      state.modalType = ModalType.ADD;
    },
    setModalTypeToEdit: (state) => {
      state.modalType = ModalType.EDIT;
    },
  },
});

export const { toggleModal, setModalTypeToAdd, setModalTypeToEdit } =
  modalSlice.actions;
export default modalSlice.reducer;
