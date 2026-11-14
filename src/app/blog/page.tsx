import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { defaultBlogPosts } from "@/data/blog-posts";
import { listCmsEntries } from "@/lib/db";

/* eslint-disable @next/next/no-img-element -- images are served by the configured R2 public domain. */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Gazette & Legal Documentation Blog | Step-by-Step Guides & Legal Insights",
  description:
    "Authoritative articles and step-by-step guides on Gazette of India name changes, newspaper ad formats, surname modifications, and document updates across India.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Gazette & Legal Documentation Blog | Educational Guides",
    description:
      "Expert legal advice, newspaper ad requirements, and Gazette of India publication procedures.",
    url: "/blog",
  },
};

export default async function BlogPage() {
  let cmsPosts: Awaited<ReturnType<typeof listCmsEntries>> = [];
  try {
    cmsPosts = await listCmsEntries("blog", true);
  } catch {
    cmsPosts = [];
  }

  const media = (process.env.NEXT_PUBLIC_R2_PUBLIC_URL || "").replace(/\/$/, "");
  const imageUrl = (value: string | null) =>
    value && (/^https?:\/\//.test(value) ? value : media ? `${media}/${value}` : "");

  return (
    <main>
      {/* Header */}
      <section className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
        <div className="container-shell text-center max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Blog" }]} />

          <p className="eyebrow">Legal Insights & Resources</p>
          <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight mt-2">
            Gazette Guidance & Knowledge Base
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Practical, verified guides explaining the Gazette of India publication procedure, newspaper notice formats, document checklists, and post-publication updates.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-22 bg-white">
        <div className="container-shell">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Render CMS posts first if present */}
            {cmsPosts.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs transition duration-200 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-xl"
              >
                <div>
                  {imageUrl(p.image_key) && (
                    <Link href={`/blog/${p.slug}`}>
                      <img
                        src={imageUrl(p.image_key) || ""}
                        alt={p.title}
                        width="640"
                        height="360"
                        loading="lazy"
                        decoding="async"
                        className="aspect-[16/9] w-full object-cover"
                      />
                    </Link>
                  )}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8b6828]">
                      {new Date(p.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h2 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-[var(--navy)] group-hover:text-[#8b6828] transition line-clamp-2">
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                      {p.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--navy)] group-hover:text-[#8b6828] transition"
                  >
                    Read Full Article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}

            {/* Always provide our rich educational cornerstone guides */}
            {defaultBlogPosts.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs transition duration-200 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-xl"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pb-3 border-b border-slate-100">
                    <span className="flex items-center gap-1.5 text-[#8b6828] font-bold uppercase tracking-wider">
                      <Calendar size={13} />
                      {new Date(p.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {p.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-[var(--navy)] group-hover:text-[#8b6828] transition line-clamp-2 leading-tight">
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--navy)] group-hover:text-[#8b6828] transition"
                  >
                    Read Guide <ArrowRight size={14} />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-medium">Verified Guide</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
