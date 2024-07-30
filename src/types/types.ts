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
