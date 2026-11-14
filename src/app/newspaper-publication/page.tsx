import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageCircle,
  Newspaper,
  Phone,
  Scale,
  ShieldCheck,
  Calendar,
  Home,
  UserCheck,
  Compass,
  AlertCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Newspaper Publication for Name Change & Legal Notices in India | Ad Booking",
  description:
    "Publish name change ads, surname change notices, property notices, and legal advertisements in leading national and regional daily newspapers across India.",
  alternates: { canonical: "/newspaper-publication" },
  openGraph: {
    title: "Newspaper Publication for Name Change & Legal Notices in India",
    description:
      "Statutory classified and display advertisements published in recognized English and vernacular newspapers pan India with guaranteed clippings.",
    url: "/newspaper-publication",
  },
};

const adTypes = [
  {
    title: "Name Change Advertisement",
    desc: "Mandatory public notice for changing or correcting your first, middle, or full name to satisfy government Gazette and passport requirements.",
    icon: FileText,
  },
  {
    title: "Surname Change Advertisement",
    desc: "Announcement declaring addition, alteration, or dropping of surname following marriage, divorce, or personal decision.",
    icon: UserCheck,
  },
  {
    title: "Gender Change Advertisement",
    desc: "Respectful, compliant public announcement affirming transition of gender and associated name modification.",
    icon: ShieldCheck,
  },
  {
    title: "Marriage Name Change Advertisement",
    desc: "Declaration published post-marriage to update spouse surname across PAN, Aadhaar, Passport, and employment records.",
    icon: Compass,
  },
  {
    title: "DOB Correction Advertisement",
    desc: "Public notice clarifying discrepancies between educational certificates, birth certificates, and government IDs.",
    icon: Calendar,
  },
  {
    title: "Public Notice",
    desc: "Official announcement for loss of original documents, marksheets, share certificates, sale deeds, or general public declarations.",
    icon: AlertCircle,
  },
  {
    title: "Property Notice",
    desc: "Title investigation notices, public claims against real estate transactions, or announcements regarding lost property sale deeds.",
    icon: Home,
  },
  {
    title: "Legal Notice",
    desc: "Court-directed citations, divorce notices, partnership dissolution announcements, or company statutory notices.",
    icon: Scale,
  },
];

const procedureSteps = [
  {
    step: "01",
    title: "Ad Text Formulation",
    desc: "Our legal team drafts the advertisement copy adhering strictly to the statutory format required by the Gazette Department and Passport Offices.",
  },
  {
    step: "02",
    title: "Newspaper Selection",
    desc: "We select the most appropriate recognized national English daily or approved state vernacular daily circulated in your district of residence.",
  },
  {
    step: "03",
    title: "Fast 24-48 Hour Publishing",
    desc: "Your advertisement is scheduled and printed in the classifieds section of the confirmed newspaper on the requested date.",
  },
  {
    step: "04",
    title: "E-Paper & Original Copies Delivered",
    desc: "We send high-resolution digital e-paper PDF clippings immediately upon printing and dispatch original physical newspaper copies to your address.",
  },
];

const newspaperFaqs = [
  {
    q: "Why is a newspaper advertisement mandatory for name change in India?",
    a: "Under Indian legal procedure and Central Gazette guidelines, publishing a public notice in a recognized daily newspaper serves as public declaration of your intention to change your name. This gives notice to government authorities, financial institutions, and the public, preventing fraudulent identity changes.",
  },
  {
    q: "Which newspaper should I choose for my name change ad?",
    a: "Central Gazette guidelines require that the newspaper must be a daily newspaper circulated in the town/district where you reside. For passport issuance and major government documentation, publishing in one national English daily and one local vernacular language daily is widely recommended.",
  },
  {
    q: "How many copies of the newspaper do I need for Gazette submission?",
    a: "The Department of Publication requires at least one complete original physical newspaper (not just a cutout) containing the published notice, date, and newspaper name. Our service provides full physical copies for your submission dossier.",
  },
  {
    q: "Can I correct an error in the ad after it is published?",
    a: "No. Once printed on the printing press, a newspaper notice cannot be edited. Any typographical mistake necessitates publishing a fresh corrective notice. This is why our team confirms all spellings, dates, and addresses with you prior to submission.",
  },
  {
    q: "How fast can my newspaper notice be published?",
    a: "Most daily newspapers require booking 24 to 48 hours prior to the publication date. Once your details and affidavit draft are confirmed, we can usually publish within 1 to 2 business days.",
  },
  {
    q: "Do you publish in regional language newspapers?",
    a: "Yes. We maintain a pan-India network covering major national dailies (Times of India, Indian Express, Hindustan Times) as well as prominent regional language newspapers across all states (e.g., Eenadu, Sakshi, Prajavani, Deccan Herald, Lokmat, Daily Thanthi, Amar Ujala, Dainik Jagran, Gujarat Samachar, Anandabazar Patrika).",
  },
];

export default function NewspaperPublicationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Newspaper Publication for Name Change and Legal Notices India",
    description: "Statutory classified and display newspaper advertisement booking for name change and legal notices across India.",
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
    mainEntity: newspaperFaqs.map((faq) => ({
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
          <Breadcrumbs items={[{ label: "Newspaper Publication" }]} />

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8b6828] mb-4">
                <Newspaper size={14} className="text-[#8b6828]" />
                <span>National & Regional Daily Press Network</span>
              </div>

              <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight">
                Newspaper Publication for Name Change & Legal Notices
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-[var(--muted)] max-w-2xl">
                Statutory classified and public notice advertisements published swiftly in leading national English and state vernacular daily newspapers across every district in India.
              </p>

              {/* Trust Indicators */}
              <div className="mt-7 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-[var(--navy)]">
                <span className="flex items-center gap-2 rounded-lg bg-white border border-[var(--line)] px-3.5 py-2">
                  <Clock size={17} className="text-[#8b6828]" />
                  24-48 Hour Publishing
                </span>
                <span className="flex items-center gap-2 rounded-lg bg-white border border-[var(--line)] px-3.5 py-2">
                  <CheckCircle2 size={17} className="text-[#8b6828]" />
                  Full E-Paper & Physical Copies
                </span>
                <span className="flex items-center gap-2 rounded-lg bg-white border border-[var(--line)] px-3.5 py-2">
                  <ShieldCheck size={17} className="text-[#8b6828]" />
                  Gazette & Passport Compliant
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button asChild variant="gold" size="lg" className="font-bold shadow-md">
                  <Link href="#enquiry">
                    Book Newspaper Ad <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-bold">
                  <a
                    href={whatsappUrl("Hi, I want to book a Newspaper Publication ad.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} className="text-emerald-600" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Booking Form Card */}
            <div className="legal-shadow rounded-3xl border border-white bg-white p-6 sm:p-8">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <span className="eyebrow">Quick Ad Placement</span>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1">
                  Book Your Newspaper Notice
                </h2>
                <p className="text-xs text-[var(--muted)] mt-1">
                  We formulate the ad text and share proof for your review before booking.
                </p>
              </div>
              <LeadForm defaultService="Newspaper Publication" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell max-w-4xl space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Statutory Requirement</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Why Newspaper Publication is Mandatory
            </h2>
          </div>

          <p>
            Publishing a formal notice in daily print newspapers is a statutory prerequisite under Indian civil law and the Government of India Department of Publication guidelines. Whenever an individual alters their name, modifies their surname, declares a change of gender, or corrects birth details, public notice must be issued to alert all public and private institutions.
          </p>

          <p>
            The published advertisement provides objective, timestamped documentary proof that the announcement was placed in general public circulation. Without an original newspaper clipping displaying the publication date, district, and publisher details, an application for the Central Gazette will be rejected by the Controller of Publications.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="rounded-2xl border border-slate-200 bg-[var(--cream)]/60 p-5">
              <h3 className="font-serif text-base font-bold text-[var(--navy)] mb-2">
                National English Dailies
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Circulated nationwide for passport renewal, immigration, central government records, and universal recognition across all Indian states.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[var(--cream)]/60 p-5">
              <h3 className="font-serif text-base font-bold text-[var(--navy)] mb-2">
                Regional Language Dailies
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Printed in the official state vernacular language (Hindi, Telugu, Kannada, Marathi, Tamil, Gujarati, Bengali) for local district compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Advertisements (All 8 types) */}
      <section id="types" className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Ad Categories</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Types of Newspaper Advertisements We Handle
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Comprehensive legal and classified publication services across all major Indian newspapers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {adTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[var(--gold)] hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="grid size-11 place-items-center rounded-xl bg-[var(--cream)] text-[#8b6828] mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[var(--navy)]">{type.title}</h3>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">{type.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="#enquiry"
                      className="text-xs font-bold text-[#8b6828] hover:text-[var(--navy)] transition flex items-center gap-1"
                    >
                      Book Notice →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step by Step Procedure */}
      <section className="py-16 md:py-22 bg-[var(--navy)] text-white">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow !text-[var(--gold-light)]">Simple 4-Step Flow</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
              Newspaper Publication Procedure
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Get your public notice published in just 24 to 48 hours without leaving home.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {procedureSteps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10 hover:border-[var(--gold)]/40"
              >
                <span className="font-serif text-3xl font-bold text-[var(--gold-light)]">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow">Checklist</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Documents Required for Newspaper Ad
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Newspapers require proof of identity and a notarized affidavit before accepting any legal classified announcement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Notarized Affidavit Copy",
                desc: "A scanned copy of the affidavit on non-judicial stamp paper attested by a Notary Public.",
              },
              {
                title: "Identity Proof",
                desc: "Self-attested copy of Aadhaar Card, PAN Card, Voter ID, or Passport of the applicant.",
              },
              {
                title: "Residential Address Details",
                desc: "Complete permanent or current residential address with city and PIN code for publication.",
              },
              {
                title: "Draft Text Confirmation",
                desc: "Written approval of the exact spellings of old and new names formulated by our legal team.",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-[var(--cream)]/40 p-5"
              >
                <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[var(--navy)] text-[var(--gold-light)]">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[var(--navy)]">{d.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Clear Pricing</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Newspaper Ad Packages
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Cost depends on whether you publish in a single daily or dual dailies (English + Vernacular) for full passport compliance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {/* Single Ad */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[var(--gold)] transition flex flex-col justify-between">
              <div>
                <span className="eyebrow">Standard Requirement</span>
                <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1">
                  1 Newspaper Advertisement
                </h3>
                <div className="mt-4 text-3xl font-bold text-[var(--navy)]">₹999*</div>
                <p className="mt-2 text-xs text-slate-500">
                  Published in a leading daily newspaper in your district
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Statutory Legal Drafting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Published in Recognized Daily Newspaper
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Full E-Paper PDF Delivered
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Physical Newspaper Copies Dispatched
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Button asChild variant="outline" className="w-full font-bold">
                  <Link href="/apply?service=Newspaper%20Publication&plan=single">
                    Book Single Ad
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dual Ad - Recommended for Passport */}
            <div className="rounded-3xl border-2 border-[var(--gold)] bg-[var(--cream)]/60 p-7 shadow-lg relative flex flex-col justify-between">
              <span className="absolute -top-3.5 right-6 rounded-full bg-[var(--navy)] px-3.5 py-1 text-[11px] font-bold text-[var(--gold-light)] uppercase tracking-wider">
                Passport Recommended
              </span>

              <div>
                <span className="eyebrow">Dual Ad Package</span>
                <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1">
                  2 Newspaper Ads (English + Vernacular)
                </h3>
                <div className="mt-4 text-3xl font-bold text-[var(--navy)]">₹1,799*</div>
                <p className="mt-2 text-xs text-slate-500">
                  1 National English Daily + 1 Regional State Daily
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Complete English & Regional Translation Drafting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    1 National English Daily (e.g. Times of India / Indian Express)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    1 State Vernacular Daily in District
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Both E-Papers + 2 Sets of Physical Hardcopies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    100% Accepted by Passport Seva Kendras
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-amber-200">
                <Button asChild variant="gold" className="w-full font-bold shadow-md">
                  <Link href="/apply?service=Newspaper%20Publication&plan=dual">
                    Book Dual Ads
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-4">
            *Pricing may vary slightly based on specific tier-1 metropolitan city editions or custom display sizes.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="container-shell max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow">Got Questions?</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Newspaper Publication FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {newspaperFaqs.map((faq) => (
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

      {/* Customer Support & Booking Form */}
      <section id="enquiry" className="py-16 md:py-22 bg-[var(--cream)]">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_.9fr] items-center">
          <div>
            <p className="eyebrow">Instant Booking Support</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)]">
              Need Help Choosing the Right Newspaper?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              Speak with our media placement team. We help identify the most cost-effective recognized newspaper in your exact district to ensure full compliance with Gazette and Passport rules.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-4 shadow-xs hover:border-[var(--gold)] transition"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-[var(--navy)] text-[var(--gold-light)]">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    Direct Phone Line
                  </span>
                  <span className="text-base font-bold text-[var(--navy)]">{siteConfig.phone}</span>
                </div>
              </a>

              <a
                href={whatsappUrl("Hi, I want to book a Newspaper Advertisement.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-4 shadow-xs hover:border-[var(--gold)] transition"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-[#1f9d55] text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    WhatsApp Desk
                  </span>
                  <span className="text-base font-bold text-[var(--navy)]">
                    Chat with Media Coordinator
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="legal-shadow rounded-3xl border border-white bg-white p-7 sm:p-9">
            <span className="eyebrow">Publication Request</span>
            <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1 mb-4">
              Submit Newspaper Booking
            </h3>
            <LeadForm defaultService="Newspaper Publication" />
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
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
