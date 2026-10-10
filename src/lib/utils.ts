import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Gazette Legal Services",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: process.env.NEXT_PUBLIC_PHONE || "+91 99999 99999",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919999999999",
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@example.com",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
