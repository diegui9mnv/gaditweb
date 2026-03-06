"use client";

import Link from "next/link";

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
          href="tel:+34667752702"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium text-slate-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Llamar
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
