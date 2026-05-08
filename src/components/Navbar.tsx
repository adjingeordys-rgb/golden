"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
            Golden Dev Studio
          </span>
        </Link>

        <button
          aria-label="Ouvrir le menu"
          className="rounded-md border border-yellow-500/40 p-2 text-yellow-300 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu size={18} />
        </button>

        <ul className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition hover:text-yellow-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-yellow-500/20 bg-black/80 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm text-zinc-200">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
