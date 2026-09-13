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

## Hosting and DNS

The site runs on Vercel (project `bc360-website`). `buildcompliance360.com`
is registered/managed through the same cPanel account that used to host
the site directly, DNS records live there under **Zone Editor**, edited
to point at Vercel instead of the cPanel server:

- **A record**, name `@`, pointing to Vercel's IP for this project
- **CNAME record**, name `www`, pointing to the per-domain hostname
  Vercel's Domains settings show for `www.buildcompliance360.com`
  (Vercel now issues a unique hostname per domain rather than one
  shared value; use whatever is currently shown there)

All other records in that zone (MX, SPF/DKIM/DMARC, `mail.`, `webmail.`,
etc.) are unrelated to the website and must be left alone, they handle
email, which still runs through this same cPanel account's mail server
(see below), not through Vercel.

**cPanel's only remaining role is hosting email.** It no longer serves
any site files, `public_html` on that account is a leftover from
before this migration and is not part of this project's deployment.

## Contact form email setup

The contact form (`/contact`) posts to `app/api/contact/route.ts`,
a Next.js API route that runs as a Vercel serverless function. It
sends the enquiry by email via SMTP using
[nodemailer](https://nodemailer.com/), and rejects spam via a honeypot
field and a minimum-time-to-submit check. Without SMTP credentials
configured, the route returns a clear error and the form shows a
failure message, it never silently pretends to succeed.

**Currently configured to send through the cPanel-hosted mailbox**
`enquiries@buildcompliance360.com` (found via cPanel → Email Accounts
→ Connect Devices, which shows the correct outgoing server for that
specific mailbox):

| Variable | Value |
|---|---|
| `SMTP_HOST` | `mail.buildcompliance360.com` |
| `SMTP_PORT` | `465` |
| `SMTP_SECURE` | `true` |
| `SMTP_USER` | `enquiries@buildcompliance360.com` |
| `SMTP_PASS` | (the mailbox password, set via cPanel → Email Accounts → Manage) |
| `CONTACT_TO_EMAIL` | `enquiries@buildcompliance360.com` |

These are set in Vercel under Project → Settings → Environment
Variables (not committed to the repo, see `.env.example` for the
template). **Any change to these requires a redeploy to take effect**,
Vercel doesn't apply env var changes to an already-running deployment.

If this mailbox's password is ever reset, `SMTP_PASS` must be updated
in Vercel and redeployed, or the contact form will start failing
silently for visitors until someone notices.

**Known risk worth knowing about:** `app/api/contact/route.ts` sends
`From: no-reply@buildcompliance360.com`, an address distinct from the
authenticated `SMTP_USER` mailbox. This matches the previous PHP
version's behavior, but that version sent unauthenticated through a
local mail relay, where this was never challenged. Since we now
authenticate via SMTP, some mail servers reject or silently rewrite a
From address that doesn't match the logged-in account. If enquiries
stop arriving after a change here, check this first, the fix is
changing `FROM_EMAIL` in that file to match `SMTP_USER` instead.

If the mail provider ever changes (e.g. moving off this cPanel mailbox
to Google Workspace or another provider), swap in that provider's SMTP
details, no code changes needed beyond the `FROM_EMAIL` consideration
above. Google Workspace/Gmail specifically requires an
[App Password](https://support.google.com/accounts/answer/185833)
rather than the normal account password.

## Deployment

Push to the connected Git branch and Vercel builds and deploys
automatically, no manual build/upload step needed.

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
