import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = ["", "/about", "/services", "/contact"];
  return [...base.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: now, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 })), ...services.map(({ slug }) => ({ url: `${siteConfig.url}/services/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .85 }))];
}
