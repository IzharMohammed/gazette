import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  Scale,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { getService, services } from "@/data/services";
import { getCmsEntry } from "@/lib/db";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const managed = await getCmsEntry("service", slug).catch(() => null);

  if (managed) {
    return {
      title: managed.seo_title || managed.title,
      description: managed.meta_description || managed.excerpt,
      alternates: { canonical: `/services/${slug}` },
    };
  }

  const service = getService(slug);
  return service
    ? {
        title: `${service.title} | ${siteConfig.name}`,
        description: service.description,
        alternates: { canonical: `/services/${service.slug}` },
      }
    : {};
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const managed = await getCmsEntry("service", slug).catch(() => null);

  if (managed) {
    return (
      <main>
        <section className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
          <div className="container-shell max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Services", href: "/services" },
                { label: managed.title },
              ]}
            />
            <p className="eyebrow mt-4">Gazette Assistance</p>
            <h1 className="display mt-2 max-w-4xl text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)]">
              {managed.title}
            </h1>
            {managed.excerpt && (
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--muted)]">
                {managed.excerpt}
              </p>
            )}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div className="whitespace-pre-wrap leading-relaxed text-slate-700 text-base sm:text-lg space-y-4">
              {managed.body}
            </div>
            <div id="enquiry" className="legal-shadow rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 h-fit">
              <span className="eyebrow">Direct Assistance</span>
              <h2 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1 mb-4">
                Submit An Enquiry
              </h2>
              <LeadForm defaultService={managed.title} />
            </div>
          </div>
        </section>
      </main>
    );
  }

  const service = getService(slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />

          <div className="max-w-3xl mt-4">
            <span className="eyebrow">Gazette Documentation Service</span>
            <h1 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight mt-2">
              {service.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              {service.description}
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white border border-[var(--line)] w-fit px-3.5 py-1.5 rounded-lg">
              <Clock size={15} className="text-[#8b6828]" />
              <span>{service.timeline}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button asChild variant="gold" size="lg" className="font-bold shadow-md">
                <Link href="#enquiry">
                  Request Guidance <ArrowRight size={17} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-bold">
                <a
                  href={whatsappUrl(
                    `Hi, I am interested in ${service.shortTitle}. Please provide details.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} className="text-emerald-600" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Typical Documents */}
      <section className="py-16 md:py-22 bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Step-by-step pipeline */}
          <div>
            <p className="eyebrow">Procedure</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Step-by-Step Procedure
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Here is how our legal documentation team executes this service for you.
            </p>

            <div className="mt-8 space-y-6">
              {service.steps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--navy)] text-sm font-bold text-[var(--gold-light)] shadow-xs">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[var(--navy)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Documents Card */}
          <aside className="rounded-3xl border border-slate-200 bg-[var(--cream)]/60 p-7 sm:p-9 shadow-sm h-fit">
            <div className="flex items-center gap-3 pb-4 border-b border-[var(--line)]">
              <Scale size={22} className="text-[#8b6828]" />
              <h2 className="font-serif text-xl font-bold text-[var(--navy)]">
                Required Documents
              </h2>
            </div>

            <div className="mt-6 space-y-3">
              {service.documents.map((doc) => (
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700" key={doc}>
                  <CheckCircle2 size={16} className="shrink-0 text-[#8b6828] mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-[var(--line)] pt-4 text-xs leading-relaxed text-[var(--muted)]">
              This is a standard statutory checklist. Our specialists review your specific case and confirm the exact requirements before collecting any documents.
            </p>
          </aside>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faqs.length > 0 && (
        <section className="bg-[var(--navy)] py-16 md:py-20 text-white">
          <div className="container-shell max-w-4xl">
            <div className="text-center mb-12">
              <p className="eyebrow !text-[var(--gold-light)]">Got Questions?</p>
              <h2 className="display mt-2 text-3xl sm:text-4xl font-bold">
                {service.shortTitle} FAQs
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <h3 className="font-serif text-base font-bold text-[var(--gold-light)]">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Form Section */}
      <section id="enquiry" className="py-16 md:py-22 bg-[var(--cream)] border-t border-[var(--line)]">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_.9fr] items-center">
          <div>
            <p className="eyebrow">Apply Online</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)]">
              Discuss Your {service.shortTitle}
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              Submit your details and our senior legal counselor will contact you with the applicable steps, draft templates, and exact newspaper guidelines.
            </p>

            <div className="mt-8 space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Zero advance fee required to initiate review</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Complete remote online process across all states</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Encrypted private document storage</span>
              </div>
            </div>
          </div>

          <div className="legal-shadow rounded-3xl border border-white bg-white p-7 sm:p-9">
            <span className="eyebrow">Application Form</span>
            <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1 mb-4">
              Apply for {service.shortTitle}
            </h3>
            <LeadForm defaultService={service.shortTitle} />
          </div>
        </div>
      </section>

      {/* Schema Structured Data */}
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
