export const formatCurrencyCode = (currency: string) => {
  if (currency === "USD") return "$";
  if (currency === "EUR") return "€";
  return "₹";
};
