import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrackingForm } from "@/components/tracking-form";

export const metadata: Metadata = {
  title: "Track Application Status | Gazette Legal Services",
  description: "Check the current status of your Gazette publication or documentation application online.",
  robots: { index: false, follow: false },
};

export default function TrackPage() {
  return (
    <main className="paper-grid bg-[var(--cream)] py-14 md:py-20 border-b border-[var(--line)]">
      <div className="container-shell max-w-3xl">
        <Breadcrumbs items={[{ label: "Track Application" }]} />

        <div className="mt-4">
          <p className="eyebrow">Client Portal</p>
          <h1 className="display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)] leading-tight mt-2">
            Track Your Gazette Application
          </h1>
          <p className="mb-8 mt-3 text-base text-[var(--muted)] leading-relaxed">
            Enter the unique tracking code you received upon enquiry submission along with the last four digits of your mobile number to view real-time application updates.
          </p>

          <TrackingForm />
        </div>
      </div>
    </main>
  );
}
