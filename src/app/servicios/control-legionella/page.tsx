import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Avanzado Plan de Prevención de Legionella 2026 | GADYT",
    description: "Especialistas en control de Legionella. Cumplimiento del RD 487/2022 y RD 614/2024. Implementación de PPCL y PSL para hoteles, spas, ACS y más.",
};

export default function ControlLegionella() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-20 text-white relative">
                <div className="absolute inset-0 bg-blue-900/30 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Plan de prevención de Legionella 2026
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Adelántate al cumplimiento de la normativa. Somos expertos en el registro, control y mantenimiento sanitario garantizando el riguroso cumplimiento del <strong className="text-white">Real Decreto 614/2024</strong> y el <strong className="text-white">Real Decreto 487/2022</strong>.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Expertos en PPCL y PSL</h2>
                            <p className="text-slate-900 mb-4 leading-relaxed">
                                Elaboramos de manera personalizada el <strong>Plan de Prevención y Control de Legionella (PPCL)</strong> y el <strong>Plan Sanitario frente a Legionella (PSL)</strong>. Cada instalación es distinta, y nuestro enfoque técnico permite analizar los puntos críticos en hoteles, centros deportivos, gimnasios, spas y sistemas de agua caliente sanitaria (ACS).
                            </p>
                            <p className="text-slate-900 mb-6 leading-relaxed">
                                Nuestros procedimientos garantizan la asepsia y eliminan la biopelícula en tuberías y depósitos, previniendo la proliferación de Legionella neumóphila y aportando total seguridad a tus usuarios.
                            </p>
                            <ul className="space-y-4 mb-8 text-slate-900">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Auditoría Inicial:</strong> Revisión de instalaciones y circuitos de agua.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Tratamientos Choque y Preventivos:</strong> Dosificación automatizada y purgas.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Toma de Muestras y Analíticas:</strong> Laboratorio propio y concertado para validación.</span>
                                </li>
                            </ul>
                            <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                Solicitar Asesoría Normativa
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/analisis-agua-potable.jpg"
                                    alt="Trabajador de GADYT realizando análisis de agua potable en fuente"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
