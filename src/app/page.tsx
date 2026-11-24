import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  FileCheck2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Sparkles,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/hero-slider";
import { LeadForm } from "@/components/lead-form";
import { ServiceCardsSection } from "@/components/service-cards-section";
import { TrustStatsSection } from "@/components/trust-stats-section";
import { getSettings, listCmsEntries } from "@/lib/db";
import { siteConfig, whatsappUrl } from "@/lib/utils";

const processSteps = [
  {
    num: "01",
    title: "Submit Your Requirement",
    text: "Select your desired service (Name Change, Surname, Gender, or Newspaper notice) and share basic contact details online.",
  },
  {
    num: "02",
    title: "Drafting & Verification",
    text: "Our legal specialists formulate the statutory affidavit on stamp paper and format the newspaper notice text for your approval.",
  },
  {
    num: "03",
    title: "Newspaper & Dossier Submission",
    text: "We book your advertisement in leading daily newspapers, format the digital CD soft copy, and compile the government submission dossier.",
  },
  {
    num: "04",
    title: "Receive Published e-Gazette",
    text: "Once printed by the Department of Publication in New Delhi, we track and deliver your authenticated e-Gazette notification PDF.",
  },
];

export const revalidate = 3600;

export default async function Home() {
  const [faqs, testimonials, settings] = await Promise.all([
    listCmsEntries("faq", true),
    listCmsEntries("testimonial", true),
    getSettings(),
  ]).catch(() => [[], [], {}] as const);

  const faqItems = faqs.length
    ? faqs.map((item) => [item.title, item.body || item.excerpt || ""] as const)
    : ([
        [
          "Is the Central Gazette notification valid across all Indian states?",
          "Yes. The Gazette of India is published by the Government of India and holds sovereign statutory validity across all 28 states, 8 Union Territories, central government bodies (MEA, Passport Seva, Railways, UPSC, Defense), and foreign embassies.",
        ],
        [
          "Can the entire procedure be completed 100% online?",
          "Yes. You share scanned copies of your ID and address proofs through our secure portal. Our team manages affidavit drafting, newspaper ad placement in your home district, and dossier compilation without you needing to travel.",
        ],
        [
          "How long does it take for the Gazette notification to be published?",
          "Drafting and newspaper publication takes 24 to 48 hours. After submission to the Department of Publication in New Delhi, Part IV of the Gazette of India is typically released within 2 to 4 weeks depending on the government printing schedule.",
        ],
        [
          "Which documents can I update after receiving the Gazette copy?",
          "With the official Gazette notification, you can update your Indian Passport, Aadhaar Card, PAN Card, Voter ID, Driving License, Bank Accounts, Property Deeds, and Educational Degrees (CBSE, ICSE, University marksheets).",
        ],
        [
          "Why is newspaper publication required before Gazette filing?",
          "The Department of Publication guidelines mandate that a public notice announcing the change of name must appear in at least one daily newspaper circulated in your district to ensure public notification.",
        ],
      ] as const);

  const integrations = "integrations" in settings ? settings.integrations : undefined;
  const reviewUrl = String(
    integrations?.google_reviews_url || integrations?.google_business_profile_url || ""
  );

  return (
    <main>
      {/* Requirement 3: Hero Section – Two Image Slider */}
      <HeroSlider />

      {/* Requirement 5: Our Services Section (Two Attractive Cards) */}
      <ServiceCardsSection />

      {/* Requirement 6: Trust and Statistics Section (Horizontal) */}
      <TrustStatsSection />

      {/* Fast Callback / Quick Form Section */}
      <section className="paper-grid bg-[var(--cream)] py-16 md:py-24 border-b border-[var(--line)]">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8b6828] mb-4">
              <Sparkles size={14} className="text-[#8b6828]" />
              <span>Free Legal Consultation</span>
            </div>
            <h2 className="display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)] leading-tight">
              Get Expert Guidance for Your Gazette Application
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--muted)] max-w-xl">
              Unsure whether you need a Central Gazette or State Gazette? Our legal documentation specialists verify your requirements, newspaper options, and draft format before any fee is committed.
            </p>

            <div className="mt-8 space-y-3.5 text-sm font-semibold text-[var(--navy)]">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-[#8b6828] shrink-0" />
                <span>100% Confidential handling under restricted access</span>
              </div>
              <div className="flex items-center gap-3">
                <FileCheck2 size={20} className="text-[#8b6828] shrink-0" />
                <span>Pre-submission compliance check to avoid rejection</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock3 size={20} className="text-[#8b6828] shrink-0" />
                <span>Clear tracking code with WhatsApp updates</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg" className="font-bold shadow-md">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  <Phone size={17} /> Call: {siteConfig.phone}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-bold">
                <a
                  href={whatsappUrl("Hi, I want a free consultation about Gazette services.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} className="text-emerald-600" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Lead Form Box */}
          <div className="legal-shadow rounded-3xl border border-white bg-white p-7 sm:p-9">
            <span className="eyebrow">Request A Callback</span>
            <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-1 mb-2">
              Tell Us What You Need Help With
            </h3>
            <p className="text-xs text-[var(--muted)] mb-5">
              Share basic details below. No account creation required.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* How It Works (4-Step Process) */}
      <section id="process" className="bg-[var(--navy)] py-18 text-white md:py-24">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow !text-[var(--gold-light)]">Simple & Transparent</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
              How the Process Works
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              A straightforward 4-stage pipeline tailored for remote convenience and error-free execution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:bg-white/10 hover:border-[var(--gold)]/40"
              >
                <span className="font-serif text-3xl font-bold text-[var(--gold-light)]">
                  {step.num}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Documents Checklist */}
      <section id="documents" className="py-18 md:py-24 bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow">Document Checklist</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Know What is Required Before You Begin
            </h2>
            <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
              Requirements differ slightly depending on whether you are changing an adult name, minor child name, or modifying a surname. You only need to share scanned copies—our team drafts all legal affidavits, handles stamp duty, and compiles the government proforma.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="gold" className="font-bold">
                <Link href="/name-change">View Name Change Details</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">All Services Checklist</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Identity Proof (Aadhaar / PAN)",
              "Address Proof (Utility / Ration)",
              "Passport-Size Photographs",
              "Notarized Name Change Affidavit",
              "Original Daily Newspaper Notice",
              "Prescribed Proforma & Digital CD",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[var(--cream)]/50 p-4 text-xs sm:text-sm font-semibold text-[var(--navy)]"
              >
                <CheckCircle2 size={18} className="text-[#8b6828] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faqs" className="bg-[var(--cream)] py-18 md:py-24 border-t border-[var(--line)]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Common Questions</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Helpful Answers Before You Apply
            </h2>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              Everything you need to know about Gazette legal validity, newspaper rules, and document updates in India.
            </p>
            <div className="mt-6">
              <Link
                href="/name-change"
                className="text-xs font-bold text-[#8b6828] hover:text-[var(--navy)] flex items-center gap-1"
              >
                More Name Change FAQs →
              </Link>
            </div>
          </div>

          <div className="space-y-3.5">
            {faqItems.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-2xl border border-[var(--line)] bg-white p-5 transition open:border-[var(--gold)] open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-serif text-base font-bold text-[var(--navy)] flex items-center justify-between gap-4">
                  <span>{q}</span>
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-slate-100 text-[#8b6828] group-open:rotate-45 group-open:bg-[var(--gold)] group-open:text-[var(--navy)] transition-transform text-lg">
                    +
                  </span>
                </summary>
                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[var(--muted)] border-t border-slate-100 pt-3">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (If present in CMS) */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-shell">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="eyebrow">Client Feedback</p>
                <h2 className="display mt-2 text-3xl font-bold text-[var(--navy)]">
                  Verified Client Reviews
                </h2>
              </div>
              {reviewUrl && (
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-sm text-[var(--navy)] hover:text-[#8b6828] transition"
                >
                  View Google Reviews →
                </a>
              )}
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote
                  key={item.id}
                  className="rounded-2xl border border-slate-200 p-6 bg-slate-50/50"
                >
                  <div className="flex gap-1 text-[var(--gold)] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">
                    &quot;{item.body || item.excerpt}&quot;
                  </p>
                  <footer className="mt-4 font-bold text-xs text-[var(--navy)]">
                    — {item.title}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="py-16 md:py-20">
        <div className="container-shell rounded-3xl bg-gradient-to-br from-[#0a192f] via-[#102a43] to-[#0d2137] px-7 py-14 text-center text-white sm:px-14 shadow-2xl relative overflow-hidden">
          <div className="inline-flex size-12 place-items-center rounded-2xl bg-[var(--gold)]/20 text-[var(--gold-light)] mb-4 border border-[var(--gold)]/30">
            <Award size={24} />
          </div>
          <h2 className="display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Ready to Legally Change Your Name?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Speak directly with our legal documentation counselors. We confirm the applicable requirements, spellings, and local newspaper guidelines before any fee is committed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button asChild variant="gold" size="lg" className="font-bold shadow-md">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Phone size={17} /> Call {siteConfig.phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20 font-bold">
              <Link href="/apply">Start Your Application Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
