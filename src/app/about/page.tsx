import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Globe2,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name} - Gazette Publication & Legal Documentation`,
  description: `Learn about ${siteConfig.name}, our mission, vision, nationwide Gazette publication assistance, and strict data confidentiality protocols across India.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${siteConfig.name} - Legal Documentation Specialists`,
    description: `Leading legal documentation and Gazette publication service in India. Transparent guidance, 100% online convenience, and verified Pan-India reach.`,
    url: "/about",
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${siteConfig.name}`,
    description: "Legal documentation and Gazette publication assistance across India.",
    publisher: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
  };

  return (
    <main>
      {/* Hero Header */}
      <section className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8b6828] mb-4">
              <Sparkles size={14} className="text-[#8b6828]" />
              <span>India&apos;s Trusted Legal Documentation Partner</span>
            </div>

            <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-tight">
              Clear Guidance. Careful Documentation. Respectful Legal Support.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
              {siteConfig.name} is dedicated to simplifying Government Gazette notifications, newspaper publications, and legal name change documentation for citizens across all states and union territories in India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
              <p className="eyebrow">Who We Are</p>
              <h2 className="display text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                Simplifying Government Documentation for Everyday Citizens
              </h2>

              <p>
                Navigating Indian bureaucratic procedures for changing or correcting names in official records can be daunting. From preparing affidavits on specific stamp values to placing statutory advertisements in registered daily newspapers and compiling precise dossiers for the Controller of Publications in New Delhi, the legal formalities require absolute accuracy.
              </p>

              <p>
                At <strong>{siteConfig.name}</strong>, we bridge the gap between citizens and statutory government publishing. Our team of experienced legal documentation specialists provides a guided, transparent, and 100% online service. We manage the entire lifecycle of your application—from affidavit drafting and newspaper placement to government fee processing and digital e-Gazette delivery.
              </p>

              <p className="text-sm text-slate-500 pt-2 border-t border-slate-100">
                We believe in ethical, honest communication. Government gazette publication schedules are controlled by statutory authorities; our role is to ensure your application is 100% compliant and error-free to eliminate delays and rejections.
              </p>
            </div>

            {/* Visual Highlight Card */}
            <div className="rounded-3xl border border-slate-200 bg-[var(--cream)]/60 p-8 sm:p-10 shadow-lg">
              <div className="grid size-14 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--gold-light)] mb-6 shadow-md">
                <Scale size={28} />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mb-4">
                Our Foundational Pillars
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#8b6828] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--navy)]">Statutory Compliance</h4>
                    <p className="text-xs text-slate-600">Every draft conforms strictly to Gazette of India regulations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#8b6828] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--navy)]">End-to-End Online Facility</h4>
                    <p className="text-xs text-slate-600">No physical visits to government secretariats or court complexes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#8b6828] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--navy)]">Strict Privacy Protocols</h4>
                    <p className="text-xs text-slate-600">Encrypted document storage with zero third-party disclosure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#8b6828] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--navy)]">Transparent Pricing</h4>
                    <p className="text-xs text-slate-600">Fixed, honest fees with complete breakdown of included services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-shell">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:border-[var(--gold)] transition">
              <div className="grid size-12 place-items-center rounded-2xl bg-[var(--cream)] text-[#8b6828] mb-5">
                <Award size={24} />
              </div>
              <p className="eyebrow">Our Mission</p>
              <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-2">
                Empowering Citizens with Seamless Identity Documentation
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                To eliminate the procedural complexities, confusion, and delays traditionally associated with Indian legal documentation. We strive to provide every individual, regardless of their location, with transparent, timely, and respectful assistance to legally update their identity records.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:border-[var(--gold)] transition">
              <div className="grid size-12 place-items-center rounded-2xl bg-[var(--cream)] text-[#8b6828] mb-5">
                <Globe2 size={24} />
              </div>
              <p className="eyebrow">Our Vision</p>
              <h3 className="font-serif text-2xl font-bold text-[var(--navy)] mt-2">
                India&apos;s Foremost Digital Legal Publication Platform
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                To stand as the gold standard of digital legal documentation in India—recognized for unmatched accuracy, technological ease, ethical service delivery, and comprehensive support across all central and state jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-22 bg-white">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Our Value Proposition</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)]">
              Why Choose {siteConfig.name}?
            </h2>
            <p className="mt-4 text-base text-[var(--muted)]">
              We combine in-depth statutory knowledge with responsive digital client support.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "100% Online & Remote Assistance",
                desc: "Complete your entire application from the comfort of your home. You share scanned copies securely, and our team handles all coordination.",
                icon: Zap,
              },
              {
                title: "Experienced Legal Specialists",
                desc: "Our drafting team possesses specialized mastery in Gazette regulations, preventing costly clerical errors and formatting rejections.",
                icon: Scale,
              },
              {
                title: "Nationwide Pan-India Coverage",
                desc: "Whether you reside in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, or a tier-3 town, our service extends to all 28 states and 8 UTs.",
                icon: MapPin,
              },
              {
                title: "Strict Confidentiality & Privacy",
                desc: "Your personal identification documents and declarations are stored with bank-grade encryption and restricted, time-limited access.",
                icon: Lock,
              },
              {
                title: "Real-Time Application Tracking",
                desc: "Track the progress of your application online anytime with your unique tracking reference code.",
                icon: Clock,
              },
              {
                title: "Dedicated Client Desk",
                desc: "Direct access to our specialists via phone and WhatsApp for immediate answers to all documentation queries.",
                icon: Users,
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200 bg-[var(--cream)]/30 p-6 transition hover:bg-white hover:border-[var(--gold)] hover:shadow-md"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-[var(--navy)] text-[var(--gold-light)] mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[var(--navy)]">{f.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nationwide Service Availability */}
      <section className="py-16 md:py-20 bg-[var(--navy)] text-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="eyebrow !text-[var(--gold-light)]">Pan India Reach</p>
              <h2 className="display mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
                Serving All 28 States & 8 Union Territories
              </h2>
              <p className="mt-5 text-slate-300 leading-relaxed text-base sm:text-lg">
                Because the Gazette of India is the sovereign statutory gazette published by the Government of India, our services are valid and applicable across the entirety of the nation.
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                We also arrange mandatory regional newspaper notices in local state languages (Telugu in AP/Telangana, Kannada in Karnataka, Marathi in Maharashtra, Tamil in Tamil Nadu, Hindi in Delhi/UP/Rajasthan, Gujarati in Gujarat, Bengali in West Bengal).
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="gold" size="lg" className="font-bold">
                  <Link href="/locations">Explore State-Wise Information</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20 font-bold">
                  <Link href="/contact">Contact Our Office</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-[var(--gold-light)]">
                Key Jurisdictions Served
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--gold-light)] shrink-0" />
                  Andhra Pradesh & Telangana
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--gold-light)] shrink-0" />
                  Karnataka & Bengaluru
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--gold-light)] shrink-0" />
                  Maharashtra & Mumbai
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--gold-light)] shrink-0" />
                  Delhi NCR & Haryana
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--gold-light)] shrink-0" />
                  Tamil Nadu & Chennai
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--gold-light)] shrink-0" />
                  Uttar Pradesh & Bihar
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--gold-light)] shrink-0" />
                  Gujarat & Rajasthan
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--gold-light)] shrink-0" />
                  West Bengal & East India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust, Confidentiality & Customer Support */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-shell max-w-4xl space-y-8">
          <div className="text-center">
            <p className="eyebrow">Data Privacy & Ethics</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl font-bold text-[var(--navy)]">
              Our Trust & Confidentiality Promise
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[var(--cream)]/40 p-8 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              We treat your identification documents, affidavits, and family details with the highest level of care. All customer records are stored securely with time-limited authorization and are used solely for the preparation of your statutory publication dossier.
            </p>
            <p>
              We do not sell, distribute, or publicly expose personal information. Once your Gazette notification is officially printed and delivered, sensitive application files are archived securely.
            </p>
          </div>

          {/* Real Contact Details from Project Config */}
          <div className="grid gap-4 sm:grid-cols-3 pt-4">
            <div className="rounded-2xl border border-slate-200 p-5 text-center bg-white shadow-xs">
              <Phone className="mx-auto text-[#8b6828] mb-2" size={24} />
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Phone</p>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="mt-1 block font-bold text-[var(--navy)] hover:underline">
                {siteConfig.phone}
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 text-center bg-white shadow-xs">
              <MessageCircle className="mx-auto text-emerald-600 mb-2" size={24} />
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">WhatsApp</p>
              <a
                href={whatsappUrl("Hi, I would like guidance from Gazette Legal Services.")}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block font-bold text-[var(--navy)] hover:underline"
              >
                +91 {siteConfig.whatsapp}
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5 text-center bg-white shadow-xs">
              <Mail className="mx-auto text-[#8b6828] mb-2" size={24} />
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="mt-1 block font-bold text-[var(--navy)] hover:underline truncate">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="text-center pt-6">
            <Button asChild variant="gold" size="lg" className="font-bold shadow-md">
              <Link href="/apply">
                Start an Enquiry Today <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
