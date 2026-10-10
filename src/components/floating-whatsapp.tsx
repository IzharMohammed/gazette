import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Hi, I visited your website and would like information about Gazette services.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-[#1f9d55] px-4 py-3 font-semibold text-white shadow-xl shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-[#178246] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f9d55] focus-visible:ring-offset-2 md:flex"
    >
      <span className="grid size-9 place-items-center rounded-full bg-white/15"><MessageCircle size={21} /></span>
      <span className="pr-1 text-sm">Chat on WhatsApp</span>
    </a>
  );
}
