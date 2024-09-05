import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../features/invoices/invoiceSlice";
import modalReducer from "../features/modals/modalSlice";

const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
    modal: modalReducer,
  },
});

export default store;
