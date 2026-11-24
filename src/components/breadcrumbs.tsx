import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbList = [
    { label: "Home", href: "/" },
    ...items,
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbList.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteConfig.url}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-[var(--muted)]">
        <Link href="/" className="inline-flex items-center gap-1 hover:text-[var(--navy)] transition">
          <Home size={13} className="shrink-0" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={item.label} className="inline-flex items-center gap-1.5">
              <ChevronRight size={12} className="text-slate-400 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-[var(--navy)] truncate max-w-xs">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-[var(--navy)] transition truncate max-w-xs">
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
