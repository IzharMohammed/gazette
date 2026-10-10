import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { AdminLogin } from "@/components/admin-login";
import { getAdminSession } from "@/lib/auth";

export const metadata: Metadata = { title: "Admin login", robots: { index: false, follow: false } };
export default async function AdminLoginPage() { if (await getAdminSession()) redirect("/admin"); return <main className="grid min-h-[70vh] place-items-center bg-[var(--cream)] px-4 py-16"><div className="w-full max-w-md rounded-2xl border border-[var(--line)] bg-white p-8 shadow-xl shadow-slate-200/60"><p className="eyebrow">Secure administration</p><h1 className="display mt-3 text-4xl font-bold text-[var(--navy)]">Admin sign in</h1><p className="mt-3 text-sm text-[var(--muted)]">Use the authorized administrator account.</p><Suspense><AdminLogin /></Suspense></div></main>; }
