import type { Metadata } from "next";
import {
  CheckCircle2,
  Lock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Apply Online for Gazette Publication & Legal Services",
  description:
    "Submit your confidential enquiry for Gazette Name Change, Surname Modification, Gender Change, or Newspaper Publication in India.",
  alternates: { canonical: "/apply" },
  robots: { index: true, follow: true },
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; plan?: string }>;
}) {
  const { service, plan } = await searchParams;
  const defaultService = service || "";

  return (
    <main className="bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
      <div className="container-shell">
        <Breadcrumbs items={[{ label: "Apply Now" }]} />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start mt-4">
          {/* Left Column Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8b6828]">
              <Sparkles size={14} className="text-[#8b6828]" />
              <span>Fast Online Application</span>
            </div>

            <h1 className="display text-4xl sm:text-5xl font-bold text-[var(--navy)] leading-tight">
              Start with a Simple Enquiry
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--muted)]">
              Tell us which service you require. Our legal documentation counselor will review your request, verify required spellings, and guide you through the affidavit and newspaper publication steps.
            </p>

            {plan && (
              <div className="rounded-2xl border border-[var(--gold)]/40 bg-white p-4 text-xs font-semibold text-[var(--navy)] flex items-center gap-2">
                <span className="text-[#8b6828] uppercase font-bold">Selected Plan:</span>
                <span className="capitalize">{plan} Package</span>
              </div>
            )}

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-[#8b6828] shrink-0" />
                <span>Zero advance fee required to initiate review</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock size={18} className="text-[#8b6828] shrink-0" />
                <span>Strictly private & encrypted document handling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[#8b6828] shrink-0" />
                <span>Pre-submission compliance check to avoid rejection</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                Prefer Speaking Directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[var(--navy)] text-white px-4 py-2.5 text-xs font-bold hover:bg-[var(--navy-2)] transition"
                >
                  <Phone size={14} /> Call: {siteConfig.phone}
                </a>
                <a
                  href={whatsappUrl("Hi, I want assistance with Gazette Application.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#ecf8f0] text-[#176b3a] px-4 py-2.5 text-xs font-bold hover:bg-emerald-100 transition"
                >
                  <MessageCircle size={14} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="legal-shadow rounded-3xl border border-white bg-white p-7 sm:p-9">
            <span className="eyebrow">Enquiry Form</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy)] mt-1 mb-2">
              Application Details
            </h2>
            <p className="text-xs text-[var(--muted)] mb-6">
              Please enter your contact details. Our team will contact you within 15 minutes.
            </p>
            <LeadForm defaultService={defaultService} />
          </div>
        </div>
      </div>
    </main>
  );
}
