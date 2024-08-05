import * as Yup from "yup";
export const addInvoiceDraftSchema = () => {
  clientName: Yup.string().required("Client's Name is required");
};
