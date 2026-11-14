import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, MessageCircle, User } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { defaultBlogPosts, getDefaultBlogPost } from "@/data/blog-posts";
import { getCmsEntry } from "@/lib/db";
import { siteConfig, whatsappUrl } from "@/lib/utils";

/* eslint-disable @next/next/no-img-element -- images are served by the configured R2 public domain. */
export const revalidate = 3600;

function mediaUrl(value: string | null) {
  if (!value) return undefined;
  if (/^https?:\/\//.test(value)) return value;
  const media = (process.env.NEXT_PUBLIC_R2_PUBLIC_URL || "").replace(/\/$/, "");
  return media ? `${media}/${value}` : undefined;
}

export async function generateStaticParams() {
  return defaultBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCmsEntry("blog", slug).catch(() => null);

  if (post) {
    const image = mediaUrl(post.image_key);
    return {
      title: post.seo_title || post.title,
      description: post.meta_description || post.excerpt,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        type: "article",
        title: post.title,
        description: post.meta_description || post.excerpt || undefined,
        publishedTime: post.created_at,
        modifiedTime: post.updated_at,
        images: image ? [{ url: image, alt: post.title }] : undefined,
      },
    };
  }

  const defaultPost = getDefaultBlogPost(slug);
  if (defaultPost) {
    return {
      title: `${defaultPost.title} | ${siteConfig.name}`,
      description: defaultPost.excerpt,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        type: "article",
        title: defaultPost.title,
        description: defaultPost.excerpt,
        publishedTime: defaultPost.created_at,
      },
    };
  }

  return {};
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cmsPost = await getCmsEntry("blog", slug).catch(() => null);
  const defaultPost = !cmsPost ? getDefaultBlogPost(slug) : null;

  if (!cmsPost && !defaultPost) notFound();

  const title = cmsPost ? cmsPost.title : defaultPost!.title;
  const excerpt = cmsPost ? cmsPost.excerpt : defaultPost!.excerpt;
  const body = cmsPost ? cmsPost.body : defaultPost!.body;
  const createdAt = cmsPost ? cmsPost.created_at : defaultPost!.created_at;
  const image = cmsPost ? mediaUrl(cmsPost.image_key) : undefined;
  const author = defaultPost ? defaultPost.author : siteConfig.name;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    datePublished: createdAt,
    image: image || undefined,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
  };

  return (
    <main>
      <section className="paper-grid bg-[var(--cream)] py-12 md:py-16 border-b border-[var(--line)]">
        <div className="container-shell max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: title },
            ]}
          />

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mt-4 pb-2">
            <span className="flex items-center gap-1.5 text-[#8b6828] uppercase tracking-wider font-bold">
              <Calendar size={14} />
              {new Date(createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <User size={14} />
              {author}
            </span>
          </div>

          <h1 className="display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight mt-3">
            {title}
          </h1>

          {excerpt && (
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              {excerpt}
            </p>
          )}
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="container-shell max-w-4xl">
          {image && (
            <img
              src={image}
              alt={title}
              width="960"
              height="480"
              decoding="async"
              className="aspect-[16/8] w-full rounded-3xl object-cover mb-10 shadow-md"
            />
          )}

          {/* Article Content */}
          <article className="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed text-slate-700 space-y-6 whitespace-pre-wrap font-sans">
            {body}
          </article>

          {/* Contextual Internal Links CTA Card */}
          <div className="mt-14 rounded-3xl border border-[var(--gold)]/40 bg-[var(--cream)]/60 p-8 sm:p-10 shadow-md">
            <div className="grid gap-6 md:grid-cols-[1.3fr_.7fr] items-center">
              <div>
                <span className="eyebrow">Ready to Begin?</span>
                <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1">
                  Need Assistance with Your Gazette Name Change?
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  Our legal documentation counselors handle drafting, newspaper ad placement, and Central Gazette submission for clients nationwide.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <Button asChild variant="gold" size="lg" className="font-bold w-full justify-center">
                  <Link href="/apply">
                    Apply Now <ArrowRight size={17} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-bold w-full justify-center">
                  <a
                    href={whatsappUrl(`Hi, I was reading "${title}" and would like guidance.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={17} className="text-emerald-600" />
                    WhatsApp Counselor
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between text-sm">
            <Link href="/blog" className="font-bold text-[var(--navy)] hover:text-[#8b6828] transition">
              ← Back to All Articles
            </Link>
            <Link href="/services" className="font-bold text-[#8b6828] hover:underline">
              Explore Our Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
