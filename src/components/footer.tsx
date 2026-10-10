import Link from "next/link";
import { Scale } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] pb-10 pt-16 text-white">
      <div className="container-shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><div className="mb-4 flex items-center gap-3"><Scale className="text-[var(--gold-light)]" /><span className="font-serif text-xl font-bold">{siteConfig.name}</span></div><p className="max-w-md text-sm leading-7 text-slate-300">Clear guidance for Gazette publication and related documentation. Information on this website is general and is not a guarantee of outcome or processing time.</p></div>
        <div><h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--gold-light)]">Services</h2><div className="space-y-3 text-sm text-slate-300">{services.map((s) => <Link className="block hover:text-white" key={s.slug} href={`/services/${s.slug}`}>{s.shortTitle}</Link>)}</div></div>
        <div><h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--gold-light)]">Information</h2><div className="space-y-3 text-sm text-slate-300"><Link className="block" href="/appointments">Book appointment</Link><Link className="block" href="/track">Track application</Link><Link className="block" href="/blog">Blog</Link><Link className="block" href="/contact">Contact</Link><Link className="block" href="/privacy">Privacy policy</Link><Link className="block" href="/terms">Terms</Link><Link className="block" href="/admin/login">Admin</Link></div></div>
      </div>
      <div className="container-shell mt-12 border-t border-white/15 pt-6 text-xs text-slate-400">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
    </footer>
  );
}
