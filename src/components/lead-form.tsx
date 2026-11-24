"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { services } from "@/data/services";

export function LeadForm({ defaultService = "" }: { defaultService?: string }) {
  const isNameChange =
    defaultService === "Name Change Gazette" ||
    defaultService === "Name Change" ||
    defaultService.toLowerCase().includes("name change");

  const [step, setStep] = useState<1 | 2>(1);
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [trackingCode, setTrackingCode] = useState("");

  const [formData, setFormData] = useState({
    oldName: "",
    newName: "",
    nameChangeType: "Adult Name Change",
    name: "",
    phone: "",
    email: "",
    city: "",
    service: defaultService || (isNameChange ? "Name Change Gazette" : ""),
    message: "",
    consent: false,
  });

  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleNext(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.oldName.trim()) {
      newErrors.oldName = "Please enter your old name.";
    }
    if (!formData.newName.trim()) {
      newErrors.newName = "Please enter your new name.";
    }
    if (!formData.nameChangeType.trim()) {
      newErrors.nameChangeType = "Please select the type of name change.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(2);
  }

  function handleBack(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setErrors({});
    setStep(1);
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      service: isNameChange ? "Name Change Gazette" : (formData.service || "General Enquiry"),
      message: formData.message,
      old_name: isNameChange ? formData.oldName : undefined,
      new_name: isNameChange ? formData.newName : undefined,
      name_change_type: isNameChange ? formData.nameChangeType : undefined,
    };

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({}));
    if (response.ok) {
      if (documentFile instanceof File && documentFile.size > 0) {
        const signed = await fetch("/api/uploads/sign", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            token: result.uploadToken,
            filename: documentFile.name,
            contentType: documentFile.type,
            size: documentFile.size,
          }),
        });
        const upload = await signed.json();
        if (!signed.ok) {
          setState("error");
          setMessage(upload.error || "Your enquiry was saved, but the document could not be uploaded.");
          return;
        }
        const stored = await fetch(upload.uploadUrl, {
          method: "PUT",
          headers: { "content-type": documentFile.type },
          body: documentFile,
        });
        if (!stored.ok) {
          setState("error");
          setMessage("Your enquiry was saved, but the document upload failed.");
          return;
        }
        await fetch("/api/uploads/complete", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            token: result.uploadToken,
            key: upload.key,
            filename: documentFile.name,
            contentType: documentFile.type,
            size: documentFile.size,
          }),
        });
      }
      setState("success");
      setMessage("Thank you. Your enquiry has been received.");
      setTrackingCode(result.trackingCode || "");
    } else {
      setState("error");
      setMessage(result.error || "We could not submit your enquiry. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-[#edf8f1] p-8 text-center">
        <CheckCircle2 className="mb-4 text-emerald-700" size={40} />
        <h3 className="font-serif text-2xl font-bold text-[var(--navy)]">Enquiry received</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{message}</p>
        {trackingCode && (
          <div className="mt-5 rounded-xl border border-emerald-200 bg-white px-5 py-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              Tracking code
            </span>
            <strong className="font-mono text-lg text-[var(--navy)]">{trackingCode}</strong>
          </div>
        )}
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => {
            setState("idle");
            setStep(1);
            setFormData({
              oldName: "",
              newName: "",
              nameChangeType: "Adult Name Change",
              name: "",
              phone: "",
              email: "",
              city: "",
              service: defaultService || (isNameChange ? "Name Change Gazette" : ""),
              message: "",
              consent: false,
            });
            setDocumentFile(null);
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  // Multi-step form for Name Change Gazette
  if (isNameChange) {
    return (
      <form onSubmit={submit} className="grid gap-4" aria-label="Name Change Gazette Application Form">
        {step === 1 ? (
          <>
            {/* 1. Existing progress bar */}
            <div className="space-y-1.5 mb-2">
              <div className="flex justify-between text-xs font-bold text-[var(--navy)]">
                <span>Step 1 of 2: Name Details</span>
                <span className="text-[#8b6828]">50%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--gold)] to-amber-400 transition-all duration-300"
                  style={{ width: "50%" }}
                />
              </div>
            </div>

            {/* 2. Old Name input */}
            <label className="grid gap-2 text-sm font-semibold text-[var(--navy)]">
              Old Name
              <Input
                name="oldName"
                value={formData.oldName}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, oldName: e.target.value }));
                  if (errors.oldName) setErrors((prev) => ({ ...prev, oldName: "" }));
                }}
                placeholder="Enter Your Old Name"
                required
              />
              {errors.oldName && (
                <span className="text-xs font-normal text-red-600">{errors.oldName}</span>
              )}
            </label>

            {/* 3. New Name input */}
            <label className="grid gap-2 text-sm font-semibold text-[var(--navy)]">
              New Name
              <Input
                name="newName"
                value={formData.newName}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, newName: e.target.value }));
                  if (errors.newName) setErrors((prev) => ({ ...prev, newName: "" }));
                }}
                placeholder="Enter Your New Name"
                required
              />
              {errors.newName && (
                <span className="text-xs font-normal text-red-600">{errors.newName}</span>
              )}
            </label>

            {/* 4. Existing Select Type of Name Change dropdown */}
            <label className="grid gap-2 text-sm font-semibold text-[var(--navy)]">
              Select Type of Name Change
              <select
                name="nameChangeType"
                value={formData.nameChangeType}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, nameChangeType: e.target.value }));
                  if (errors.nameChangeType) setErrors((prev) => ({ ...prev, nameChangeType: "" }));
                }}
                required
                className="h-12 rounded-xl border border-[var(--line)] bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/15"
              >
                <option value="" disabled>Select Type of Name Change</option>
                <option value="Adult Name Change">Adult Name Change (Major)</option>
                <option value="Surname Change After Marriage">Surname Change After Marriage</option>
                <option value="Reverting to Maiden Name Post-Divorce">Reverting to Maiden Name Post-Divorce</option>
                <option value="Spelling Correction">Spelling Correction in Official Records</option>
                <option value="Minor Child Name Change">Minor Child Name Change</option>
                <option value="Religion Change">Religion Change</option>
                <option value="Gender Change">Gender Change</option>
                <option value="Other">Other Name Change</option>
              </select>
              {errors.nameChangeType && (
                <span className="text-xs font-normal text-red-600">{errors.nameChangeType}</span>
              )}
            </label>

            {/* 5. Existing Next button */}
            <Button
              type="button"
              onClick={handleNext}
              variant="gold"
              size="lg"
              className="w-full font-bold mt-2"
            >
              Next <ArrowRight size={16} />
            </Button>
          </>
        ) : (
          <>
            {/* Progress bar Step 2 */}
            <div className="space-y-1.5 mb-2">
              <div className="flex justify-between text-xs font-bold text-[var(--navy)]">
                <span>Step 2 of 2: Contact Details</span>
                <span className="text-[#8b6828]">100%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--gold)] to-amber-400 transition-all duration-300"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            {/* Summary Chip preserving Old Name & New Name */}
            <div className="rounded-xl border border-slate-200 bg-[var(--cream)]/60 px-4 py-2.5 text-xs flex items-center justify-between">
              <div className="truncate pr-2">
                <span className="text-slate-500">Name Change: </span>
                <strong className="text-[var(--navy)]">{formData.oldName}</strong>
                <span className="text-[#8b6828] font-bold mx-1.5">→</span>
                <strong className="text-[var(--navy)]">{formData.newName}</strong>
                <span className="text-slate-500 block text-[11px] mt-0.5 truncate">
                  {formData.nameChangeType}
                </span>
              </div>
              <button
                type="button"
                onClick={handleBack}
                className="text-xs font-bold text-[#8b6828] hover:underline shrink-0"
              >
                Edit
              </button>
            </div>

            {/* Contact Details */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Full name
                <Input
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  autoComplete="name"
                  required
                  minLength={2}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Mobile number
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  autoComplete="tel"
                  required
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  autoComplete="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                City
                <Input
                  name="city"
                  value={formData.city}
                  onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                  autoComplete="address-level2"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold">
              Additional Details / Notes
              <Textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                maxLength={1200}
                placeholder="Mention any specific purpose (e.g. Passport, Aadhaar, Bank) or questions..."
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Supporting document{" "}
              <span className="text-xs font-normal text-[var(--muted)]">
                Optional · PDF, JPG, PNG or WebP · maximum 10 MB
              </span>
              <Input
                name="document"
                type="file"
                accept=".pdf,image/jpeg,image/png,image/webp"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setDocumentFile(file);
                }}
              />
            </label>

            <input name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <label className="flex items-start gap-2 text-xs leading-5 text-[var(--muted)]">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
                required
                className="mt-1"
              />
              I consent to being contacted regarding this enquiry and agree to the privacy policy.
            </label>

            {state === "error" && (
              <p role="alert" className="text-sm font-medium text-red-700">
                {message}
              </p>
            )}

            <div className="flex gap-3">
              <Button
                type="button"
                onClick={handleBack}
                variant="outline"
                size="lg"
                className="font-bold px-6"
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={state === "loading"}
                className="flex-1 font-bold"
              >
                {state === "loading" && <Loader2 className="animate-spin" size={18} />}
                Submit Application
              </Button>
            </div>
          </>
        )}
      </form>
    );
  }

  // Standard 1-step form for other services
  return (
    <form onSubmit={submit} className="grid gap-4" aria-label="Enquiry form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Full name
          <Input name="name" autoComplete="name" required minLength={2} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Mobile number
          <Input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <Input name="email" type="email" autoComplete="email" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          City
          <Input name="city" autoComplete="address-level2" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold">
        Service required
        <select
          name="service"
          defaultValue={defaultService}
          required
          className="h-12 rounded-xl border border-[var(--line)] bg-white px-4 text-sm outline-none focus:border-[var(--gold)]"
        >
          <option value="" disabled>Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.shortTitle}>
              {service.shortTitle}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold">
        How can we help?
        <Textarea name="message" maxLength={1200} />
      </label>

      <label className="grid gap-2 text-sm font-semibold">
        Supporting document{" "}
        <span className="text-xs font-normal text-[var(--muted)]">
          Optional · PDF, JPG, PNG or WebP · maximum 10 MB
        </span>
        <Input name="document" type="file" accept=".pdf,image/jpeg,image/png,image/webp" />
      </label>

      <input name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <label className="flex items-start gap-2 text-xs leading-5 text-[var(--muted)]">
        <input type="checkbox" name="consent" required className="mt-1" />
        I consent to being contacted regarding this enquiry and agree to the privacy policy.
      </label>

      {state === "error" && <p role="alert" className="text-sm font-medium text-red-700">{message}</p>}

      <Button type="submit" variant="gold" size="lg" disabled={state === "loading"}>
        {state === "loading" && <Loader2 className="animate-spin" size={18} />}
        Submit enquiry
      </Button>
    </form>
  );
}
