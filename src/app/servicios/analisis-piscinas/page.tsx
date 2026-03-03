import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Análisis de Agua en Piscinas (RD 742/2013) | GADYT",
    description: "Cumple con el Real Decreto 742/2013. Análisis físico-químico y microbiológico para garantizar la calidad y seguridad en piscinas, spas y parques acuáticos.",
};

export default function AnalisisPiscinas() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-20 text-white relative">
                <div className="absolute inset-0 bg-blue-900/30 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Análisis de Piscinas
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Garantizamos la seguridad sanitaria de tu instalación mediante controles periódicos y analíticas especializadas, asegurando el cumplimiento estricto del Real Decreto 742/2013.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Máximo Control y Cumplimiento Normativo</h2>
                            <p className="text-slate-900 mb-4 leading-relaxed">
                                En GADYT trabajamos en constante coordinación con laboratorios acreditados para ofrecer unos resultados precisos y rápidos. Realizar análisis periódicos del agua de tu piscina o spa no solo es una obligación legal según el <strong>Real Decreto 742/2013</strong>, sino que es fundamental para prevenir brotes víricos y bacterianos, garantizando así la salud de los bañistas.
                            </p>
                            <p className="text-slate-900 mb-6 leading-relaxed">
                                Evaluamos parámetros críticos tanto *in situ* como en el laboratorio, asegurando que los niveles de desinfectante (cloro libre y combinado, o bromo), pH, turbidez, ácido isocianúrico y microbiología general (incluyendo *E. coli* y *Pseudomonas aeruginosa*) se mantengan siempre en valores óptimos.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Nuestros Procedimientos</h3>
                            <ul className="space-y-4 mb-8 text-slate-900">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Toma de Muestras Oficial:</strong> Técnicos cualificados realizan la recogida de muestras en condiciones de absoluta esterilidad y manteniendo la cadena de frío.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Laboratorio Acreditado:</strong> Análisis avalados por ENAC, asegurando validez y solidez técnica ante cualquier inspección de Sanidad.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Informes Digitalizados:</strong> Entrega rápida de los boletines analíticos a través de nuestra plataforma y asesoramiento en caso de incidencias.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Plan de Acción Rápida:</strong> Medidas correctoras asesoradas por farmacéuticos expertos si algún parámetro resulta no conforme.</span>
                                </li>
                            </ul>

                            <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                Solicitar Presupuesto Especializado
                            </Link>
                        </div>
                        <div className="lg:w-1/2 sticky top-24">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/piscina1.png"
                                    alt="Laboratorio: Análisis de agua de piscina"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block shadow-sm">RD 742/2013</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
