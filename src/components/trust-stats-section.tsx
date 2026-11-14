import { Users, ShieldCheck, Zap, Globe2 } from "lucide-react";

const stats = [
  {
    number: "25,000+",
    label: "Happy Clients",
    description: "Successfully guided across India",
    icon: Users,
  },
  {
    number: "100%",
    label: "Confidential",
    description: "Encrypted, restricted document handling",
    icon: ShieldCheck,
  },
  {
    number: "Fast",
    label: "Processing",
    description: "Dedicated drafting & swift dossier filing",
    icon: Zap,
  },
  {
    number: "PAN India",
    label: "Service",
    description: "Covering all 28 states & 8 UTs",
    icon: Globe2,
  },
];

export function TrustStatsSection() {
  return (
    <section className="bg-[var(--navy)] text-white py-12 md:py-16 border-y border-white/10 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="container-shell relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-[var(--gold)]/40 hover:-translate-y-1"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold-light)]/10 text-[var(--gold-light)] mb-3 border border-[var(--gold)]/30 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-[var(--gold-light)] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-300 mt-1 max-w-[180px] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
