import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  Scale,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LeadForm } from "@/components/lead-form";
import { getLocation, locations } from "@/data/locations";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export function generateStaticParams() {
  return locations.map((l) => ({ state: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const loc = getLocation(stateSlug);
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `/locations/${loc.slug}`,
    },
  };
}

export default async function StateLocationPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const loc = getLocation(stateSlug);
  if (!loc) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `Gazette Legal Services ${loc.name}`,
    description: loc.metaDescription,
    url: `${siteConfig.url}/locations/${loc.slug}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: loc.name,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: loc.name,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main>
      {/* Hero Header */}
      <section className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
        <div className="container-shell">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations" },
              { label: loc.name },
            ]}
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8b6828] mb-4">
                <MapPin size={14} className="text-[#8b6828]" />
                <span>{loc.name} Gazette & Newspaper Service</span>
              </div>

              <h1 className="display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight">
                Gazette Name Change in {loc.name}
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--muted)] max-w-2xl">
                Online procedure for legal Name Change, Surname Modification, and Newspaper Notice publication for residents of {loc.name}. Accepted by Regional Passport Offices, UIDAI, and Banks.
              </p>

              {/* Local Key Cities Badges */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="font-bold text-[var(--navy)] self-center mr-1">Serving:</span>
                {loc.keyCities.slice(0, 6).map((city) => (
                  <span
                    key={city}
                    className="rounded-lg bg-white border border-[var(--line)] px-2.5 py-1 text-slate-700"
                  >
                    {city}
                  </span>
                ))}
                {loc.keyCities.length > 6 && (
                  <span className="rounded-lg bg-white border border-[var(--line)] px-2.5 py-1 text-slate-500">
                    +{loc.keyCities.length - 6} more districts
                  </span>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button asChild variant="gold" size="lg" className="font-bold shadow-md">
                  <Link href="#enquiry">
                    Apply for {loc.name} Gazette <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-bold">
                  <a
                    href={whatsappUrl(`Hi, I need Gazette Name Change in ${loc.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} className="text-emerald-600" />
                    WhatsApp Counselor
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick State Consultation Form */}
            <div className="legal-shadow rounded-3xl border border-white bg-white p-6 sm:p-8">
              <span className="eyebrow">{loc.name} Consultation</span>
              <h2 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1 mb-2">
                Fast Gazette Assistance
              </h2>
              <p className="text-xs text-[var(--muted)] mb-4">
                Our local document coordinators will contact you to confirm requirements.
              </p>
              <LeadForm defaultService="Name Change Gazette" />
            </div>
          </div>
        </div>
      </section>

      {/* State vs Central Gazette Insights */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell max-w-4xl space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Local Jurisdiction</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              State Gazette vs Central Gazette in {loc.name}
            </h2>
          </div>

          <p>{loc.gazetteTypeDescription}</p>

          <div className="rounded-2xl border border-slate-200 bg-[var(--cream)]/50 p-6 space-y-3">
            <h3 className="font-serif text-lg font-bold text-[var(--navy)] flex items-center gap-2">
              <Scale size={20} className="text-[#8b6828]" />
              Stamp Duty & Notary Requirements in {loc.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {loc.stampDutyInfo}
            </p>
          </div>
        </div>
      </section>

      {/* Local Newspaper Guidelines */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Press Requirements</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Newspaper Publication for {loc.name}
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              {loc.newspaperGuidelines}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {/* National English Dailies */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <Newspaper className="text-[#8b6828]" size={22} />
                <h3 className="font-serif text-lg font-bold text-[var(--navy)]">
                  National English Dailies
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                {loc.recommendedNewspapers.english.map((paper) => (
                  <li key={paper} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    {paper}
                  </li>
                ))}
              </ul>
            </div>

            {/* Regional Vernacular Dailies */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <Building className="text-[#8b6828]" size={22} />
                <h3 className="font-serif text-lg font-bold text-[var(--navy)]">
                  State Vernacular Dailies
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                {loc.recommendedNewspapers.vernacular.map((paper) => (
                  <li key={paper} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    {paper}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Regional Passport Offices */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-base font-bold text-[var(--navy)] mb-2">
              Passport Offices Covered in {loc.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 pt-1 text-xs">
              {loc.passportOffices.map((po) => (
                <span
                  key={po}
                  className="rounded-full bg-[var(--cream)] px-3 py-1 font-semibold text-[var(--navy)] border border-[var(--line)]"
                >
                  {po}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* State FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow">{loc.name} FAQs</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Frequently Asked Questions in {loc.name}
            </h2>
          </div>

          <div className="space-y-4">
            {loc.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition open:border-[var(--gold)] open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-serif text-base sm:text-lg font-bold text-[var(--navy)] flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 group-open:rotate-45 group-open:bg-[var(--gold)] group-open:text-[var(--navy)] transition-transform text-lg">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other States Directory */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container-shell text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
            Explore Gazette Services in Other States
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {locations
              .filter((l) => l.slug !== loc.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="rounded-lg bg-white border border-slate-200 px-3 py-1.5 font-medium text-slate-700 hover:border-[var(--gold)] hover:text-[#8b6828] transition"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section id="enquiry" className="py-16 md:py-20 bg-[var(--navy)] text-white">
        <div className="container-shell text-center max-w-2xl mx-auto space-y-5">
          <h2 className="display text-3xl sm:text-4xl font-bold">
            Start Your Name Change in {loc.name}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Speak directly with our {loc.name} documentation coordinator. We ensure 100% compliance with local newspaper norms and Central Gazette guidelines.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button asChild variant="gold" size="lg" className="font-bold">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Phone size={17} /> Call {siteConfig.phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#1f9d55] text-white hover:bg-[#178246] font-bold"
            >
              <a
                href={whatsappUrl(`Hi, I need Gazette assistance in ${loc.name}.`)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
