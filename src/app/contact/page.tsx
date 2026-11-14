import type { Metadata } from "next";
import { Mail, MessageCircle, Phone, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LeadForm } from "@/components/lead-form";
import { getSettings } from "@/lib/db";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name} - Legal Documentation Office`,
  description: `Contact ${siteConfig.name} for Gazette Name Change, Surname Modification, and Newspaper Publication assistance across India.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Connect with our legal documentation counselors via Phone, WhatsApp, or Email.`,
    url: "/contact",
  },
};

export const revalidate = 3600;

export default async function ContactPage() {
  let integrations: Record<string, unknown> = {};
  try {
    integrations = (await getSettings()).integrations || {};
  } catch {}
  const query = String(integrations.map_query || "");
  const cleanPhone = siteConfig.phone.replace(/\s/g, "");

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    description: `Contact ${siteConfig.name} for Gazette publication assistance.`,
    mainEntity: {
      "@type": "LegalService",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteConfig.url,
      openingHours: "Mo-Sa 09:00-19:00",
    },
  };

  return (
    <main>
      <section className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
        <div className="container-shell max-w-4xl">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <p className="eyebrow mt-4">Direct Communication</p>
          <h1 className="display text-4xl sm:text-5xl font-bold text-[var(--navy)] leading-tight mt-2">
            Get in Touch with Our Legal Office
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--muted)]">
            Have questions about Gazette notification, newspaper ad rates, or document requirements? Reach out directly to our consultation desk.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-22 bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact Details Column */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[var(--navy)]">
              Direct Contact Channels
            </h2>

            <div className="space-y-4">
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[var(--cream)]/40 p-5 transition hover:border-[var(--gold)] hover:bg-white hover:shadow-md"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[var(--navy)] text-[var(--gold-light)]">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    Phone Helpline
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[var(--navy)]">
                    {siteConfig.phone}
                  </span>
                  <span className="block text-xs text-slate-500">Mon - Sat (9:00 AM - 7:00 PM IST)</span>
                </div>
              </a>

              <a
                href={whatsappUrl("Hi, I would like information about Gazette publication assistance.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[var(--cream)]/40 p-5 transition hover:border-emerald-400 hover:bg-white hover:shadow-md"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#1f9d55] text-white">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    WhatsApp Desk
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[var(--navy)]">
                    +91 {siteConfig.whatsapp}
                  </span>
                  <span className="block text-xs text-emerald-700 font-medium">Quick responses 7 days a week</span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[var(--cream)]/40 p-5 transition hover:border-[var(--gold)] hover:bg-white hover:shadow-md"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[var(--navy)] text-[var(--gold-light)]">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    Official Email
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[var(--navy)] truncate block max-w-xs sm:max-w-none">
                    {siteConfig.email}
                  </span>
                  <span className="block text-xs text-slate-500">Document verifications & enquiries</span>
                </div>
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[var(--navy)]">
                <Clock size={15} className="text-[#8b6828]" />
                Operating Hours
              </div>
              <p>Monday to Saturday: 9:00 AM – 7:00 PM IST</p>
              <p>Sunday: Online WhatsApp Support available for urgent notices.</p>
            </div>

            {query && (
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <iframe
                  title="Office location map"
                  loading="lazy"
                  className="h-64 w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
                />
              </div>
            )}
          </div>

          {/* Form Column */}
          <div className="legal-shadow rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 h-fit">
            <span className="eyebrow">Message Us</span>
            <h2 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1 mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs text-[var(--muted)] mb-5">
              Fill in your details and requirement. We reply promptly.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
