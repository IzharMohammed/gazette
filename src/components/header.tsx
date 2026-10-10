import Link from "next/link";
import { Menu, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/utils";

const links = [
  ["Services", "/services"], ["Blog", "/blog"], ["Track", "/track"], ["About", "/about"], ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)]/80 bg-[var(--paper)]/95 backdrop-blur">
      <div className="container-shell flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--navy)] text-[var(--gold-light)]"><Scale size={21} /></span>
          <span className="min-w-0"><span className="block truncate font-serif text-lg font-bold text-[var(--navy)]">{siteConfig.name}</span><span className="hidden text-[10px] font-bold uppercase tracking-[.18em] text-[var(--muted)] sm:block">Gazette documentation assistance</span></span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={label} href={href} className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--navy)]">{label}</Link>)}
        </nav>
        <Button asChild variant="gold" className="hidden sm:inline-flex"><Link href="/appointments">Book appointment</Link></Button>
        <Link href="/services" className="grid size-10 place-items-center rounded-full border border-[var(--line)] lg:hidden" aria-label="Open services"><Menu size={20} /></Link>
      </div>
    </header>
  );
}
