import type { Metadata } from "next";
import Link from "next/link";
import { listCmsEntries } from "@/lib/db";
export const dynamic="force-dynamic";
export const metadata:Metadata={title:"Gazette guidance blog",description:"Practical guidance about Gazette publication, name changes and documentation."};
export default async function BlogPage(){let posts:Awaited<ReturnType<typeof listCmsEntries>>=[];try{posts=await listCmsEntries("blog",true)}catch{}return <main className="container-shell py-16"><p className="eyebrow">Resources</p><h1 className="display mt-2 text-4xl font-bold">Guidance and updates</h1><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map(p=><article key={p.id} className="rounded-xl border bg-white p-6"><p className="text-xs text-slate-500">{new Date(p.created_at).toLocaleDateString("en-IN")}</p><h2 className="mt-2 font-serif text-2xl font-bold"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2><p className="mt-3 text-sm leading-6 text-slate-600">{p.excerpt}</p></article>)}</div>{!posts.length&&<p className="mt-10 text-slate-600">Articles will appear here when published from the admin dashboard.</p>}</main>}
