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

export const generateRandomId = () => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base-36 string
  const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
  return `${timestamp}-${randomString}`;
};
export const generateInvoiceId = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetters = Array.from(
    { length: 2 },
    () => letters[Math.floor(Math.random() * letters.length)]
  ).join("");
  const randomNumbers = Math.floor(1000 + Math.random() * 9000).toString();
  return `${randomLetters}${randomNumbers}`;
};
