import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/90">
      {/* Desktop footer */}
      <div className="hidden md:block mx-auto max-w-6xl px-8 pt-16 pb-10">
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <Image
              src="/brand/logo-full-dark.png"
              alt="Build Compliance 360"
              width={168}
              height={137}
              className="w-[150px] h-auto mb-5"
            />
            <p className="text-[14px] leading-relaxed text-white/60 max-w-[220px]">
              Helping property owners and developers navigate construction, land and compliance processes across Kenya.
            </p>
          </div>

          <div>
            <p className="font-mono-tag text-[12px] uppercase tracking-wide text-sprout mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[14px] text-white/70 hover:text-white transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-tag text-[12px] uppercase tracking-wide text-sprout mb-4">Locations</p>
            <ul className="space-y-2.5">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-[14px] text-white/70 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-tag text-[12px] uppercase tracking-wide text-sprout mb-4">Contact</p>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-[14px] text-white/70 hover:text-white transition-colors">
              <Mail size={15} /> {site.email}
            </a>
            <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-2 text-[14px] text-white/70 hover:text-white transition-colors mt-2.5">
              <Phone size={15} /> {site.phone}
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex items-center justify-between text-[13px] text-white/45">
          <p>&copy; {year} Build Compliance 360. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/80">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

      {/* Mobile footer, compact, no repeated nav */}
      <div className="md:hidden px-6 pt-6 pb-8 flex flex-col items-center text-center">
        <Image
          src="/brand/logo-full-dark.png"
          alt="Build Compliance 360"
          width={168}
          height={137}
          className="w-[130px] h-auto mb-5"
        />
        <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-[14px] text-white/75 mb-3">
          <Mail size={15} /> {site.email}
        </a>
        <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-2 text-[14px] text-white/75 mb-6">
          <Phone size={15} /> {site.phone}
        </a>
        <div className="w-full flex flex-col items-center gap-2 text-[13px] text-white/60 border-t border-white/10 pt-5">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>
        <p className="text-[12px] text-white/35 mt-5">&copy; {year} Build Compliance 360.</p>
      </div>
    </footer>
  );
}
