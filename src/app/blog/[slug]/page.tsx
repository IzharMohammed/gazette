import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCmsEntry } from "@/lib/db";
export const dynamic="force-dynamic";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const post=await getCmsEntry("blog",slug).catch(()=>null);if(!post)return{};return{title:post.seo_title||post.title,description:post.meta_description||post.excerpt,alternates:{canonical:`/blog/${slug}`}}}
export default async function Post({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post=await getCmsEntry("blog",slug).catch(()=>null);if(!post)notFound();return <main className="container-shell py-16"><article className="mx-auto max-w-3xl"><p className="eyebrow">Guidance</p><h1 className="display mt-3 text-4xl font-bold">{post.title}</h1>{post.excerpt&&<p className="mt-5 text-xl text-slate-600">{post.excerpt}</p>}<div className="mt-10 whitespace-pre-wrap leading-8 text-slate-700">{post.body}</div></article></main>}
