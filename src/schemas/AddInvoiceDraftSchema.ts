import * as Yup from "yup";
export const addInvoiceDraftSchema = Yup.object().shape({
  streetAddressFrom: Yup.string().optional(),
  cityFrom: Yup.string().optional(),
  postalCodeFrom: Yup.string().optional(),
  countryFrom: Yup.string().optional(),
  clientName: Yup.string().required("Client's Name is required"),
  clientEmail: Yup.string().email("Client's Email is invalid").optional(),
  streetAddressTo: Yup.string().optional(),
  cityTo: Yup.string().optional(),
  postalCodeTo: Yup.string().optional(),
  countryTo: Yup.string().optional(),
  invoiceDate: Yup.date().optional(),
  paymentTerms: Yup.string().optional(),
  projectDescription: Yup.string().optional(),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().optional(),
        quantity: Yup.number()
          .positive("Invalid")
          .integer("Invalid")
          .optional(),
        price: Yup.number().positive("Invalid").optional(),
      })
    )
    .required("Items are required"),
});
