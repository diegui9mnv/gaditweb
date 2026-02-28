import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <Image src="/assets/logo-gadyt.jpg" alt="GADYT Logo" width={160} height={52} className="object-contain" />
                        </Link>
                        <p className="text-sm text-slate-400 mb-4">
                            Gestión integral del agua, desinfección y tratamiento. Especialistas en prevención de Legionella y cumplimiento normativo.
                        </p>
                        <div className="text-xs bg-slate-800 inline-block px-3 py-1 rounded-full text-slate-300 border border-slate-700">
                            ROESBA Nº 1380-AND-750
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Servicios</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/servicios/control-legionella" className="hover:text-blue-400 transition-colors">Control de Legionella (RD 487/2022)</Link></li>
                            <li><Link href="/servicios/desinfecciones" className="hover:text-blue-400 transition-colors">Desinfecciones Técnicas</Link></li>
                            <li><Link href="/servicios/gestion-del-agua" className="hover:text-blue-400 transition-colors">Gestión del Agua y Aljibes</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Enlaces</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">Inicio</Link></li>
                            <li><Link href="/normativa" className="hover:text-blue-400 transition-colors">Normativa</Link></li>
                            <li><Link href="/contacto" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>C/Domínguez, 8.<br />Manilva, Málaga (CP 29691)</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>667 752 702</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>contacto@gadyt.es</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} GADYT. Todos los derechos reservados.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <Link href="/privacidad" className="hover:text-slate-300">Política de Privacidad</Link>
                        <Link href="/legal" className="hover:text-slate-300">Aviso Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
