import Link from "next/link";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export function MobileActions() {
  const cleanPhone = siteConfig.phone.replace(/\s/g, "");

  return (
    <nav
      aria-label="Mobile Bottom Actions"
      className="fixed inset-x-0 bottom-0 z-50 grid h-16 grid-cols-3 border-t border-[var(--line)] bg-white/98 backdrop-blur-md shadow-[0_-8px_30px_rgba(14,36,57,.12)] md:hidden"
    >
      <a
        href={`tel:${cleanPhone}`}
        className="flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-[var(--navy)] hover:bg-slate-50 transition active:scale-95"
      >
        <Phone size={18} className="text-[#8b6828]" />
        <span>Call Now</span>
      </a>

      <a
        href={whatsappUrl("Hi, I would like information about Gazette publication assistance.")}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 bg-[#ecf8f0] text-[11px] font-bold text-[#176b3a] hover:bg-emerald-100/70 transition active:scale-95 border-x border-emerald-100"
      >
        <MessageCircle size={18} className="fill-[#176b3a] text-white" />
        <span>WhatsApp</span>
      </a>

      <Link
        href="/apply"
        className="flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-[var(--gold)] to-amber-400 text-[11px] font-bold text-[var(--navy)] hover:opacity-95 transition active:scale-95 shadow-inner"
      >
        <FileText size={18} />
        <span>Apply Now</span>
      </Link>
    </nav>
  );
}
