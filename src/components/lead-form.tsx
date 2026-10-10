"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { services } from "@/data/services";

export function LeadForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const form = event.currentTarget;
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const result = await response.json().catch(() => ({}));
    if (response.ok) {
      setState("success");
      setMessage("Thank you. Your enquiry has been received.");
      form.reset();
    } else {
      setState("error");
      setMessage(result.error || "We could not submit your enquiry. Please try again.");
    }
  }

  if (state === "success") {
    return <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-[#edf8f1] p-8 text-center"><CheckCircle2 className="mb-4 text-emerald-700" size={40} /><h3 className="font-serif text-2xl font-bold text-[var(--navy)]">Enquiry received</h3><p className="mt-2 text-sm text-[var(--muted)]">{message}</p><Button className="mt-6" variant="outline" onClick={() => setState("idle")}>Send another</Button></div>;
  }

  return (
    <form onSubmit={submit} className="grid gap-4" aria-label="Enquiry form">
      <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Full name<Input name="name" autoComplete="name" required minLength={2} /></label><label className="grid gap-2 text-sm font-semibold">Mobile number<Input name="phone" type="tel" autoComplete="tel" required /></label></div>
      <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Email<Input name="email" type="email" autoComplete="email" /></label><label className="grid gap-2 text-sm font-semibold">City<Input name="city" autoComplete="address-level2" /></label></div>
      <label className="grid gap-2 text-sm font-semibold">Service required<select name="service" defaultValue={defaultService} required className="h-12 rounded-xl border border-[var(--line)] bg-white px-4 text-sm outline-none focus:border-[var(--gold)]"><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.slug} value={service.shortTitle}>{service.shortTitle}</option>)}</select></label>
      <label className="grid gap-2 text-sm font-semibold">How can we help?<Textarea name="message" maxLength={1200} /></label>
      <input name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="flex items-start gap-2 text-xs leading-5 text-[var(--muted)]"><input type="checkbox" name="consent" required className="mt-1" />I consent to being contacted regarding this enquiry and agree to the privacy policy.</label>
      {state === "error" && <p role="alert" className="text-sm font-medium text-red-700">{message}</p>}
      <Button type="submit" variant="gold" size="lg" disabled={state === "loading"}>{state === "loading" && <Loader2 className="animate-spin" size={18} />}Submit enquiry</Button>
    </form>
  );
}
