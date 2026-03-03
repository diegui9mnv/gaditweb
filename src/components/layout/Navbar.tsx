"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
                  <Link href="/servicios/desinfecciones" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Desinfecciones Técnicas</Link>
                  <Link href="/servicios/limpieza-aljibes" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Limpieza de Aljibes</Link>
                  <Link href="/servicios/gestion-del-agua" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Gestión del Agua</Link>
                </div>
              </div>
            </div>

            {/* Análisis Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors py-2">
                Análisis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/servicios/analisis-piscinas" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Piscinas</Link>
                  <Link href="/servicios/analisis-potable" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">Agua potable</Link>
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
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-lg">
          <Link
            href="/"
            className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <div className="py-2">
            <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Servicios</p>
            <Link
              href="/servicios/control-legionella"
              className="block px-6 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Control de Legionella
            </Link>
            <Link
              href="/servicios/desinfecciones"
              className="block px-6 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Desinfecciones Técnicas
            </Link>
            <Link
              href="/servicios/limpieza-aljibes"
              className="block px-6 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Limpieza de Aljibes
            </Link>
            <Link
              href="/servicios/gestion-del-agua"
              className="block px-6 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Gestión del Agua
            </Link>
          </div>

          <div className="py-2">
            <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Análisis</p>
            <Link
              href="/servicios/analisis-piscinas"
              className="block px-6 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Piscinas
            </Link>
            <Link
              href="/servicios/analisis-potable"
              className="block px-6 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Agua potable
            </Link>
          </div>
          <Link
            href="/normativa"
            className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Normativa
          </Link>
          <Link
            href="/contacto"
            className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
          <div className="pt-4">
            <Link
              href="/contacto"
              className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Pedir Presupuesto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
