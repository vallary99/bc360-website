# Build Compliance 360

Marketing website for Build Compliance 360, a construction, land and
regulatory compliance consultancy in Kenya. Built with Next.js (App
Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form email setup

The contact form (`/contact`) posts to `app/api/contact/route.ts`, which
sends the enquiry by email via SMTP using
[nodemailer](https://nodemailer.com/). Without SMTP credentials
configured, the API route will return an error and the form will show
a friendly failure message instead of silently pretending to succeed.

To enable it:

1. Copy `.env.example` to `.env.local`.
2. Fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` from your
   email provider (Google Workspace, Zoho Mail, your web host's mail
   server, or a transactional email service's SMTP relay).
3. `CONTACT_TO_EMAIL` controls where enquiries land; it defaults to
   `enquiries@buildcompliance360.com` if left unset.
4. Restart the dev server (or redeploy) after changing env vars.

On your hosting platform (Vercel, etc.), set the same variables under
its environment variables settings rather than committing `.env.local`.

**Gmail / Google Workspace note:** you'll need an
[App Password](https://support.google.com/accounts/answer/185833), not
the account's normal login password, and 2-Step Verification must be
enabled on the account first.

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
