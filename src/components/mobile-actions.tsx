import Link from "next/link";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid h-17 grid-cols-3 border-t border-[var(--line)] bg-white shadow-[0_-8px_30px_rgba(16,42,67,.12)] md:hidden">
      <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex flex-col items-center justify-center gap-1 text-xs font-bold text-[var(--navy)]"><Phone size={19} />Call now</a>
      <a href={whatsappUrl("Hi, I would like information about Gazette publication assistance.")} className="flex flex-col items-center justify-center gap-1 bg-[#ecf8f0] text-xs font-bold text-[#176b3a]"><MessageCircle size={19} />WhatsApp</a>
      <Link href="/apply" className="flex flex-col items-center justify-center gap-1 bg-[var(--gold)] text-xs font-bold text-[var(--ink)]"><FileText size={19} />Apply now</Link>
    </div>
  );
}
