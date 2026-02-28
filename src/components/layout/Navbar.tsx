import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/logo-gadyt.jpg" alt="GADYT Logo" width={140} height={45} className="object-contain" priority />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Inicio</Link>
            <div className="relative group">
              <button className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center">
                Servicios
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/servicios/control-legionella" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Control de Legionella</Link>
                  <Link href="/servicios/desinfecciones" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Desinfecciones</Link>
                  <Link href="/servicios/gestion-del-agua" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Gestión del Agua</Link>
                </div>
              </div>
            </div>
            <Link href="/normativa" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Normativa</Link>
            <Link href="/contacto" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contacto</Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm hover:shadow-md">
              Pedir Presupuesto
            </Link>
          </div>
          {/* Mobile menu button (Simplified for brevity, would need state for real toggle) */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
