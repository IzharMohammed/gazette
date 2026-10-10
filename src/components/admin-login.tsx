"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminLogin() {
  const router = useRouter(); const search = useSearchParams(); const [error, setError] = useState(""); const [busy, setBusy] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); setBusy(true); setError(""); const body = Object.fromEntries(new FormData(event.currentTarget)); const response = await fetch("/api/admin/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) }); if (response.ok) { const next = search.get("next"); router.replace(next?.startsWith("/admin") ? next : "/admin"); router.refresh(); } else { setError("The email or password is incorrect."); setBusy(false); } }
  return <form onSubmit={submit} className="mt-7 grid gap-4"><label className="grid gap-2 text-sm font-semibold">Email<Input name="email" type="email" autoComplete="username" required /></label><label className="grid gap-2 text-sm font-semibold">Password<Input name="password" type="password" autoComplete="current-password" required minLength={8} /></label>{error && <p className="text-sm text-red-700" role="alert">{error}</p>}<Button type="submit" variant="gold" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</Button></form>;
}
