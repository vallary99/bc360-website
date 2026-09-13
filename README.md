# Build Compliance 360

Marketing website for Build Compliance 360, a construction, land and
regulatory compliance consultancy in Kenya. Built with Next.js (App
Router), TypeScript and Tailwind CSS. Hosted on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form email setup

The contact form (`/contact`) posts to `app/api/contact/route.ts`,
which sends the enquiry by email via SMTP using
[nodemailer](https://nodemailer.com/). It also rejects spam via a
honeypot field and a minimum-time-to-submit check. Without SMTP
credentials configured, the route returns a clear error and the form
shows a failure message, it never silently pretends to succeed.

To enable it:

1. Copy `.env.example` to `.env.local` for local testing.
2. Fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` from your
   email provider (Google Workspace, Zoho Mail, your web host's mail
   server, or a transactional email service's SMTP relay).
3. `CONTACT_TO_EMAIL` controls where enquiries land; defaults to
   `enquiries@buildcompliance360.com` if left unset.
4. On Vercel: Project → Settings → Environment Variables, add the same
   variables there (do not commit `.env.local`), then redeploy.

**Gmail / Google Workspace note:** you'll need an
[App Password](https://support.google.com/accounts/answer/185833), not
the account's normal login password, and 2-Step Verification must be
enabled on the account first.

## Deployment

Push to the connected Git branch and Vercel builds and deploys
automatically, no manual build/upload step needed. `buildcompliance360.com`
is pointed at this Vercel project via DNS (see Vercel's Domains settings
for the exact records required).

## Project structure

- `app/` : pages and API routes (Next.js App Router)
- `components/` : shared UI components
- `lib/` : content data (services, locations, articles) and site config
- `public/brand/` : logo assets
- `public/photos/` : team/content photography

## Build

```bash
npm run build
npm run start
```
