import { Resend } from "resend";
import type { Lead } from "@/lib/db";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string | null) {
  if (!value) return "";
  return `<tr><th style="padding:10px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb;color:#475569;width:140px">${escapeHtml(label)}</th><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#0f172a">${escapeHtml(value)}</td></tr>`;
}

export async function sendLeadNotification(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !from) {
    console.warn("Lead email skipped: RESEND_API_KEY, LEAD_NOTIFICATION_EMAIL, or RESEND_FROM_EMAIL is not configured");
    return { sent: false, reason: "not-configured" as const };
  }

  const safeService = lead.service.replace(/[\r\n]+/g, " ").slice(0, 100);
  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to: [recipient],
    replyTo: lead.email || undefined,
    subject: `New website enquiry — ${safeService}`,
    html: `
      <!doctype html>
      <html lang="en">
        <body style="margin:0;background:#f7f4ed;font-family:Arial,sans-serif;color:#15202b">
          <div style="max-width:640px;margin:0 auto;padding:32px 16px">
            <div style="background:#102a43;color:white;border-radius:14px 14px 0 0;padding:24px">
              <p style="margin:0 0 6px;color:#e8c982;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Website enquiry</p>
              <h1 style="margin:0;font-family:Georgia,serif;font-size:28px">A new customer would like to connect</h1>
            </div>
            <div style="background:white;border:1px solid #e3ded3;border-top:0;border-radius:0 0 14px 14px;padding:24px">
              <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px">
                ${row("Name", lead.name)}
                ${row("Phone", lead.phone)}
                ${row("Email", lead.email)}
                ${row("City", lead.city)}
                ${row("Service", lead.service)}
                ${row("Message", lead.message)}
                ${row("Lead ID", lead.id)}
              </table>
              <p style="margin:20px 0 0;color:#64748b;font-size:12px;line-height:1.6">This enquiry is also stored in the protected admin dashboard. Replying to this email will reply to the customer when they supplied an email address.</p>
            </div>
          </div>
        </body>
      </html>`,
  });

  if (error) throw new Error(`Resend error: ${error.message}`);
  return { sent: true, id: data?.id };
}
