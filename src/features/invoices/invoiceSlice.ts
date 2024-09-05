import { createSlice } from "@reduxjs/toolkit";
import invoiceData from "../../data.json";
import { generateInvoiceId } from "../../utils/utils";
import { Address, PaymentStatus } from "../../types/types";

const initialState = {
  invoices: invoiceData.map((invoice: any) => ({
    id: invoice.id,
    createdAt: invoice.createdAt,
    paymentDue: invoice.paymentDue,
    description: invoice.description,
    paymentTerms: invoice.paymentTerms,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    status: invoice.status,
    senderAddress: invoice.senderAddress,
    clientAddress: invoice.clientAddress,
    items: invoice.items.map((item: any) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      total: item.total,
    })),
    total: invoice.total,
  })),
  currentInvoiceId: "",
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      const values = action.payload;
      //Now map this values to the above data and push it in the front of the array
      const senderAddress: Address = {
        street: values.streetAddressFrom,
        city: values.cityFrom,
        postCode: values.postalCodeFrom,
        country: values.countryFrom,
      };

      // Create the clientAddress object
      const clientAddress: Address = {
        street: values.streetAddressTo,
        city: values.cityTo,
        postCode: values.postalCodeTo,
        country: values.countryTo,
      };
      const newInvoice = {
        id: generateInvoiceId(),
        createdAt: "2024-08-11",
        paymentDue: values.invoiceDate,
        description: values.projectDescription,
        paymentTerms: values.paymentTerms,
        clientName: values.clientName,
        clientEmail: values.clientEmail,
        status: PaymentStatus.Pending,
        senderAddress: senderAddress,
        clientAddress: clientAddress,
        items: values.items.map((item: any) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity,
        })),
        total: "500",
      };
      state.invoices = [newInvoice, ...state.invoices];
    },
    addInvoiceDraft: (state, action) => {
      const values = action.payload;

      const senderAddress: Address = {
        street: values.streetAddressFrom || "",
        city: values.cityFrom || "",
        postCode: values.postalCodeFrom || "",
        country: values.countryFrom || "",
      };

      // Create the clientAddress object
      const clientAddress: Address = {
        street: values.streetAddressTo || "",
        city: values.cityTo || "",
        postCode: values.postalCodeTo || "",
        country: values.countryTo || "",
      };
      const newInvoice = {
        id: generateInvoiceId(),
        createdAt: "2024-08-11",
        paymentDue: values.invoiceDate || "",
        description: values.projectDescription || "",
        paymentTerms: values.paymentTerms || "",
        clientName: values.clientName || "",
        clientEmail: values.clientEmail || "",
        status: PaymentStatus.Draft,
        senderAddress: senderAddress || "",
        clientAddress: clientAddress || "",
        items: values.items.map((item: any) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity,
        })),
        total: "500",
      };
      state.invoices = [newInvoice, ...state.invoices];
    },
    deleteInvoice: (state, action) => {
      const invoiceId = action.payload;
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== invoiceId
      );
    },
    markInvoicePaid: (state, action) => {
      const invoiceId = action.payload;
      state.invoices = state.invoices.map((invoice) => {
        if (invoice.id === invoiceId) {
          return { ...invoice, status: "paid" };
        }
        return invoice;
      });
    },
    setCurrentInvoiceId: (state, action) => {
      const invoiceId = action.payload;
      console.log(invoiceId, "This is inside set metho");
      state.currentInvoiceId = invoiceId;
      console.log(state.currentInvoiceId);
    },
  },
});

export const {
  addInvoice,
  addInvoiceDraft,
  deleteInvoice,
  markInvoicePaid,
  setCurrentInvoiceId,
} = invoiceSlice.actions;
export default invoiceSlice.reducer;
