import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Phone,
  Scale,
} from "lucide-react";
import { locations } from "@/data/locations";
import { siteConfig, whatsappUrl } from "@/lib/utils";

export function Footer() {
  const cleanPhone = siteConfig.phone.replace(/\s/g, "");

  return (
    <footer className="bg-[var(--navy)] pb-12 pt-16 text-white border-t border-white/10">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr]">
        {/* Brand & Mission Column */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-[var(--gold-light)] border border-white/15">
              <Scale size={22} />
            </span>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-white block">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--gold-light)] block">
                Gazette & Legal Services
              </span>
            </div>
          </Link>

          <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-slate-300">
            India&apos;s trusted legal documentation and Gazette of India publication consultancy. Facilitating nationwide name change notifications, newspaper advertisements, and legal declarations 100% online.
          </p>

          <div className="pt-2 space-y-2 text-xs text-slate-300">
            <a
              href={`tel:${cleanPhone}`}
              className="flex items-center gap-2 hover:text-[var(--gold-light)] transition"
            >
              <Phone size={14} className="text-[var(--gold)]" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={whatsappUrl("Hi, I would like information about Gazette services.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[var(--gold-light)] transition"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              <span>WhatsApp: +91 {siteConfig.whatsapp}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-[var(--gold-light)] transition truncate"
            >
              <Mail size={14} className="text-[var(--gold)]" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </div>

        {/* Core Services Column */}
        <div>
          <h2 className="mb-4 font-serif text-base font-bold text-[var(--gold-light)] uppercase tracking-wider">
            Our Services
          </h2>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            <Link className="block hover:text-white transition" href="/name-change">
              Name Change Gazette
            </Link>
            <Link className="block hover:text-white transition" href="/newspaper-publication">
              Newspaper Publication
            </Link>
            <Link className="block hover:text-white transition" href="/services/gender-change-gazette">
              Gender Change Gazette
            </Link>
            <Link className="block hover:text-white transition" href="/services/surname-change-gazette">
              Surname Change Gazette
            </Link>
            <Link className="block hover:text-white transition" href="/services/religion-change-gazette">
              Religion Change Gazette
            </Link>
            <Link className="block hover:text-white transition" href="/services/minor-name-change-gazette">
              Minor Child Name Change
            </Link>
            <Link className="block hover:text-white transition font-semibold text-[var(--gold-light)]" href="/services">
              View All Services →
            </Link>
          </div>
        </div>

        {/* State Jurisdictions Column */}
        <div>
          <h2 className="mb-4 font-serif text-base font-bold text-[var(--gold-light)] uppercase tracking-wider">
            PAN India Locations
          </h2>
          <div className="space-y-2 text-xs text-slate-300">
            {locations.slice(0, 7).map((loc) => (
              <Link
                key={loc.slug}
                className="block hover:text-white transition"
                href={`/locations/${loc.slug}`}
              >
                Gazette {loc.name}
              </Link>
            ))}
            <Link
              className="block font-semibold text-[var(--gold-light)] hover:underline pt-1"
              href="/locations"
            >
              All 28 States & UTs Directory →
            </Link>
          </div>
        </div>

        {/* Important Links & Quick Info */}
        <div>
          <h2 className="mb-4 font-serif text-base font-bold text-[var(--gold-light)] uppercase tracking-wider">
            Quick Links
          </h2>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            <Link className="block hover:text-white transition" href="/plans">
              Plans & Pricing
            </Link>
            <Link className="block hover:text-white transition" href="/about">
              About Us
            </Link>
            <Link className="block hover:text-white transition" href="/track">
              Track Application Status
            </Link>
            <Link className="block hover:text-white transition" href="/blog">
              Guidance Blog & FAQs
            </Link>
            <Link className="block hover:text-white transition" href="/contact">
              Contact Legal Office
            </Link>
            <Link className="block hover:text-white transition" href="/appointments">
              Book Appointment
            </Link>
            <Link className="block hover:text-white transition" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="block hover:text-white transition" href="/terms">
              Terms & Conditions
            </Link>
            <Link className="block hover:text-white transition text-slate-500" href="/admin/login">
              Portal Login
            </Link>
          </div>
        </div>
      </div>

      {/* Statutory Disclaimer & Copyright */}
      <div className="container-shell mt-12 border-t border-white/10 pt-6 space-y-3">
        <p className="text-[11px] leading-relaxed text-slate-400">
          <strong>Legal Disclaimer:</strong> {siteConfig.name} is a private legal documentation and publication facilitation consultancy. We assist applicants with drafting affidavits, booking newspaper advertisements, and compiling dossiers for submission to the Department of Publication, Government of India. We are not an official department of the Government of India. Publication timelines and approvals are governed solely by the Controller of Publications and respective authorities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>Made for Pan India Citizens</span>
        </div>
      </div>
    </footer>
  );
}
