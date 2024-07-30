import { PaymentStatus } from "../types/types";
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const mapStatusToEnum = (status: string): PaymentStatus => {
  switch (status.toLowerCase()) {
    case "paid":
      return PaymentStatus.Paid;
    case "pending":
      return PaymentStatus.Pending;
    case "draft":
      return PaymentStatus.Draft;
    default:
      throw new Error(`Unknown status: ${status}`);
  }
};
