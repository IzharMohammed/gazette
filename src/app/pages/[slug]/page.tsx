import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCmsEntry } from "@/lib/db";
export const revalidate=3600;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const page=await getCmsEntry("page",slug).catch(()=>null);if(!page)return{};return{title:page.seo_title||page.title,description:page.meta_description||page.excerpt,alternates:{canonical:`/pages/${slug}`}}}
export default async function CmsPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=await getCmsEntry("page",slug).catch(()=>null);if(!page)notFound();return <main className="container-shell py-16"><article className="mx-auto max-w-3xl"><p className="eyebrow">Information</p><h1 className="display mt-3 text-5xl font-bold">{page.title}</h1>{page.excerpt&&<p className="mt-5 text-xl text-slate-600">{page.excerpt}</p>}<div className="mt-10 whitespace-pre-wrap leading-8 text-slate-700">{page.body}</div></article></main>}
