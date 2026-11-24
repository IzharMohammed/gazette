import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { listCmsEntries } from "@/lib/db";

export const metadata: Metadata = {
  title: "Gazette and Publication Services | Central Gazette & Newspaper Notice",
  description:
    "Explore our complete suite of legal documentation services: Name Change Gazette, Surname Modification, Gender Change, Religion Change, and Newspaper Notices in India.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Gazette & Legal Documentation Services India",
    description:
      "Statutory Gazette of India publication and nationwide newspaper advertisement assistance.",
    url: "/services",
  },
};

export const revalidate = 3600;

export default async function ServicesPage() {
  let managed: Awaited<ReturnType<typeof listCmsEntries>> = [];
  try {
    managed = await listCmsEntries("service", true);
  } catch {
    managed = [];
  }

  const items = managed.length
    ? managed.map((s) => ({
        slug: s.slug || s.id,
        title: s.title,
        description: s.excerpt || s.body || "",
        shortTitle: s.title,
      }))
    : services;

  return (
    <main>
      <section className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
        <div className="container-shell text-center max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Services" }]} />

          <p className="eyebrow">Practical & Compliant</p>
          <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight mt-2">
            Gazette Publication & Legal Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Review the process, statutory document checklists, and publication timelines for all Government Gazette and newspaper publication services in India.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-22 bg-white">
        <div className="container-shell">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((s) => (
              <article
                key={s.slug}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs hover:border-[var(--gold)] hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="grid size-12 place-items-center rounded-2xl bg-[var(--cream)] text-[#8b6828] group-hover:bg-[var(--navy)] group-hover:text-[var(--gold-light)] transition mb-5">
                    <Scale size={24} />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--navy)] group-hover:text-[#8b6828] transition">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--muted)]">
                    {s.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--navy)] group-hover:text-[#8b6828] transition"
                  >
                    View Requirements <ArrowRight size={14} />
                  </Link>
                  <Button asChild variant="gold" size="sm" className="font-bold">
                    <Link href={`/apply?service=${encodeURIComponent(s.shortTitle)}`}>Apply</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Location Links Banner */}
          <div className="mt-16 rounded-3xl border border-[var(--line)] bg-[var(--cream)]/60 p-8 text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-[var(--navy)]">
              Looking for State-Specific Gazette Guidance?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[var(--muted)]">
              Check our Pan-India directory for regional newspaper rules, local language translation, and passport office guidelines across 28 states.
            </p>
            <div className="mt-5">
              <Button asChild variant="outline" className="font-bold">
                <Link href="/locations">View State Directory →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
