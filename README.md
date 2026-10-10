# Gazette Legal Services

A production-oriented Next.js website for Gazette publication services. It includes SEO-ready public pages, lead capture, a protected admin dashboard, Neon PostgreSQL persistence and signed Cloudflare R2 uploads.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and provide the required values.
3. Add the Neon pooled connection string as `DATABASE_URL`, run `npm run db:check`, and then run `npm run db:migrate`. The migration is idempotent and can safely be run again.
4. Generate the admin password hash with `npm run hash-password -- 'your-long-password'` and paste the complete output into the local `ADMIN_PASSWORD_HASH`. The generator escapes bcrypt's `$` separators for Next.js environment files. For a hosting dashboard such as Vercel, use `npm run hash-password -- 'your-long-password' --raw` and paste the unescaped value.
5. Create a private R2 bucket and an API token limited to that bucket.
6. Create a Resend API key, verify the sending domain, and configure `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, and `RESEND_FROM_EMAIL` for new-lead notifications.
7. Run `npm run dev`.

## Storage model

- Neon stores structured records and R2 object keys.
- R2 stores files; `lead-documents` remains private.
- Upload URLs expire after five minutes.
- Public website images should be placed in a separate public bucket or served through a controlled Cloudflare custom domain. Customer documents must never use that public bucket.

## Before launch

- Replace placeholder business contact information and client-approved copy.
- Add Turnstile verification and email notifications.
- Add R2 CORS rules that allow `PUT` only from the production and preview origins.
- Add login rate limiting and MFA if multiple administrators are introduced.
- Have the advocate approve all service, policy and professional-conduct language.
