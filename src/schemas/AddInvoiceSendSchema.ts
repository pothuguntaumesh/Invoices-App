import * as Yup from "yup";

export const addInvoiceSendSchema = Yup.object().shape({
  streetAddressFrom: Yup.string().required("Street Address is required"),
  cityFrom: Yup.string().required("City is required"),
  postalCodeFrom: Yup.string().required("Postal Code is required"),
  countryFrom: Yup.string().required("Country is required"),
  clientName: Yup.string().required("Client's Name is required"),
  clientEmail: Yup.string()
    .email("Client's Email is invalid")
    .required("Client's Email is required"),
  streetAddressTo: Yup.string().required("Street Address is required"),
  cityTo: Yup.string().required("City is required"),
  postalCodeTo: Yup.string().required("Postal Code is required"),
  countryTo: Yup.string().required("Country is required"),
  invoiceDate: Yup.date().required("Invoice Date is required"),
  paymentTerms: Yup.string().required("Payment Terms are required"),
  projectDescription: Yup.string().required("Project Description is required"),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Item Name is required"),
        quantity: Yup.number()
          .positive("Invalid")
          .integer("Invalid")
          .required("Quantity is required"),
        price: Yup.number().positive("Invalid").required("Invalid"),
      })
    )
    .required("Items are required"),
});
