"use client";

import { useState } from "react";
import { Menu, X, Crown } from "lucide-react";

const links = [
  { href: "#topo", label: "HOME" },
  { href: "#sobre", label: "SOBRE" },
  { href: "#estatisticas", label: "NÚMEROS" },
  { href: "#lances", label: "LANCES" },
  { href: "#times", label: "TRAJETÓRIA" },
  { href: "#contato", label: "CONTATO" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pt-6 pb-2 flex items-center justify-between">
        <a
          href="#topo"
          aria-label="Início"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-surface-2 text-brand"
        >
          <Crown size={18} />
        </a>

        <div className="hidden md:block text-center text-brand">
          <div className="text-[10px] tracking-[0.4em] uppercase text-muted">
            Site Oficial
          </div>
          <div className="text-xl font-bold tracking-wide">Lucca Barros</div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-brand"
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="hidden md:block w-11 h-11" aria-hidden />
      </div>

      {open && (
        <nav className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-1 bg-surface-2 rounded-2xl p-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-3 text-sm font-semibold tracking-wider text-foreground/90 hover:text-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <nav className="hidden md:flex justify-center mt-2">
        <ul className="flex items-center gap-8 text-sm font-semibold tracking-[0.2em] text-foreground/85">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
