import React, { useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop";
import {
  AddInvoiceModalProps,
  AddInvoiceProps,
  InvoiceCardFields,
  Item,
  ModalType,
} from "../../types/types";

import deleteIcon from "../../assets/icon-delete.svg";
import { generateRandomId } from "../../utils/utils";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { addInvoiceSendSchema } from "../../schemas/AddInvoiceSendSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  addInvoice,
  addInvoiceDraft,
} from "../../features/invoices/invoiceSlice";
import { addInvoiceDraftSchema } from "../../schemas/AddInvoiceDraftSchema";

const AddEditInvoiceModal = ({ toggleModal }: AddInvoiceModalProps) => {
  const modalType = useSelector((state: any) => state.modal.modalType);
  const [validationSchema, setValidationSchema] =
    useState<any>(addInvoiceSendSchema);
  console.log(
    validationSchema,
    "ValidationSchema at the top of the Modal component"
  );
  const dispatch = useDispatch();
  const invoices: InvoiceCardFields[] = useSelector(
    (state: any) => state.invoices.invoices
  );
  const currentInvoiceId = useSelector(
    (state: any) => state.invoices.currentInvoiceId
  );
  const invoice: InvoiceCardFields = invoices.find(
    (invoice) => invoice.id === currentInvoiceId
  )!;

  const addNewItem = (
    setFieldValue: FormikHelpers<{ items: Item[] }>["setFieldValue"],
    values: { items: Item[] }
  ): void => {
    const newItem: Item = {
      id: generateRandomId(),
      name: "",
      quantity: 0,
      price: 0,
    };
    setFieldValue("items", [...values.items, newItem]);
  };
  const removeItem = (
    setFieldValue: FormikHelpers<{ items: Item[] }>["setFieldValue"],
    values: { items: Item[] },
    id: string
  ): void => {
    const updatedItems = values.items.filter((item) => item.id !== id);
    setFieldValue("items", updatedItems);
  };

  const onSubmit = (values: any) => {
    if (validationSchema === addInvoiceSendSchema) {
      dispatch(addInvoice(values));
    } else {
      dispatch(addInvoiceDraft(values));
    }

    toggleModal();
  };

  const updateSchemaToDraftValidation = (submitForm: () => Promise<void>) => {
    setValidationSchema(addInvoiceDraftSchema);
    setTimeout(() => submitForm(), 0);
  };
  const updateSchemaToSendValidation = (submitForm: () => Promise<void>) => {
    setValidationSchema(addInvoiceSendSchema);
    setTimeout(() => submitForm(), 0);
  };
  return (
    <div className="h-full w-[calc(50%-103px)] bg-12-black absolute left-[103px] z-20 overflow-scroll">
      <div className="m-14">
        <Formik
          initialValues={{
            streetAddressFrom: "",
            cityFrom: "",
            postalCodeFrom: "",
            countryFrom: "",
            clientName: "",
            clientEmail: "",
            streetAddressTo: "",
            cityTo: "",
            postalCodeTo: "",
            countryTo: "",
            invoiceDate: "",
            paymentTerms: "",
            projectDescription: "",
            items: [] as Item[],
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, submitForm, setFormikState }) => (
            <Form>
              <h2 className="text-white font-bold">
                {modalType === ModalType.ADD
                  ? "New Invoice"
                  : `Edit #${invoice.id}`}
              </h2>
              <p className="text-1-dark-violet text-sm font-semibold mt-8">
                Bill From
              </p>
              <p className="text-5-light-gray font mt-4 mb-2">Street Address</p>
              <Field
                name="streetAddressFrom"
                className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
              />
              <ErrorMessage
                name="streetAddressFrom"
                component="div"
                className="text-red-600 text-xs font-bold mt-2"
              />
              <div className="flex gap-6">
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">City</p>
                  <Field
                    name="cityFrom"
                    className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                  />
                  <ErrorMessage
                    name="cityFrom"
                    component="div"
                    className="text-red-600 text-xs font-bold mt-2"
                  />
                </div>
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">
                    Postal Code
                  </p>
                  <Field
                    name="postalCodeFrom"
                    className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                  />
                  <ErrorMessage
                    name="postalCodeFrom"
                    component="div"
                    className="text-red-600 text-xs font-bold mt-2"
                  />
                </div>
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">Country</p>
                  <Field
                    name="countryFrom"
                    className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                  />
                  <ErrorMessage
                    name="countryFrom"
                    component="div"
                    className="text-red-600 text-xs font-bold mt-2"
                  />
                </div>
              </div>
              <p className="text-1-dark-violet text-sm font-semibold mt-8">
                Bill To
              </p>
              <div>
                <p className="text-5-light-gray font mt-4 mb-2">
                  Client's Name
                </p>
                <Field
                  name="clientName"
                  className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                />
                <ErrorMessage
                  name="clientName"
                  component="div"
                  className="text-red-600 text-xs font-bold mt-2"
                />
              </div>
              <div>
                <p className="text-5-light-gray font mt-4 mb-2">
                  Client's Email
                </p>
                <Field
                  name="clientEmail"
                  className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                />
                <ErrorMessage
                  name="clientEmail"
                  component="div"
                  className="text-red-600 text-xs font-bold mt-2"
                />
              </div>
              <p className="text-5-light-gray font mt-4 mb-2">Street Address</p>
              <Field
                name="streetAddressTo"
                className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
              />
              <ErrorMessage
                name="streetAddressTo"
                component="div"
                className="text-red-600 text-xs font-bold mt-2"
              />
              <div className="flex gap-6">
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">City</p>
                  <Field
                    name="cityTo"
                    className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                  />
                  <ErrorMessage
                    name="cityTo"
                    component="div"
                    className="text-red-600 text-xs font-bold mt-2"
                  />
                </div>
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">
                    Postal Code
                  </p>
                  <Field
                    name="postalCodeTo"
                    className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                  />
                  <ErrorMessage
                    name="postalCodeTo"
                    component="div"
                    className="text-red-600 text-xs font-bold mt-2"
                  />
                </div>
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">Country</p>
                  <Field
                    name="countryTo"
                    className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                  />
                  <ErrorMessage
                    name="countryTo"
                    component="div"
                    className="text-red-600 text-xs font-bold mt-2"
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-6">
                  <div className="flex-1">
                    <p className="text-5-light-gray font mt-4 mb-2 opacity-75">
                      Invoice Date
                    </p>
                    <Field
                      name="invoiceDate"
                      type="date"
                      className="w-full py-3 rounded-sm bg-3-dark-black px-2 text-white font-bold"
                    />
                    <ErrorMessage
                      name="invoiceDate"
                      component="div"
                      className="text-red-600 text-xs font-bold mt-2"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-5-light-gray font mt-4 mb-2">
                      Payment Terms
                    </p>
                    <Field
                      name="paymentTerms"
                      as="select"
                      className="w-full py-4 rounded-sm bg-3-dark-black px-4 text-white font-bold outline-none"
                    >
                      <option value="">Select Payment Terms</option>
                      <option value="1">Net 1 Day</option>
                      <option value="7">Net 7 Day</option>
                      <option value="14">Net 14 Day</option>
                      <option value="30">Net 30 Day</option>
                    </Field>
                    <ErrorMessage
                      name="paymentTerms"
                      component="div"
                      className="text-red-600 text-xs font-bold mt-2"
                    />
                  </div>
                </div>
              </div>
              <p className="text-5-light-gray font mt-4 mb-2">
                Project Description
              </p>
              <Field
                name="projectDescription"
                className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
              />
              <ErrorMessage
                name="projectDescription"
                component="div"
                className="text-red-600 text-xs font-bold mt-2"
              />

              <p className="text-5-light-gray font-bold text-xl mt-10 mb-2 opacity-75">
                Item List
              </p>
              <div className="flex flex-col w-full">
                <div className="grid grid-cols-12 gap-4 w-full">
                  <div className="col-span-5">
                    <p className="text-5-light-gray font mt-4 mb-2">
                      Item Name
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-5-light-gray font mt-4 mb-2">Qty.</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-5-light-gray font mt-4 mb-2">Price</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-5-light-gray font mt-4 mb-2">Total</p>
                  </div>
                  <div className="col-span-1"></div>
                </div>
                {values.items.length > 0 &&
                  values.items.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-4 w-full items-center mb-4"
                    >
                      <div className="col-span-5">
                        <Field
                          name={`items[${index}].name`}
                          className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                        />
                        <ErrorMessage
                          name={`items[${index}].name`}
                          component="div"
                          className="text-red-600 text-xs font-bold mt-2"
                        />
                      </div>
                      <div className="col-span-2">
                        <Field
                          name={`items[${index}].quantity`}
                          className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                        />
                        <ErrorMessage
                          name={`items[${index}].quantity`}
                          component="div"
                          className="text-red-600 text-xs font-bold mt-2"
                        />
                      </div>
                      <div className="col-span-2">
                        <Field
                          name={`items[${index}].price`}
                          className="bg-3-dark-black rounded-sm size-12 w-full text-white px-4 font-semibold outline-none"
                        />
                        <ErrorMessage
                          name={`items[${index}].price`}
                          component="div"
                          className="text-red-600 text-xs font-bold mt-2"
                        />
                      </div>
                      <div className="col-span-2">
                        <p className="text-5-light-gray font-bold text-lg mx-4">
                          {item.price && item.quantity
                            ? item.price * item.quantity
                            : ""}
                        </p>
                      </div>
                      <div className="col-span-1 cursor-pointer">
                        <img
                          src={deleteIcon}
                          alt="Delete"
                          className="hover:bg-9-dark-red cursor-pointer"
                          onClick={() =>
                            removeItem(setFieldValue, values, item.id)
                          }
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div
                className="bg-4-light-black w-full text-center text-5-light-gray font-bold py-3 cursor-pointer mt-2 rounded-full"
                onClick={() => addNewItem(setFieldValue, values)}
              >
                + Add New Item
              </div>
              <div className="flex justify-between items-center w-full mt-12">
                <button
                  className="bg-[#F9FAFE] px-8 py-4 rounded-full text-7-gray-blue font-bold"
                  type="button"
                  onClick={toggleModal}
                >
                  Discard
                </button>
                <div className="flex space-x-2">
                  <button
                    className="bg-[#373B53] px-8 py-4 rounded-full text-5-light-gray font-bold"
                    type="button"
                    onClick={() => {
                      // setValidationSchema(addInvoiceDraftSchema);
                      updateSchemaToDraftValidation(submitForm);
                    }}
                  >
                    Save as Draft
                  </button>
                  <button
                    className="bg-1-dark-violet text-white font-bold px-8 py-4 rounded-full"
                    type="button"
                    onClick={() => {
                      // setValidationSchema(addInvoiceSendSchema);
                      // setFormikState(addInvoiceSendSchema)
                      updateSchemaToSendValidation(submitForm);

                      // submitForm();
                    }}
                  >
                    Save & Send
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const AddEditInvoice = ({ toggleAddEditInvoiceModal }: AddInvoiceProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggleModal={toggleAddEditInvoiceModal} />,
        document.getElementById("backdrop")!
      )}
      {ReactDOM.createPortal(
        <AddEditInvoiceModal toggleModal={toggleAddEditInvoiceModal} />,
        document.getElementById("overlay")!
      )}
    </>
  );
};

export default AddEditInvoice;
