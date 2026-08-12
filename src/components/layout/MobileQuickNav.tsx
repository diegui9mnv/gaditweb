"use client";

import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";

export default function MobileQuickNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="grid grid-cols-4 max-w-lg mx-auto">
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-slate-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-6v-6H10v6H4a1 1 0 01-1-1V10z" />
          </svg>
          Inicio
        </Link>

        <Link
          href="/#seleccion-inteligente"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-slate-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8M8 12h8M8 17h8M4 7h.01M4 12h.01M4 17h.01" />
          </svg>
          Servicios
        </Link>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-green-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 11.5a8 8 0 01-11.8 7L4 20l1.5-4.1A8 8 0 1120 11.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 8.5c.4 2.1 2.4 4.1 4.5 4.6" />
          </svg>
          WhatsApp
        </a>

        <Link
          href="/contacto"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-blue-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contacto
        </Link>
      </div>
    </nav>
  );
}
