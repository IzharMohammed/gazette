import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/utils";
import { listCmsEntries } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const base = ["", "/about", "/services", "/contact", "/blog", "/appointments"];
  const posts=await listCmsEntries("blog",true).catch(()=>[]);
  return [...base.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: now, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 })), ...services.map(({ slug }) => ({ url: `${siteConfig.url}/services/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .85 })),...posts.filter(post=>post.slug).map(post=>({url:`${siteConfig.url}/blog/${post.slug}`,lastModified:new Date(post.updated_at),changeFrequency:"monthly" as const,priority:.75}))];
}
