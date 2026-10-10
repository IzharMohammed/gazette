import { NextResponse } from "next/server";
import { z } from "zod";
import { createLead } from "@/lib/db";
import { sendLeadNotification } from "@/lib/email";
import { createUploadToken } from "@/lib/auth";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(20).regex(/^[+\d()\s-]+$/),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  service: z.string().trim().min(2).max(120),
  message: z.string().trim().max(1200).optional().or(z.literal("")),
  company: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Please check the details and try again." }, { status: 400 });
    const data = { ...parsed.data };
    delete data.company;
    const leadInput = { ...data, email: data.email || null, city: data.city || null, message: data.message || null };
    const created = await createLead(leadInput);
    try {
      await sendLeadNotification({ ...leadInput, id: created.id, tracking_code: created.tracking_code, status: "new", created_at: new Date().toISOString() });
    } catch (emailError) {
      // The enquiry is already safely stored. An email-provider outage must not
      // make the customer resubmit the form and create a duplicate lead.
      console.error("Lead notification email failed", emailError);
    }
    return NextResponse.json({ ok: true, leadId: created.id, trackingCode: created.tracking_code, uploadToken: await createUploadToken(created.id) }, { status: 201 });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json({ error: "The enquiry service is temporarily unavailable." }, { status: 503 });
  }
}
