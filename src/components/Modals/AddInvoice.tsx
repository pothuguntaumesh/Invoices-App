import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop";
import { AddInvoiceModalProps, AddInvoiceProps, Item } from "../../types/types";
import InputBox from "../UI/InputBox";
import deleteIcon from "../../assets/icon-delete.svg";
import { generateRandomId } from "../../utils/utils";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { addInvoiceSendSchema } from "../../schemas/AddInvoiceSendSchema";
import { addInvoiceDraftSchema } from "../../schemas/AddInvoiceDraftSchema";

const AddInvoiceModal = ({ toggleModal }: AddInvoiceModalProps) => {
  const [isDraft, setIsDraft] = useState(false);

  const handleSaveAsDraft = () => {
    setIsDraft(true);
  };

  const handleSaveAndSend = () => {
    setIsDraft(false);
  };

  const addNewItem = (
    setFieldValue: FormikHelpers<{ items: Item[] }>["setFieldValue"],
    values: { items: Item[] }
  ): void => {
    const newItem: Item = {
      id: generateRandomId(),
      itemName: "",
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
  // const handleSaveAndSend = () => {
  //   //Collect all the data validate it and store it in the database and also use the same data to show in the invoice page
  // };
  // const handleSaveAsDraft = () => {
  //   //Collect all available validate it and store it in the database and also use the same data to show in the invoice page as a
  // };
  const onSubmit = (values: any) => {
    console.log(values, "All the from values");
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
          validationSchema={
            isDraft ? addInvoiceDraftSchema : addInvoiceSendSchema
          }
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, setFormikState, submitForm }) => (
            <Form>
              <h2 className="text-white font-bold">New Invoice</h2>
              <p className="text-1-dark-violet text-sm font-semibold mt-8">
                Bill From
              </p>
              <p className="text-5-light-gray font mt-4 mb-2">Street Address</p>
              <Field name="streetAddressFrom" as={InputBox} />
              <ErrorMessage
                name="streetAddressFrom"
                component="div"
                className="text-red-600 text-xs font-bold mt-2"
              />
              <div className="flex gap-6">
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">City</p>
                  <Field name="cityFrom" as={InputBox} />
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
                  <Field name="postalCodeFrom" as={InputBox} />
                  <ErrorMessage
                    name="postalCodeFrom"
                    component="div"
                    className="text-red-600 text-xs font-bold mt-2"
                  />
                </div>
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">Country</p>
                  <Field name="countryFrom" as={InputBox} />
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
                <Field name="clientName" as={InputBox} />
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
                <Field name="clientEmail" as={InputBox} />
                <ErrorMessage
                  name="clientEmail"
                  component="div"
                  className="text-red-600 text-xs font-bold mt-2"
                />
              </div>
              <p className="text-5-light-gray font mt-4 mb-2">Street Address</p>
              <Field name="streetAddressTo" as={InputBox} />
              <ErrorMessage
                name="streetAddressTo"
                component="div"
                className="text-red-600 text-xs font-bold mt-2"
              />
              <div className="flex gap-6">
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">City</p>
                  <Field name="cityTo" as={InputBox} />
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
                  <Field name="postalCodeTo" as={InputBox} />
                  <ErrorMessage
                    name="postalCodeTo"
                    component="div"
                    className="text-red-600 text-xs font-bold mt-2"
                  />
                </div>
                <div>
                  <p className="text-5-light-gray font mt-4 mb-2">Country</p>
                  <Field name="countryTo" as={InputBox} />
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
                      className="text-red-600"
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
                      <option value="Net 1 Day">Net 1 Day</option>
                      <option value="Net 7 Day">Net 7 Day</option>
                      <option value="Net 14 Day">Net 14 Day</option>
                      <option value="Net 30 Day">Net 30 Day</option>
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
              <Field name="projectDescription" as={InputBox} />
              <ErrorMessage
                name="invoiceDate"
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
                          name={`items[${index}].itemName`}
                          as={InputBox}
                        />
                        <ErrorMessage
                          name={`items[${index}].itemName`}
                          component="div"
                          className="text-red-600 text-xs font-bold mt-2"
                        />
                      </div>
                      <div className="col-span-2">
                        <Field
                          name={`items[${index}].quantity`}
                          as={InputBox}
                        />
                        <ErrorMessage
                          name={`items[${index}].quantity`}
                          component="div"
                          className="text-red-600 text-xs font-bold mt-2"
                        />
                      </div>
                      <div className="col-span-2">
                        <Field name={`items[${index}].price`} as={InputBox} />
                        <ErrorMessage
                          name={`items[${index}].price`}
                          component="div"
                          className="text-red-600 text-xs font-bold mt-2"
                        />
                      </div>
                      <div className="col-span-2">
                        <p className="text-5-light-gray font-bold text-lg mx-4">
                          {/* {item.price && item.quantity
                            ? item.price * item.quantity
                            : ""} */}
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
                      setFormikState((prevState) => ({
                        ...prevState,
                        validationSchema: addInvoiceSendSchema,
                      }));
                      submitForm();
                    }}
                  >
                    Save as Draft
                  </button>
                  <button
                    className="bg-1-dark-violet text-white font-bold px-8 py-4 rounded-full"
                    type="submit"
                    onClick={() => {
                      setFormikState((prevState) => ({
                        ...prevState,
                        validationSchema: addInvoiceSendSchema,
                      }));
                      submitForm();
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
  // <div className="h-full w-[calc(50%-103px)] bg-12-black absolute left-[103px] z-20 overflow-scroll">
  //   <div className="m-14">
  //     <Formik
  //       initialValues={{
  //         streetAddress: "",
  //         city: "",
  //         postalCode: "",
  //         country: "",
  //         clientName: "",
  //         clientEmail: "",
  //         invoiceDate: "",
  //         paymentTerms: "",
  //         projectDescription: "",
  //         items: [],
  //       }}
  //       validationSchema={addInvoiceSchema}
  //       onSubmit={onSubmit}
  //     >
  //       <h2 className="text-white font-bold">New Invoice</h2>
  //       <p className="text-1-dark-violet text-sm font-semibold mt-8">
  //         Bill From
  //       </p>
  //       <p className="text-5-light-gray font mt-4 mb-2">Street Address</p>
  //       <InputBox inputType="text" />
  //       <div className="flex gap-6">
  //         <div>
  //           <p className="text-5-light-gray font mt-4 mb-2">City</p>
  //           <InputBox inputType="text" />
  //         </div>
  //         <div>
  //           <p className="text-5-light-gray font mt-4 mb-2">Postal Code</p>
  //           <InputBox inputType="text" />
  //         </div>
  //         <div>
  //           <p className="text-5-light-gray font mt-4 mb-2">Country</p>
  //           <InputBox inputType="text" />
  //         </div>
  //       </div>
  //       <p className="text-1-dark-violet text-sm font-semibold mt-8">
  //         Bill To
  //       </p>
  //       <div>
  //         <p className="text-5-light-gray font mt-4 mb-2">Client's Name</p>
  //         <InputBox inputType="text" />
  //       </div>
  //       <div>
  //         <p className="text-5-light-gray font mt-4 mb-2">Client's Email</p>
  //         <InputBox inputType="text" />
  //       </div>
  //       <p className="text-5-light-gray font mt-4 mb-2">Street Address</p>

  //       <InputBox inputType="text" />
  //       <div className="flex gap-6 ">
  //         <div>
  //           <p className="text-5-light-gray font mt-4 mb-2">City</p>
  //           <InputBox inputType="text" />
  //         </div>
  //         <div>
  //           <p className="text-5-light-gray font mt-4 mb-2">Postal Code</p>
  //           <InputBox inputType="text" />
  //         </div>
  //         <div>
  //           <p className="text-5-light-gray font mt-4 mb-2">Country</p>
  //           <InputBox inputType="text" />
  //         </div>
  //       </div>
  //       <div>
  //         <div className="flex gap-6">
  //           <div className="flex-1">
  //             <p className="text-5-light-gray font mt-4 mb-2 opacity-75">
  //               Invoice Date
  //             </p>
  //             <input
  //               type="date"
  //               className="w-full py-3 rounded-sm bg-3-dark-black px-2 text-white font-bold"
  //             />
  //           </div>
  //           <div className="flex-1">
  //             <p className="text-5-light-gray font mt-4 mb-2 ">
  //               Payment Terms
  //             </p>
  //             <select
  //               name=""
  //               id=""
  //               className="w-full py-4 rounded-sm bg-3-dark-black px-4 text-white font-bold outline-none"
  //             >
  //               <option value="Net 1 Day" className="">
  //                 Net 1 Day
  //               </option>
  //               <option value="Net 7 Day">Net 7 Day</option>
  //               <option value="Net 14 Day">Net 14 Day</option>
  //               <option value="Net 30 Day">Net 30 Day</option>
  //             </select>
  //           </div>
  //         </div>
  //       </div>
  //       <p className="text-5-light-gray font mt-4 mb-2 ">
  //         Project Description
  //       </p>
  //       <InputBox inputType="text" />
  //       <p className="text-5-light-gray font-bold text-xl mt-10 mb-2 opacity-75 ">
  //         Item List
  //       </p>

  //       <div className="flex flex-col w-full">
  //         {/* Header Row */}
  //         <div className="grid grid-cols-12 gap-4 w-full">
  //           <div className="col-span-5">
  //             <p className="text-5-light-gray font mt-4 mb-2">Item Name</p>
  //           </div>
  //           <div className="col-span-2">
  //             <p className="text-5-light-gray font mt-4 mb-2">Qty.</p>
  //           </div>
  //           <div className="col-span-2">
  //             <p className="text-5-light-gray font mt-4 mb-2">Price</p>
  //           </div>
  //           <div className="col-span-2">
  //             <p className="text-5-light-gray font mt-4 mb-2">Total</p>
  //           </div>
  //           <div className="col-span-1"></div> {/* Space for delete button */}
  //         </div>

  //         {/* Items */}
  //         {items.length > 0 &&
  //           items.map((item, index) => (
  //             <div
  //               key={item.id}
  //               className="grid grid-cols-12 gap-4 w-full items-center mb-4"
  //             >
  //               <div className="col-span-5">
  //                 <InputBox inputType="text" />
  //               </div>
  //               <div className="col-span-2">
  //                 <InputBox inputType="text" />
  //               </div>
  //               <div className="col-span-2">
  //                 <InputBox inputType="text" />
  //               </div>
  //               <div className="col-span-2">
  //                 <p className="text-5-light-gray font-bold text-lg mx-4">
  //                   {item.price && item.quantity
  //                     ? item.price * item.quantity
  //                     : ""}
  //                 </p>
  //               </div>
  //               <div className="col-span-1 cursor-pointer">
  //                 <img
  //                   src={deleteIcon}
  //                   alt="Delete"
  //                   className="hover:bg-9-dark-red cursor-pointer"
  //                   onClick={() => removeItem(item.id)}
  //                 />
  //               </div>
  //             </div>
  //           ))}
  //       </div>

  //       <div
  //         className="bg-4-light-black w-full text-center text-5-light-gray font-bold py-3 cursor-pointer mt-2 rounded-full"
  //         onClick={addNewItem}
  //       >
  //         + Add New Item
  //       </div>
  //       <div className="flex justify-between items-center w-full mt-12">
  //         <button
  //           className="bg-[#F9FAFE] px-8 py-4 rounded-full text-7-gray-blue font-bold"
  //           onClick={() => toggleModal()}
  //         >
  //           Discard
  //         </button>
  //         <div className="flex space-x-2">
  //           <button
  //             className="bg-[#373B53] px-8 py-4 rounded-full text-5-light-gray font-bold"
  //             onClick={() => handleSaveAsDraft()}
  //           >
  //             Save as Draft
  //           </button>
  //           <button
  //             className="bg-1-dark-violet text-white font-bold  px-8 py-4 rounded-full"
  //             onClick={() => handleSaveAndSend()}
  //           >
  //             Save & Send
  //           </button>
  //         </div>
  //       </div>
  //     </Formik>
  //   </div>
  // </div>
};

const AddInvoice = ({ toggleAddInvoiceModal }: AddInvoiceProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggleModal={toggleAddInvoiceModal} />,
        document.getElementById("backdrop")!
      )}
      {ReactDOM.createPortal(
        <AddInvoiceModal toggleModal={toggleAddInvoiceModal} />,
        document.getElementById("overlay")!
      )}
    </>
  );
};

export default AddInvoice;
