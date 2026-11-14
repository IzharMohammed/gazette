import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gazette Name Change Online India | Complete Procedure, Documents & Filing",
  description:
    "Apply for Gazette Name Change in India online. End-to-end legal assistance for affidavit drafting, newspaper publication, and official Central Gazette notification.",
  alternates: { canonical: "/name-change" },
  openGraph: {
    title: "Gazette Name Change Online in India | Complete Procedure & Documents",
    description:
      "Official Central Gazette notification for legal name change across India. Legally accepted for Passport, Aadhaar, PAN, and Bank updates.",
    url: "/name-change",
  },
};

const requiredDocuments = [
  {
    title: "Identity Proof (Any One)",
    desc: "Self-attested copy of Aadhaar Card, PAN Card, Voter ID, or Passport.",
  },
  {
    title: "Address Proof (Any One)",
    desc: "Aadhaar Card, Electricity Bill, Ration Card, or Water Bill showing current residence.",
  },
  {
    title: "Passport Size Photographs",
    desc: "Two recent color photographs (cross-signed across the front).",
  },
  {
    title: "Name Change Affidavit",
    desc: "Prepared on non-judicial stamp paper, mentioning old & new name, reason, and duly notarized.",
  },
  {
    title: "Original Newspaper Advertisement",
    desc: "Full page original newspaper clipping of the public notice in a recognized daily.",
  },
  {
    title: "Prescribed Proforma & Soft Copy CD",
    desc: "Computerized proforma signed by applicant along with compact disc containing soft copy in MS Word.",
  },
  {
    title: "Marriage / Divorce Certificate (If Applicable)",
    desc: "Required for women changing surname post-marriage or reverting to maiden name after divorce.",
  },
  {
    title: "Minor Documents (For Minors)",
    desc: "Child's birth certificate or school transfer certificate plus parents' joint declaration.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Affidavit Drafting & Notarization",
    desc: "We draft the legally precise affidavit on non-judicial stamp paper stating your old name, proposed new name, father's/husband's name, residential address, and specific reason for name change. It is signed and notarized by an authorized Notary Public.",
  },
  {
    step: "02",
    title: "Newspaper Advertisement Publication",
    desc: "Publishing a public announcement in daily newspapers is a statutory government requirement. We draft the publication notice and publish it in recognized national English or vernacular dailies circulated in your district.",
  },
  {
    step: "03",
    title: "Dossier Compilation & Government Fee",
    desc: "We prepare the prescribed application proforma, format the digital CD soft copy (.docx) strictly per Department of Publication specifications, compile all supporting documents, and pay the official government Bharatkosh challan fee.",
  },
  {
    step: "04",
    title: "Gazette Notification & Digital Delivery",
    desc: "The complete file is submitted to the Controller of Publications, Civil Lines, Delhi. Once printed in the weekly Gazette of India (Part IV), we track and email you the official authenticated e-Gazette notification PDF.",
  },
];

const nameChangeTypes = [
  {
    title: "Adult Name Change",
    desc: "Complete change or minor spelling rectification of first name, middle name, or full legal name for adults.",
  },
  {
    title: "Surname Change After Marriage",
    desc: "Adding husband's surname, hyphenating surnames, or updating records across Passport and Aadhaar.",
  },
  {
    title: "Reverting to Maiden Name Post-Divorce",
    desc: "Legally removing husband's surname and restoring maiden name with divorce decree documentation.",
  },
  {
    title: "Minor Child Name Change",
    desc: "Updating school admissions, CBSE/ICSE board certificates, and passport records for children under 18.",
  },
  {
    title: "Religion Change Name Update",
    desc: "Adopting a new name corresponding to voluntary conversion of religious faith with statutory declarations.",
  },
  {
    title: "Gender Change & Name Transition",
    desc: "Respectful, confidential update of name and gender marker in compliance with Transgender Persons Act.",
  },
];

const faqs = [
  {
    q: "Why is a Gazette notification required for changing my name in India?",
    a: "In India, an affidavit and newspaper ad alone are not recognized by central government bodies like the Ministry of External Affairs (Passport Seva), UIDAI, EPFO, or educational examination boards for major name alterations. The Gazette of India notification is the ultimate, legally binding public record that proves your change of name beyond doubt.",
  },
  {
    q: "Can the entire Gazette name change process be done online?",
    a: "Yes. Our team provides an end-to-end remote service. You submit your details and scanned identity proofs securely online. We prepare your affidavit draft, book the newspaper advertisement in your local area, compile the government dossier with digital CD, and coordinate submission without requiring you to visit government offices in New Delhi.",
  },
  {
    q: "How long does it take for the Gazette notification to be published?",
    a: "Drafting the affidavit and publishing the newspaper ad takes 1 to 2 business days. Once the compiled application is submitted to the Department of Publication in New Delhi, the Government of India typically publishes Part IV of the Gazette in approximately 2 to 4 weeks depending on the department's printing schedule.",
  },
  {
    q: "What is the difference between Central Gazette and State Gazette?",
    a: "The Central Gazette (The Gazette of India) is published by the Government of India and is universally valid across all 28 states, 8 Union Territories, central government bodies, all passport offices, and foreign embassies. A State Gazette is published by a state government and may only hold local state jurisdiction.",
  },
  {
    q: "How do I download my published Gazette notification copy?",
    a: "The Government of India has discontinued physical hardcopy distribution and now publishes all notifications electronically on the official e-Gazette portal (egazette.gov.in). Once your notification is published, we verify and deliver the authenticated digital e-Gazette PDF directly to your email and WhatsApp.",
  },
  {
    q: "Which documents can I update after receiving the Gazette copy?",
    a: "With the official Gazette notification, you can seamlessly update your: Indian Passport, Aadhaar Card, PAN Card, Voter ID Card, Driving License, Bank Accounts, Mutual Funds & Demat Accounts, Property title deeds, and Educational Certificates (CBSE, ICSE, University degrees).",
  },
  {
    q: "Is newspaper advertisement mandatory before Gazette submission?",
    a: "Yes. Guidelines issued by the Controller of Publications mandate that at least one original newspaper advertisement announcing the name change must be submitted with the application file.",
  },
  {
    q: "Can I change my surname without a marriage certificate?",
    a: "Yes. Any Indian citizen can legally alter, add, or drop a surname through the standard Gazette publication process by submitting a notarized affidavit and newspaper notice stating their intention.",
  },
];

export default function NameChangePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gazette Name Change Service India",
    description: "Complete legal documentation and Central Gazette notification for name change across India.",
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
    mainEntity: faqs.map((faq) => ({
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
      {/* Hero Section */}
      <section className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: "Name Change" }]} />

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8b6828] mb-4">
                <Sparkles size={14} className="text-[#8b6828]" />
                <span>Official Central Gazette Notification</span>
              </div>

              <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight">
                Gazette Name Change Online in India
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-[var(--muted)] max-w-2xl">
                Fast, legally binding, and 100% online process for publishing your legal name change in The Gazette of India. Accepted by Passport Seva, UIDAI (Aadhaar), PAN, Banks, and Government Authorities pan India.
              </p>

              {/* Trust highlights */}
              <div className="mt-7 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-[var(--navy)]">
                <span className="flex items-center gap-2 rounded-lg bg-white border border-[var(--line)] px-3.5 py-2">
                  <ShieldCheck size={17} className="text-[#8b6828]" />
                  Universally Valid for Passport
                </span>
                <span className="flex items-center gap-2 rounded-lg bg-white border border-[var(--line)] px-3.5 py-2">
                  <Zap size={17} className="text-[#8b6828]" />
                  100% Online Assistance
                </span>
                <span className="flex items-center gap-2 rounded-lg bg-white border border-[var(--line)] px-3.5 py-2">
                  <Award size={17} className="text-[#8b6828]" />
                  25,000+ Happy Clients
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button asChild variant="gold" size="lg" className="font-bold shadow-md">
                  <Link href="#enquiry">
                    Apply for Name Change <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-bold">
                  <a
                    href={whatsappUrl("Hi, I want assistance with Gazette Name Change.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} className="text-emerald-600" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Consultation Lead Form Card */}
            <div className="legal-shadow rounded-3xl border border-white bg-white p-6 sm:p-8">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <span className="eyebrow">Quick Application</span>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1">
                  Start Your Name Change
                </h2>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Share your details. Our legal specialist will call you within 15 minutes.
                </p>
              </div>
              <LeadForm defaultService="Name Change Gazette" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction & Legal Background */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell max-w-4xl space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Legal Background</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              What is a Gazette Name Change?
            </h2>
          </div>

          <p>
            In India, a legal name change is a statutory multi-step procedure regulated by the Department of Publication, Ministry of Housing and Urban Affairs, Government of India. The official gazette, known as <strong>The Gazette of India (भारत का राजपत्र)</strong>, is an authorized government publication printed weekly in New Delhi.
          </p>

          <p>
            While many citizens begin with a local notary affidavit or a newspaper announcement, government departments, passport offices, banks, and educational institutions require an official Gazette Notification before updating records. Once your name change is published in Part IV of the Gazette, it becomes a permanent public record that carries conclusive legal proof across all states, union territories, and international jurisdictions.
          </p>

          <div className="rounded-2xl border border-[var(--gold)]/40 bg-[var(--cream)] p-6 sm:p-7 text-sm space-y-2">
            <h3 className="font-serif text-lg font-bold text-[var(--navy)] flex items-center gap-2">
              <Scale size={20} className="text-[#8b6828]" />
              Supreme Legal Proof in India
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Under Indian law, a Gazette of India notification supersedes affidavits and guarantees that no government office (Passport Seva, UIDAI, Income Tax, Defense, Railways, Banks) can deny your updated legal name.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Why It Is Essential</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Key Benefits of Gazette Name Change
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Discover why an official government Gazette notification is the single most powerful legal instrument for your new identity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mandatory for Indian Passport",
                desc: "Passport Seva Kendras (MEA) strictly mandate Gazette notification for major name alterations, additions, or discrepancy corrections.",
              },
              {
                title: "UIDAI Aadhaar & PAN Updates",
                desc: "Smoothly update your Aadhaar and Income Tax PAN card without rejection or complex documentation loops.",
              },
              {
                title: "Bank & Financial Accounts",
                desc: "Update your bank accounts, fixed deposits, demat accounts, loan agreements, and insurance policies permanently.",
              },
              {
                title: "Educational Records & Degrees",
                desc: "Recognized by CBSE, ICSE, state boards, UGC, and universities to align your diplomas and marksheets.",
              },
              {
                title: "Post-Marriage & Divorce Clarity",
                desc: "Provides clear legal sanction for taking up spouse surname or reverting back to maiden name after legal dissolution.",
              },
              {
                title: "International & Visa Validity",
                desc: "Universally acknowledged by foreign embassies, immigration authorities, and visa processing centers worldwide.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[var(--gold)]"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-[var(--cream)] text-[#8b6828] mb-4">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[var(--navy)]">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Name Changes */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Situations Covered</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Types of Name Changes We Assist With
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nameChangeTypes.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-slate-200 bg-[var(--cream)]/40 p-6 transition hover:bg-white hover:border-[var(--gold)] hover:shadow-md"
              >
                <h3 className="font-serif text-xl font-bold text-[var(--navy)]">{t.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Checklist</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Required Documents for Gazette Name Change
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              You only need to share scanned copies with us. Our legal drafting specialists handle the stamp paper, formatting, and submission dossier.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {requiredDocuments.map((doc, idx) => (
              <div
                key={doc.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-[var(--gold)] transition"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-[var(--navy)] text-xs font-bold text-[var(--gold-light)] mb-3">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-base font-bold text-[var(--navy)]">{doc.title}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-16 md:py-22 bg-[var(--navy)] text-white">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow !text-[var(--gold-light)]">Step-By-Step Procedure</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
              How The Process Works
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              A transparent, guided 4-stage pipeline designed for 100% online convenience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10 hover:border-[var(--gold)]/40"
              >
                <span className="font-serif text-3xl font-bold text-[var(--gold-light)]">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="gold" size="lg" className="font-bold">
              <Link href="#enquiry">Start Your Application Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing / Plans Integration */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Transparent Pricing</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Affordable Name Change Packages
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Transparent service fees with zero hidden charges. Compare our plans or speak with a specialist.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Basic */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[var(--gold)] transition flex flex-col justify-between">
              <div>
                <span className="eyebrow">Self-Submission</span>
                <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1">Basic Plan</h3>
                <div className="mt-4 text-3xl font-bold text-[var(--navy)]">₹1,499</div>
                <p className="mt-2 text-xs text-slate-500">Legal affidavit & proforma drafting kit</p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Notarized Affidavit Draft Preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Newspaper Ad Text Formulation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Prescribed Proforma & CD File Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Filing Guidelines & Checklist
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Button asChild variant="outline" className="w-full font-bold">
                  <Link href="/apply?plan=basic&service=Name%20Change%20Gazette">Select Basic Plan</Link>
                </Button>
              </div>
            </div>

            {/* Standard - Featured */}
            <div className="rounded-3xl border-2 border-[var(--gold)] bg-[var(--cream)]/50 p-7 shadow-xl relative flex flex-col justify-between">
              <span className="absolute -top-3.5 right-6 rounded-full bg-[var(--navy)] px-3.5 py-1 text-[11px] font-bold text-[var(--gold-light)] uppercase tracking-wider">
                Most Popular
              </span>

              <div>
                <span className="eyebrow">Complete Facilitation</span>
                <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1">Standard Plan</h3>
                <div className="mt-4 text-3xl font-bold text-[var(--navy)]">₹2,999</div>
                <p className="mt-2 text-xs text-slate-500">End-to-end Gazette filing with 1 newspaper ad</p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Complete Affidavit Drafting & Notarization Support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    1 Newspaper Advertisement Included (Daily Paper)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Department of Publication Dossier & CD Compilation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Govt Challan Processing Assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    e-Gazette Tracking & Digital Copy Delivery
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-amber-200">
                <Button asChild variant="gold" className="w-full font-bold shadow-md">
                  <Link href="/apply?plan=standard&service=Name%20Change%20Gazette">
                    Select Standard Plan
                  </Link>
                </Button>
              </div>
            </div>

            {/* Premium */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:border-[var(--gold)] transition flex flex-col justify-between">
              <div>
                <span className="eyebrow">Dual Newspaper VIP</span>
                <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1">Premium Plan</h3>
                <div className="mt-4 text-3xl font-bold text-[var(--navy)]">₹4,999</div>
                <p className="mt-2 text-xs text-slate-500">For Passport, Govt Employees & 2 Newspapers</p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Priority Legal Affidavit Preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    2 Newspaper Ads (1 English National + 1 Regional Daily)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Complete Central Gazette File Submission
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Dedicated Senior Documentation Case Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    Certified Gazette Notification Dispatch & PDF
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Button asChild variant="outline" className="w-full font-bold">
                  <Link href="/apply?plan=premium&service=Name%20Change%20Gazette">
                    Select Premium Plan
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/plans" className="text-sm font-bold text-[var(--navy)] hover:underline">
              View Detailed Plan Comparison & Exclusions →
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-shell max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow">Common Doubts Cleared</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
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

      {/* Customer Support & Enquiry CTA Section */}
      <section id="enquiry" className="py-16 md:py-22 bg-[var(--cream)]">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_.9fr] items-center">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)]">
              Have Questions About Your Name Change?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              Speak directly with our legal documentation counselors. We confirm the applicable requirements, spellings, and local newspaper guidelines before any fee is committed.
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
                    Call Legal Helpline
                  </span>
                  <span className="text-base font-bold text-[var(--navy)]">{siteConfig.phone}</span>
                </div>
              </a>

              <a
                href={whatsappUrl("Hi, I want assistance with Gazette Name Change.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-4 shadow-xs hover:border-[var(--gold)] transition"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-[#1f9d55] text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    Direct WhatsApp Support
                  </span>
                  <span className="text-base font-bold text-[var(--navy)]">
                    Chat with Name Change Specialist
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="legal-shadow rounded-3xl border border-white bg-white p-7 sm:p-9">
            <span className="eyebrow">Consultation Form</span>
            <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1 mb-4">
              Request Free Consultation
            </h3>
            <LeadForm defaultService="Name Change Gazette" />
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
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
