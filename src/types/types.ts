export interface StatusCardProps {
  statusType: PaymentStatus;
}

export enum PaymentStatus {
  Draft = "draft",
  Paid = "paid",
  Pending = "pending",
}
// export interface InvoiceCardProps {
//   id: string;
//   dueDate: string;
//   name: string;
//   amount: number;
//   status: string;
// }

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

// export interface Item {
//   name: string;
//   quantity: number;
//   price: number;
//   total: number;
// }

export interface Item {
  id: string;
  itemName: string;
  quantity: number | null;
  price: number | null;
  total?: number;
}

export interface InvoiceCardFields {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}
export interface InvoiceCardProps {
  invoice: InvoiceCardFields;
}
export interface FilterModalProps {
  addClickedFilter: (filter: string) => void;
}

export interface InvoideHeaderProps {
  addClickedFilter: (filter: string) => void;
}
export interface SideBarProps {
  toggleTheme: () => void;
}

export enum Theme {
  Light = "Light",
  Dark = "Dark",
}

export interface AvatarProps {
  toggleTheme: () => void;
}
export interface AddInvoiceProps {
  toggleAddInvoiceModal: () => void;
}
export interface AddInvoiceModalProps {
  toggleModal: () => void;
}

export interface BackdropProps {
  toggleModal: () => void;
}
export interface InputBoxProps {
  inputType: string;
}

export interface InvoiceDetailButtonsProps {
  toggleDeleteModal: () => void;
}
export interface InvoiceDetailHeaderProps {
  toggleDeleteModal: () => void;
  invoiceStatus: string;
}
export interface DeleteInvoiceProps {
  toggleDeleteModal: () => void;
}
export interface DeleteInvoiceModalProps {
  toggleDeleteModal: () => void;
}
