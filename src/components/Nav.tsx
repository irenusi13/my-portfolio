"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/automations", label: "Automations" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-[15px] font-semibold tracking-tight text-paper"
        >
          Olorire Sanusi
          <span className="ml-2 hidden font-mono text-[11px] font-normal text-teal sm:inline">
            RN · AI &amp; Automation
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-sm text-paper-dim transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full border border-teal/40 px-4 py-2 font-sans text-sm text-teal transition-colors hover:border-teal hover:bg-teal/10 md:inline-block"
        >
          Start a project
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line/60 bg-ink md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-sans text-base text-paper-dim transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full border border-teal/40 px-4 py-2 font-sans text-sm text-teal"
              >
                Start a project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
