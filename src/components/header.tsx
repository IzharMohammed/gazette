"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  Phone,
  X,
  FileText,
  Newspaper,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Clock,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/lib/utils";

const serviceLinks = [
  {
    title: "Name Change Gazette",
    description: "Official Central Gazette notification for legal name change",
    href: "/name-change",
    icon: FileText,
  },
  {
    title: "Surname Change",
    description: "Gazette notification for surname change or addition",
    href: "/name-change#surname",
    icon: UserCheck,
  },
  {
    title: "Newspaper Publication",
    description: "Mandatory name change ads in national & regional daily papers",
    href: "/newspaper-publication",
    icon: Newspaper,
  },
  {
    title: "Gender Change Gazette",
    description: "Confidential legal name & gender marker gazette assistance",
    href: "/services/gender-change-gazette",
    icon: ShieldCheck,
  },
  {
    title: "Religion Change Gazette",
    description: "Statutory gazette notification after religious conversion",
    href: "/services/religion-change-gazette",
    icon: Compass,
  },
  {
    title: "Minor Name Change",
    description: "School records, passport, and birth certificate name updates",
    href: "/services/minor-name-change-gazette",
    icon: Clock,
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[var(--navy)] text-slate-300 text-xs py-2 border-b border-white/10 hidden md:block">
        <div className="container-shell flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Government Gazette & Legal Documentation Assistance • PAN India</span>
            </span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Phone size={13} className="text-[var(--gold)]" />
              <span>Call: {siteConfig.phone}</span>
            </a>
            <a
              href={whatsappUrl("Hi, I would like information about Gazette services.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <MessageCircle size={13} className="text-emerald-400" />
              <span>WhatsApp: +91 {siteConfig.whatsapp}</span>
            </a>
            <Link href="/track" className="hover:text-white transition text-slate-300">
              Track Application
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)]/80 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="container-shell flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 transition-opacity hover:opacity-90"
            aria-label="Gazette360 Publication Services Home"
          >
            <Image
              src="/gazette360-logo.png"
              alt="Gazette360 Publication Services"
              width={210}
              height={70}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-slate-700" aria-label="Main Navigation">
            <Link
              href="/"
              className={`transition hover:text-[var(--navy)] ${pathname === "/" ? "font-bold text-[var(--navy)]" : ""}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1 transition hover:text-[var(--navy)] py-2 ${
                  pathname.startsWith("/services") || pathname === "/name-change" || pathname === "/newspaper-publication"
                    ? "font-bold text-[var(--navy)]"
                    : ""
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Our Services</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[var(--gold)]" : ""}`}
                />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 top-full mt-1 w-[460px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10 z-50 grid grid-cols-1 gap-2 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="border-b border-slate-100 pb-2 mb-1 px-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8b6828]">
                      Popular Documentation Services
                    </p>
                  </div>
                  {serviceLinks.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-50"
                      >
                        <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[var(--cream)] text-[#8b6828] group-hover:bg-[var(--navy)] group-hover:text-[var(--gold-light)] transition">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--navy)] group-hover:text-[#8b6828] transition">
                            {service.title}
                          </p>
                          <p className="text-xs text-slate-500 line-clamp-1">{service.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="border-t border-slate-100 pt-2 mt-1 px-3 flex items-center justify-between">
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-[var(--navy)] hover:text-[#8b6828] transition flex items-center gap-1"
                    >
                      View All Services <ArrowRight size={13} />
                    </Link>
                    <Link
                      href="/locations"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-medium text-slate-500 hover:text-[var(--navy)] transition"
                    >
                      PAN India States
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/plans"
              className={`transition hover:text-[var(--navy)] ${pathname === "/plans" ? "font-bold text-[var(--navy)]" : ""}`}
            >
              Plans
            </Link>

            <Link
              href="/name-change"
              className={`transition hover:text-[var(--navy)] ${pathname === "/name-change" ? "font-bold text-[var(--navy)]" : ""}`}
            >
              Name Change
            </Link>

            <Link
              href="/services/gender-change-gazette"
              className={`transition hover:text-[var(--navy)] ${
                pathname === "/services/gender-change-gazette" ? "font-bold text-[var(--navy)]" : ""
              }`}
            >
              Gender Change
            </Link>

            <Link
              href="/about"
              className={`transition hover:text-[var(--navy)] ${pathname === "/about" ? "font-bold text-[var(--navy)]" : ""}`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`transition hover:text-[var(--navy)] ${pathname === "/contact" ? "font-bold text-[var(--navy)]" : ""}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button asChild variant="gold" size="default" className="hidden sm:inline-flex font-bold shadow-md">
              <Link href="/apply">
                Apply Now <ArrowRight size={16} />
              </Link>
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-[var(--navy)] lg:hidden transition hover:bg-slate-100"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-6 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-3 font-medium text-slate-800" aria-label="Mobile Navigation">
              <Link
                href="/"
                className="py-2.5 px-3 rounded-lg hover:bg-slate-50 font-semibold text-[var(--navy)]"
              >
                Home
              </Link>

              {/* Collapsible Mobile Services */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8b6828] mb-2 px-1">
                  Our Services
                </p>
                <div className="grid gap-1">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.title}
                      href={s.href}
                      className="py-2 px-2 rounded-md hover:bg-white text-sm font-medium text-slate-700 flex items-center justify-between"
                    >
                      <span>{s.title}</span>
                      <ArrowRight size={14} className="text-slate-400" />
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="py-2 px-2 text-xs font-bold text-[#8b6828] hover:underline"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>

              <Link href="/plans" className="py-2.5 px-3 rounded-lg hover:bg-slate-50 font-semibold">
                Plans & Pricing
              </Link>

              <Link href="/name-change" className="py-2.5 px-3 rounded-lg hover:bg-slate-50 font-semibold">
                Name Change Page
              </Link>

              <Link href="/services/gender-change-gazette" className="py-2.5 px-3 rounded-lg hover:bg-slate-50 font-semibold">
                Gender Change Gazette
              </Link>

              <Link href="/newspaper-publication" className="py-2.5 px-3 rounded-lg hover:bg-slate-50 font-semibold">
                Newspaper Publication
              </Link>

              <Link href="/about" className="py-2.5 px-3 rounded-lg hover:bg-slate-50 font-semibold">
                About Us
              </Link>

              <Link href="/contact" className="py-2.5 px-3 rounded-lg hover:bg-slate-50 font-semibold">
                Contact Us
              </Link>

              <Link href="/track" className="py-2.5 px-3 rounded-lg hover:bg-slate-50 font-semibold">
                Track Application
              </Link>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Button asChild variant="gold" className="w-full justify-center font-bold">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2.5 text-[var(--navy)] font-semibold"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                  <a
                    href={whatsappUrl("Hi, I would like information about Gazette services.")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-[#ecf8f0] py-2.5 text-[#176b3a] font-semibold"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
