"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  FileCheck2,
  Lock,
  MessageCircle,
  Scale,
  Sparkles,
  Zap,
  Award,
  BookOpen,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";

const SLIDE_DURATION = 6000;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 2;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  return (
    <section
      aria-label="Promotional Carousel"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a192f] via-[#102a43] to-[#0d2137] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Subtle Watermark Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container-shell relative py-12 md:py-20">
        {/* Slide 1 */}
        <div
          className={`transition-all duration-700 ease-in-out ${
            current === 0
              ? "opacity-100 translate-x-0 relative block"
              : "opacity-0 -translate-x-8 absolute inset-0 pointer-events-none hidden"
          }`}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--gold-light)]">
                <Sparkles size={14} className="text-[var(--gold)]" />
                <span>Government of India Gazette Assistance</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                INDIA&apos;S MOST TRUSTED <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-light)] via-[var(--gold)] to-amber-200">
                  GAZETTE NOTIFICATION
                </span>{" "}
                SERVICE
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Seamless legal documentation assistance for name change, surname modification, religion change and public notice in the official Central Gazette.
              </p>

              {/* Service Highlight Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Name Change",
                  "Surname Change",
                  "Gender Change",
                  "Public Notice",
                  "Religion Change",
                  "Other Gazette Services",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-sm"
                  >
                    <CheckCircle2 size={13} className="text-[var(--gold-light)] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-4 text-xs sm:text-sm font-semibold text-slate-200">
                <div className="flex items-center gap-2">
                  <div className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Zap size={15} />
                  </div>
                  <span>100% Online Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="grid size-8 shrink-0 place-items-center rounded-full bg-amber-500/20 text-amber-300">
                    <Award size={15} />
                  </div>
                  <span>Fast & Reliable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-500/20 text-blue-300">
                    <Lock size={15} />
                  </div>
                  <span>100% Confidential</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild variant="gold" size="lg" className="font-bold text-[var(--navy)] shadow-lg shadow-amber-500/20">
                  <Link href="/apply">
                    APPLY NOW <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1f9d55] text-white hover:bg-[#178246] border-0 font-bold shadow-lg shadow-emerald-950/30"
                >
                  <a
                    href={whatsappUrl("Hi, I want assistance with Gazette Notification Service.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} />
                    CHAT ON WHATSAPP
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Visual Graphic (Document Showcase Card) */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl border border-[var(--gold)]/30 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/40">
                {/* Official Gazette Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="grid size-12 place-items-center rounded-2xl bg-[var(--gold)]/20 text-[var(--gold-light)] border border-[var(--gold)]/30">
                      <Scale size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--gold-light)]">
                        THE GAZETTE OF INDIA
                      </p>
                      <p className="text-[11px] text-slate-400">Department of Publication, Delhi</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                    Statutory
                  </span>
                </div>

                {/* Simulated Certificate Content */}
                <div className="mt-5 space-y-3 rounded-xl border border-white/5 bg-black/30 p-4 text-xs font-mono text-slate-300">
                  <div className="flex justify-between text-slate-400 text-[10px] border-b border-white/10 pb-2">
                    <span>PART IV - PUBLIC NOTICES</span>
                    <span>NEW DELHI</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    &quot;I, hitherto known as [Old Name], residing at [Address], have changed my name and shall hereafter be known as [New Name]. It is certified that I have complied with other legal requirements.&quot;
                  </p>
                  <div className="flex items-center justify-between pt-2 text-[11px] text-[var(--gold-light)]">
                    <span className="flex items-center gap-1 font-sans font-semibold">
                      <FileCheck2 size={14} /> Legally Valid Pan-India
                    </span>
                    <span className="text-slate-400">Central Record</span>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2 rounded-lg bg-white/5 p-2">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Passport Valid</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/5 p-2">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Aadhaar & PAN</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/5 p-2">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Bank & Property</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/5 p-2">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Govt Job & Exams</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`transition-all duration-700 ease-in-out ${
            current === 1
              ? "opacity-100 translate-x-0 relative block"
              : "opacity-0 -translate-x-8 absolute inset-0 pointer-events-none hidden"
          }`}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
                <BookOpen size={14} />
                <span>Specialized Legal Assistance</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                GAZETTE NOTIFICATION FOR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[var(--gold-light)] to-yellow-400">
                  SURNAME CHANGE
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Add, remove, or modify your surname seamlessly post-marriage, divorce, or by personal preference. Get your Central Gazette Notification processed with verified legal drafting and nationwide newspaper publication support.
              </p>

              {/* Key Highlights for Surname */}
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-1">
                <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3 border border-white/10">
                  <CheckCircle2 size={16} className="text-[var(--gold-light)] shrink-0" />
                  <span>Post-Marriage Surname Addition</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3 border border-white/10">
                  <CheckCircle2 size={16} className="text-[var(--gold-light)] shrink-0" />
                  <span>Post-Divorce Maiden Name Reversion</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3 border border-white/10">
                  <CheckCircle2 size={16} className="text-[var(--gold-light)] shrink-0" />
                  <span>Family Title & Spelling Correction</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3 border border-white/10">
                  <CheckCircle2 size={16} className="text-[var(--gold-light)] shrink-0" />
                  <span>Children & Minor Surname Updates</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild variant="gold" size="lg" className="font-bold text-[var(--navy)] shadow-lg shadow-amber-500/20">
                  <Link href="/apply?service=Surname%20Change">
                    APPLY NOW <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1f9d55] text-white hover:bg-[#178246] border-0 font-bold shadow-lg shadow-emerald-950/30"
                >
                  <a
                    href={whatsappUrl("Hi, I want Gazette Notification for Surname Change.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} />
                    CHAT ON WHATSAPP
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Visual Graphic (Surname Showcase) */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl border border-amber-400/30 bg-gradient-to-br from-slate-900/95 to-slate-800/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/40">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Surname Change Dossier</h3>
                    <p className="text-xs text-slate-400">Complete Document Verification Kit</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs border border-white/5">
                    <span className="text-slate-300">1. Notarized Affidavit</span>
                    <span className="font-bold text-emerald-400">Drafted</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs border border-white/5">
                    <span className="text-slate-300">2. Daily Newspaper Publication</span>
                    <span className="font-bold text-emerald-400">Included</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs border border-white/5">
                    <span className="text-slate-300">3. Govt Proforma & CD Soft Copy</span>
                    <span className="font-bold text-emerald-400">Compiled</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs border border-white/5">
                    <span className="text-slate-300">4. Central Gazette Publication</span>
                    <span className="font-bold text-[var(--gold-light)]">Official Release</span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/10 p-4 text-xs text-amber-200 flex items-center gap-3">
                  <ShieldCheck size={28} className="shrink-0 text-[var(--gold)]" />
                  <p>
                    100% legally recognized for Indian Passport, Aadhaar, PAN card, and banking records worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "w-8 bg-gradient-to-r from-[var(--gold)] to-amber-300"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 hover:scale-105 active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 hover:scale-105 active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
