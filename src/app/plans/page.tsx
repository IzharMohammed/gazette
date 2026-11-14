import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gazette Publication Plans & Pricing | Transparent Fees in India",
  description:
    "Compare Gazette publication and newspaper advertising plans. Transparent pricing, zero hidden charges, and end-to-end legal documentation support.",
  alternates: { canonical: "/plans" },
  openGraph: {
    title: "Gazette Publication Plans & Pricing | Transparent Legal Fees",
    description:
      "Affordable, transparent Gazette notification and newspaper publication packages. Choose Basic, Standard, or Premium plans.",
    url: "/plans",
  },
};

const plans = [
  {
    id: "basic",
    name: "Basic Plan",
    badge: "Self-Submission Kit",
    price: "₹1,499",
    turnaround: "24 - 48 Hours for Drafting",
    description: "Ideal for applicants who wish to submit their newspaper ad and gazette application locally.",
    popular: false,
    includes: [
      "Custom Name Change Affidavit Draft on Stamp Paper",
      "Statutory Newspaper Advertisement Text Formulation",
      "Prescribed Proforma Application (.docx file for CD)",
      "Comprehensive Document Checklist & Verification",
      "Step-by-step submission instructions for New Delhi",
      "Dedicated WhatsApp Support for queries",
    ],
    excludes: [
      "Newspaper publication cost (paid directly to publisher)",
      "Government Bharatkosh Gazette fee",
      "Physical dossier compilation & dispatch",
    ],
    ctaText: "Choose Basic Plan",
  },
  {
    id: "standard",
    name: "Standard Plan",
    badge: "Most Popular",
    price: "₹2,999",
    turnaround: "End-to-End Publication (2-4 Weeks)",
    description: "Our comprehensive package covering affidavit drafting, newspaper publication, and Gazette filing.",
    popular: true,
    includes: [
      "Complete Notarized Affidavit Preparation Assistance",
      "1 Classified Daily Newspaper Ad in Recognized Newspaper",
      "Full E-Paper PDF + Physical Newspaper Dispatched",
      "Government Proforma Formatting & Digital CD Burning",
      "Department of Publication Submission Dossier Assembly",
      "Official Govt Bharatkosh Challan Payment Guidance",
      "Weekly Application Status Tracking",
      "Authenticated e-Gazette PDF Delivery to Email/WhatsApp",
    ],
    excludes: [
      "Second regional newspaper ad (if specifically required)",
    ],
    ctaText: "Choose Standard Plan",
  },
  {
    id: "premium",
    name: "Premium Plan",
    badge: "All-Inclusive VIP",
    price: "₹4,999",
    turnaround: "Priority 24h Drafting & VIP Queue",
    description: "Dual newspaper package recommended for Passport, Government Employees, Minors, and Surname Changes.",
    popular: false,
    includes: [
      "Priority Notarized Affidavit Drafting (Within 24 Hours)",
      "2 Newspaper Ads: 1 National English + 1 State Regional Daily",
      "Original Physical Newspaper Copies Delivered to Doorstep",
      "Complete Central Gazette Dossier with Digital CD Formatting",
      "Direct Department of Publication Submission Management",
      "Dedicated Senior Legal Documentation Specialist",
      "Comprehensive Guidance for Updating Passport, Aadhaar & PAN",
      "Permanent Digital Archive & Certified e-Gazette PDF",
    ],
    excludes: [],
    ctaText: "Choose Premium Plan",
  },
];

const comparisonRows = [
  { feature: "Notarized Affidavit Drafting", basic: true, standard: true, premium: true },
  { feature: "Statutory Ad Text Formulation", basic: true, standard: true, premium: true },
  { feature: "Prescribed Proforma & CD Setup", basic: true, standard: true, premium: true },
  { feature: "Newspaper Advertisement Included", basic: "Self Paid", standard: "1 Daily Newspaper", premium: "2 Newspapers (Eng + Reg)" },
  { feature: "Physical Newspaper Copies Dispatched", basic: false, standard: true, premium: true },
  { feature: "Central Gazette Dossier Compilation", basic: "Instructions Only", standard: true, premium: true },
  { feature: "Govt Challan Payment Assistance", basic: false, standard: true, premium: true },
  { feature: "e-Gazette PDF Tracking & Delivery", basic: false, standard: true, premium: true },
  { feature: "Dedicated Senior Case Manager", basic: false, standard: false, premium: true },
  { feature: "Passport & Aadhaar Update Guidance", basic: false, standard: true, premium: true },
];

const pricingFaqs = [
  {
    q: "Are there any hidden charges in these plans?",
    a: "No. Our pricing is 100% transparent. The Standard and Premium plans clearly specify the included legal drafting, newspaper publication, and dossier compilation. Government statutory fees (such as non-judicial stamp paper stamp duty and Central Government publication challans) are itemized upfront.",
  },
  {
    q: "Can I upgrade my plan later if needed?",
    a: "Yes. If you start with the Basic Plan and later decide you would like us to book the newspaper advertisement or compile the complete Central Gazette dossier, you can upgrade by simply paying the difference.",
  },
  {
    q: "Why do some people need two newspaper advertisements?",
    a: "While the Central Gazette requires at least one daily newspaper clipping, Regional Passport Offices (RPO) and certain central government departments frequently request two advertisements: one in an English national daily and one in the prominent regional language daily of the applicant's state.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all standard secure Indian payment methods including UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit/Debit cards, and direct bank transfers. An official invoice is generated for every service.",
  },
];

export default function PlansPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Gazette Publication Assistance Plans",
    description: "Transparent Gazette notification and newspaper publication packages across India.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "1499",
      highPrice: "4999",
      offerCount: "3",
    },
  };

  return (
    <main>
      {/* Hero Header */}
      <section className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
        <div className="container-shell text-center max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Plans & Pricing" }]} />

          <p className="eyebrow">Affordable & Transparent</p>
          <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight mt-2">
            Gazette Publication Plans & Pricing
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Choose the right documentation package for your requirement. We provide clear, fixed pricing with zero hidden fees and end-to-end guidance.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 md:py-22 bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-[var(--gold)] bg-[var(--cream)]/40 shadow-xl lg:-translate-y-2 relative"
                    : "border border-slate-200 bg-white shadow-sm hover:border-[var(--gold)] hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 right-6 rounded-full bg-[var(--navy)] px-4 py-1 text-xs font-bold text-[var(--gold-light)] uppercase tracking-wider shadow-sm">
                    {plan.badge}
                  </span>
                )}

                <div>
                  {!plan.popular && (
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8b6828]">
                      {plan.badge}
                    </span>
                  )}
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy)] mt-1">
                    {plan.name}
                  </h2>
                  <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed min-h-10">
                    {plan.description}
                  </p>

                  <div className="mt-6 border-y border-slate-100 py-4">
                    <span className="text-4xl font-bold text-[var(--navy)]">{plan.price}</span>
                    <span className="text-xs text-slate-500 block mt-1">
                      Turnaround: <strong>{plan.turnaround}</strong>
                    </span>
                  </div>

                  {/* Included features */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--navy)] mb-3">
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {plan.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded features */}
                  {plan.excludes.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Exclusions:
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-500">
                        {plan.excludes.map((exc) => (
                          <li key={exc} className="flex items-start gap-2">
                            <XCircle size={14} className="text-slate-400 shrink-0 mt-0.5" />
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Button
                    asChild
                    variant={plan.popular ? "gold" : "outline"}
                    size="lg"
                    className="w-full font-bold shadow-sm"
                  >
                    <Link href={`/apply?plan=${plan.id}`}>
                      {plan.ctaText} <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-shell max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow">Side-By-Side Comparison</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Detailed Plan Comparison
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-[var(--navy)] text-white">
                  <th className="p-4 font-serif font-bold">Feature / Service</th>
                  <th className="p-4 text-center font-bold">Basic</th>
                  <th className="p-4 text-center font-bold text-[var(--gold-light)]">Standard</th>
                  <th className="p-4 text-center font-bold">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-800">{row.feature}</td>
                    <td className="p-4 text-center text-slate-600">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? (
                          <CheckCircle2 size={16} className="text-emerald-600 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        row.basic
                      )}
                    </td>
                    <td className="p-4 text-center font-semibold text-[var(--navy)] bg-[var(--cream)]/40">
                      {typeof row.standard === "boolean" ? (
                        row.standard ? (
                          <CheckCircle2 size={16} className="text-emerald-600 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        row.standard
                      )}
                    </td>
                    <td className="p-4 text-center text-slate-600">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <CheckCircle2 size={16} className="text-emerald-600 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        row.premium
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow">Common Billing Inquiries</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq) => (
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

      {/* CTA Box */}
      <section className="py-16 bg-[var(--navy)] text-white">
        <div className="container-shell text-center max-w-2xl mx-auto space-y-5">
          <h2 className="display text-3xl sm:text-4xl font-bold">
            Still Not Sure Which Plan to Pick?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Call or message our legal documentation desk. We will evaluate your purpose (Passport, Bank, Minor, Surname) and recommend the most economical option.
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
                href={whatsappUrl("Hi, I need help selecting the right Gazette publication plan.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
            </Button>
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
