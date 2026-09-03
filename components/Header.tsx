"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-[104px]">
          <Link href="/" className="flex items-center shrink-0 py-2" onClick={() => setOpen(false)}>
            <Image
              src="/brand/logo-full-light.png"
              alt="Build Compliance 360, established 2025"
              width={900}
              height={735}
              className="h-[76px] w-auto sm:h-[84px]"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-ink/80 hover:text-forest transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/services/stuck-approvals"
              className="text-[14px] font-medium text-forest border border-forest rounded-sm px-4 py-2.5 hover:bg-forest hover:text-white transition-colors"
            >
              Stuck Approval?
            </Link>
            <Link
              href="/contact"
              className="text-[14px] font-medium text-white bg-ink rounded-sm px-4 py-2.5 hover:bg-forest transition-colors"
            >
              Get Assistance
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-white">
          <nav className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[16px] text-ink py-3 border-b border-hairline/70 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/services/stuck-approvals"
                onClick={() => setOpen(false)}
                className="text-center text-[15px] font-medium text-forest border border-forest rounded-sm px-4 py-3"
              >
                Stuck Approval?
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-center text-[15px] font-medium text-white bg-ink rounded-sm px-4 py-3"
              >
                Get Assistance
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
