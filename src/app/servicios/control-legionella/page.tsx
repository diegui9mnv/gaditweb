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
                        Control de Legionella
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        En nuestra empresa te ofrecemos una solución integral para el cumplimiento estricto del Real Decreto 487/2022, cubriendo desde la elaboración técnica de los planes de prevención y control de Legionella hasta el control analítico exhaustivo de las aguas de tu red.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Soluciones Integrales y a Medida</h2>
                            <p className="text-slate-900 mb-4 leading-relaxed">
                                Ajustamos cada plan de prevención a las características específicas de tu instalación, garantizando siempre la máxima seguridad sanitaria y la adecuación a la normativa vigente. Realizamos las tareas de limpieza y desinfección en todo tipo de sistemas, incluyendo depósitos de AFCH y ACS, tuberías, redes de contraincendios, sistemas de riego y puntos terminales.
                            </p>
                            <p className="text-slate-900 mb-6 leading-relaxed">
                                Al finalizar cada actuación, emitimos el certificado oficial de limpieza y desinfección conforme a las exigencias legales, encargándonos además de ejecutar el plan de muestreo y análisis de agua necesario para asegurar la correcta trazabilidad documental y el mantenimiento óptimo de tus instalaciones.
                            </p>
                            <ul className="space-y-4 mb-8 text-slate-900">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Auditoría inicial:</strong> revisión de instalaciones y circuitos de agua</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Documentación:</strong> elaboración del plan de prevención y libros de registro</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Desinfección:</strong> procedimiento de limpieza y desinfección de tus instalaciones</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Toma de muestras y analíticas:</strong> toma de muestras por laboratorio acreditado.</span>
                                </li>
                            </ul>
                            <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                Solicitar Asesoría Normativa
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/legionella.png"
                                    alt="Control de Legionella"
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
