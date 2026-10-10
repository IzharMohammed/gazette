import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { listCmsEntries } from "@/lib/db";

export const metadata: Metadata = { title: "Gazette and Publication Services", description: "Explore Gazette publication, newspaper notice and gender change documentation assistance." };

export const dynamic="force-dynamic";
export default async function ServicesPage() {
  let managed:Awaited<ReturnType<typeof listCmsEntries>>=[];try{managed=await listCmsEntries("service",true)}catch{}
  const items=managed.length?managed.map(s=>({slug:s.slug||s.id,title:s.title,description:s.excerpt||s.body||""})):services;
  return <main><section className="bg-[var(--cream)] py-18"><div className="container-shell"><p className="eyebrow">Services</p><h1 className="display mt-3 max-w-3xl text-5xl font-bold text-[var(--navy)]">Practical assistance for Gazette documentation</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">Review the process, typical documents and important considerations for each service.</p></div></section><section className="py-18"><div className="container-shell grid gap-5 md:grid-cols-2">{items.map((s) => <article key={s.slug} className="rounded-2xl border border-[var(--line)] p-8"><h2 className="font-serif text-3xl font-bold text-[var(--navy)]">{s.title}</h2><p className="mt-4 leading-7 text-[var(--muted)]">{s.description}</p><Link href={`/services/${s.slug}`} className="mt-7 inline-flex items-center gap-2 font-bold text-[var(--navy)]">View requirements <ArrowRight size={17} /></Link></article>)}</div></section></main>;
}
