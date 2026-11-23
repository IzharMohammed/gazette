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
  old_name: z.string().trim().max(100).optional().or(z.literal("")),
  new_name: z.string().trim().max(100).optional().or(z.literal("")),
  name_change_type: z.string().trim().max(100).optional().or(z.literal("")),
  company: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Please check the details and try again." }, { status: 400 });
    const data = { ...parsed.data };
    delete data.company;

    const details = [
      data.old_name ? `Old Name: ${data.old_name}` : null,
      data.new_name ? `New Name: ${data.new_name}` : null,
      data.name_change_type ? `Type of Name Change: ${data.name_change_type}` : null,
    ].filter(Boolean).join(" | ");

    const formattedMessage = details
      ? (data.message ? `${details}\n\n${data.message}` : details)
      : (data.message || null);

    const leadInput = {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      city: data.city || null,
      service: data.service,
      message: formattedMessage,
    };
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
