export const parsePrice = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    return Number(value.replace(/[₹,]/g, "").trim()) || 0;
  }
  return 0;
};
