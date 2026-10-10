import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = { title: "Apply or Send an Enquiry", description: "Send a confidential enquiry about Gazette publication assistance.", robots: { index: false, follow: true } };

export default function ApplyPage() {
  return <main className="bg-[var(--cream)] py-16"><div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Apply now</p><h1 className="display mt-3 text-5xl font-bold text-[var(--navy)]">Start with a simple enquiry</h1><p className="mt-5 leading-8 text-[var(--muted)]">Tell us which service you need. We will contact you to confirm the process and only then request necessary documents.</p><p className="mt-6 text-sm leading-6 text-[var(--muted)]">Please do not enter Aadhaar numbers, passport numbers or other sensitive identifiers in this form.</p></div><div className="legal-shadow rounded-2xl border border-[var(--line)] bg-white p-7 sm:p-9"><LeadForm /></div></div></main>;
}
