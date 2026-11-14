"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export function FloatingContact() {
  const cleanPhone = siteConfig.phone.replace(/\s/g, "");

  return (
    <>
      {/* Floating Call Button - Left Side */}
      <aside aria-label="Quick contact call">
        <a
          href={`tel:${cleanPhone}`}
          aria-label={`Call us at ${siteConfig.phone}`}
          className="fixed bottom-20 left-4 md:bottom-7 md:left-6 z-40 flex items-center gap-2.5 rounded-full bg-[var(--navy)] text-white px-3.5 py-3 md:px-5 md:py-3.5 font-semibold shadow-2xl shadow-slate-950/30 border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a365d] hover:shadow-amber-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
        >
          <span className="grid size-7 md:size-8 place-items-center rounded-full bg-[var(--gold)] text-[var(--navy)]">
            <Phone size={17} className="fill-[var(--navy)]" />
          </span>
          <span className="hidden sm:inline text-xs md:text-sm font-bold tracking-wide">
            Call Us
          </span>
        </a>
      </aside>

      {/* Floating WhatsApp Button - Right Side */}
      <aside aria-label="Quick contact WhatsApp">
        <a
          href={whatsappUrl("Hi, I visited your website and would like information about Gazette publication services.")}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-20 right-4 md:bottom-7 md:right-6 z-40 flex items-center gap-2.5 rounded-full bg-[#1f9d55] text-white px-3.5 py-3 md:px-5 md:py-3.5 font-semibold shadow-2xl shadow-emerald-950/30 border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#178246] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <span className="grid size-7 md:size-8 place-items-center rounded-full bg-white/20 text-white">
            <MessageCircle size={19} className="fill-white" />
          </span>
          <span className="hidden sm:inline text-xs md:text-sm font-bold tracking-wide">
            WhatsApp
          </span>
        </a>
      </aside>
    </>
  );
}
