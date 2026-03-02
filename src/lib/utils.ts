import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "NGN") {
  const abs = Math.abs(amount);
  let value: number;
  let suffix = "";

  if (abs >= 1_000_000_000) {
    value = abs / 1_000_000_000;
    suffix = "B";
  } else if (abs >= 1_000_000) {
    value = abs / 1_000_000;
    suffix = "M";
  } else if (abs >= 1_000) {
    value = abs / 1_000;
    suffix = "K";
  } else {
    value = abs;
  }

  const formatted = new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
    style: "currency",
    currency,
  }).format(value);

  return `${formatted}${suffix}`;
}
