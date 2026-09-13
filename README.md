# Build Compliance 360

Marketing website for Build Compliance 360, a construction, land and
regulatory compliance consultancy in Kenya. Built with Next.js (App
Router), TypeScript and Tailwind CSS, exported as a fully static site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment: static export

`next.config.ts` sets `output: "export"`, so `npm run build` produces a
plain static site in `out/`, no Node.js server required. Upload the
contents of `out/` to your host's document root (e.g. `public_html` on
cPanel) via File Manager or FTP, the same as any plain HTML site.

## Contact form email setup

The contact form (`/contact`) posts to `contact.php` (in `public/`, so
it's copied into `out/` as-is by the static export and ends up sitting
alongside the rest of the site at the domain root). It:

- Validates required fields (name, a properly formatted email) server-side
- Rejects spam via a honeypot field and a minimum-time-to-submit check
- Sends the enquiry using PHP's built-in `mail()` function

Configured to send to and from `enquiries@buildcompliance360.com`. If
the live domain ever changes, open `public/contact.php` and check:

1. `$toEmail` and `$fromEmail`: both currently set to
   `enquiries@buildcompliance360.com`. Sending "From" the same address
   mail is delivered "to" is fine for PHP's `mail()`; just keep it an
   address on your own domain, most mail servers spam-flag or reject
   mail claiming to be From a domain it isn't actually sent through.
2. `$allowedOrigins`: update if the live domain differs from
   `buildcompliance360.com` / `www.buildcompliance360.com`.

This requires a PHP-capable host (virtually all cPanel hosting
qualifies) but no Node.js runtime at all. If `mail()` proves unreliable
on your specific host (shared hosting sometimes flags it as spam more
than an authenticated SMTP send would), swap the `mail()` call in
`contact.php` for [PHPMailer](https://github.com/PHPMailer/PHPMailer)
configured with real SMTP credentials, the surrounding validation and
anti-bot logic doesn't need to change either way.

## Project structure

- `app/` : pages (Next.js App Router)
- `components/` : shared UI components
- `lib/` : content data (services, locations, articles) and site config
- `public/brand/` : logo assets
- `public/photos/` : team/content photography
- `public/contact.php` : contact form handler (see above)

## Build

```bash
npm run build
```

Deployable output lands in `out/`.
