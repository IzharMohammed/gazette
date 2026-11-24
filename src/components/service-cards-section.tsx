import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Newspaper,
  Scale,
  Shield,
  FileCheck,
  Building,
  UserCheck,
  Compass,
  AlertCircle,
  Calendar,
  Home,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const nameChangeItems = [
  { name: "Name Change", href: "/name-change", icon: FileText },
  { name: "Surname Change", href: "/name-change#surname", icon: UserCheck },
  { name: "Gender Change", href: "/services/gender-change-gazette", icon: Shield },
  { name: "Public Notice", href: "/newspaper-publication#types", icon: AlertCircle },
  { name: "Religion Change", href: "/services/religion-change-gazette", icon: Compass },
  { name: "Gazette Copy", href: "/track", icon: FileCheck },
  { name: "Company Name Change", href: "/apply?service=Company%20Name%20Change", icon: Building },
  { name: "Minor Name Change", href: "/services/minor-name-change-gazette", icon: UserCheck },
];

const newspaperItems = [
  { name: "Name Change Advertisement", href: "/newspaper-publication#types", icon: FileText },
  { name: "Marriage Name Change Advertisement", href: "/newspaper-publication#types", icon: UserCheck },
  { name: "Gender Change Advertisement", href: "/newspaper-publication#types", icon: Shield },
  { name: "Public Notice", href: "/newspaper-publication#types", icon: AlertCircle },
  { name: "DOB Correction Advertisement", href: "/newspaper-publication#types", icon: Calendar },
  { name: "Property Notice", href: "/newspaper-publication#types", icon: Home },
  { name: "Legal Notice", href: "/newspaper-publication#types", icon: Scale },
  { name: "Company Notice", href: "/newspaper-publication#types", icon: Briefcase },
];

export function ServiceCardsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container-shell">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">Comprehensive Solutions</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--navy)]">
            Our Core Services
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
            Choose from our specialized legal documentation services. We handle the entire procedure online with statutory compliance across India.
          </p>
        </div>

        {/* Two Service Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card 1: Name Change Services */}
          <div className="group relative rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-xl">
            {/* Header */}
            <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
              <div className="grid size-14 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--gold-light)] shadow-md group-hover:scale-105 transition-transform">
                <Scale size={28} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8b6828]">
                  Central & State Gazette
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy)]">
                  Name Change Services
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm text-[var(--muted)] leading-relaxed">
              Complete documentation, affidavit drafting, and publication assistance in the official Government Gazette for individuals, minors, and businesses.
            </p>

            {/* List of 8 items */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nameChangeItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-[var(--cream)]/60 px-3.5 py-2.5 text-xs font-semibold text-[var(--navy)] transition hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/40 hover:text-[#8b6828]"
                  >
                    <Icon size={15} className="text-[#8b6828] shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <Button asChild variant="gold" size="lg" className="w-full sm:w-auto font-bold shadow-md">
                <Link href="/name-change">
                  APPLY NOW <ArrowRight size={18} />
                </Link>
              </Button>
              <Link
                href="/name-change"
                className="text-xs font-bold text-[var(--navy)] hover:text-[#8b6828] transition flex items-center gap-1"
              >
                Learn Procedure & Requirements →
              </Link>
            </div>
          </div>

          {/* Card 2: Newspaper Publication */}
          <div className="group relative rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-xl">
            {/* Header */}
            <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
              <div className="grid size-14 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--gold-light)] shadow-md group-hover:scale-105 transition-transform">
                <Newspaper size={28} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8b6828]">
                  National & Regional Press
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy)]">
                  Newspaper Publication
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm text-[var(--muted)] leading-relaxed">
              Mandatory legal advertisements and public notices booked seamlessly across prominent English and vernacular daily newspapers throughout India.
            </p>

            {/* List of 8 items */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {newspaperItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-[var(--cream)]/60 px-3.5 py-2.5 text-xs font-semibold text-[var(--navy)] transition hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/40 hover:text-[#8b6828]"
                  >
                    <Icon size={15} className="text-[#8b6828] shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <Button asChild variant="gold" size="lg" className="w-full sm:w-auto font-bold shadow-md">
                <Link href="/newspaper-publication">
                  APPLY NOW <ArrowRight size={18} />
                </Link>
              </Button>
              <Link
                href="/newspaper-publication"
                className="text-xs font-bold text-[var(--navy)] hover:text-[#8b6828] transition flex items-center gap-1"
              >
                View Ad Formats & Newspapers →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
