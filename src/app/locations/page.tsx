import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "PAN India Gazette Notification & Newspaper Services | State Directory",
  description:
    "Explore state-by-state Gazette Name Change procedures, regional newspaper guidelines, and stamp duty requirements across all major Indian states.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "PAN India Gazette Services | State & District Directory",
    description:
      "Find local newspaper publication requirements and Gazette of India assistance for your state.",
    url: "/locations",
  },
};

export default function LocationsDirectoryPage() {
  return (
    <main>
      <section className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
        <div className="container-shell text-center max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Locations" }]} />

          <p className="eyebrow">PAN India Coverage</p>
          <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight mt-2">
            State-Wise Gazette Documentation Directory
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            The Gazette of India is universally valid across all 28 states and 8 union territories. Select your state below to review specific regional newspaper guidelines, local language translation rules, and regional passport office requirements.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-22 bg-white">
        <div className="container-shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <div
                key={loc.slug}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[var(--gold)] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="grid size-10 place-items-center rounded-xl bg-[var(--cream)] text-[#8b6828] group-hover:bg-[var(--navy)] group-hover:text-[var(--gold-light)] transition">
                      <MapPin size={20} />
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {loc.capital}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-[var(--navy)] mt-4 group-hover:text-[#8b6828] transition">
                    {loc.name}
                  </h2>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {loc.gazetteTypeDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Major Districts:
                    </p>
                    <p className="text-xs text-slate-700 mt-1 line-clamp-2">
                      {loc.keyCities.slice(0, 4).join(", ")}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--navy)] group-hover:text-[#8b6828] transition"
                  >
                    View {loc.name} Guidelines <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
