export interface StatusCardProps {
  statusType: PaymentStatus;
}

export enum PaymentStatus {
  Draft = "Draft",
  Paid = "Paid",
  Pending = "Pending",
}
export interface InvoiceCardProps {
  id: string;
  dueDate: string;
  name: string;
  amount: number;
  status: string;
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
export interface Item {
  id: string;
  itemName: string;
  quantity: number | null;
  price: number | null;
}
