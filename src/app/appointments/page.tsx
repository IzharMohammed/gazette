import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AppointmentForm } from "@/components/appointment-form";

export const metadata: Metadata = {
  title: "Book a Legal Consultation Appointment | Gazette Legal Services",
  description: "Schedule a one-on-one consultation for Gazette publication, newspaper notices, and legal documentation.",
  alternates: { canonical: "/appointments" },
};

export default function AppointmentsPage() {
  return (
    <main className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
      <div className="container-shell max-w-3xl">
        <Breadcrumbs items={[{ label: "Book Appointment" }]} />

        <div className="mt-4">
          <p className="eyebrow">Personalized Consultation</p>
          <h1 className="display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)] leading-tight mt-2">
            Schedule a Documentation Appointment
          </h1>
          <p className="mb-8 mt-3 text-base text-[var(--muted)] leading-relaxed">
            Choose your preferred date, time, and service requirement. Our legal office will contact you via phone or WhatsApp to confirm your session.
          </p>

          <div className="legal-shadow rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </main>
  );
}
