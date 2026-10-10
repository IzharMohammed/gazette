import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin-dashboard";
import { getSettings, listAppointments, listCmsEntries, listLeads, listMedia, listRedirects } from "@/lib/db";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Lead dashboard", robots: { index: false, follow: false } };

export default async function AdminPage() {
  try {
    const [leads, content, appointments, redirects, media, settings] = await Promise.all([listLeads(),listCmsEntries(),listAppointments(),listRedirects(),listMedia(),getSettings()]);
    return <main className="min-h-[75vh] bg-slate-50 py-10"><div className="container-shell"><div className="flex items-end justify-between gap-4"><div><p className="eyebrow">Administration</p><h1 className="display mt-2 text-4xl font-bold text-[var(--navy)]">Website dashboard</h1></div><form action="/api/admin/logout" method="post"><button className="text-sm font-bold text-[var(--navy)]">Sign out</button></form></div><AdminDashboard leads={leads} content={content} appointments={appointments} redirects={redirects} media={media} settings={settings}/></div></main>;
  } catch { return <main className="container-shell py-20"><h1 className="display text-4xl">Admin setup required</h1><p className="mt-4 rounded-xl bg-amber-50 p-5">Connect Neon and run <code>pnpm db:migrate</code>, then reload this page.</p></main>; }
}
