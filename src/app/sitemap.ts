import type { MetadataRoute } from "next";
import { defaultBlogPosts } from "@/data/blog-posts";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { listCmsEntries } from "@/lib/db";
import { siteConfig } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Core high-priority landing pages
  const basePages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/name-change", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/newspaper-publication", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/plans", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/appointments", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/track", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  // Services
  const servicePages = services.map(({ slug }) => ({
    url: `${siteConfig.url}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // State-wise Pan India locations
  const locationPages = locations.map(({ slug }) => ({
    url: `${siteConfig.url}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Blog posts from CMS and default educational guides
  let cmsPosts: Awaited<ReturnType<typeof listCmsEntries>> = [];
  try {
    cmsPosts = await listCmsEntries("blog", true);
  } catch {
    cmsPosts = [];
  }

  const cmsBlogPages = cmsPosts
    .filter((post) => post.slug)
    .map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at || post.created_at || now),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));

  const defaultBlogPages = defaultBlogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.created_at),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...basePages.map((p) => ({
      url: `${siteConfig.url}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...servicePages,
    ...locationPages,
    ...defaultBlogPages,
    ...cmsBlogPages,
  ];
}
