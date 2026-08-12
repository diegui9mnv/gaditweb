import Image from "next/image";
import Link from "next/link";
import ServiceAccordion from "@/components/services/ServiceAccordion";
import RelatedServices from "@/components/services/RelatedServices";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Análisis de Agua en Piscinas",
    description:
        "Análisis de piscinas en Manilva, Estepona, Sotogrande y Marbella, con control físico-químico y microbiológico según el RD 742/2013.",
    path: "/servicios/analisis-piscinas",
});

const piscinasFaq = [
    {
        title: "¿Qué pasa si un parámetro sale fuera de rango?",
        content:
            "Te orientamos con un plan de acción rápida para corregir desinfectante, pH o microbiología y recuperar el cumplimiento en el menor tiempo posible.",
    },
    {
        title: "¿Los informes sirven para inspección sanitaria?",
        content:
            "Sí, trabajamos con laboratorios acreditados y entregamos informes trazables para justificar el control analítico ante inspecciones.",
    },
    {
        title: "¿En qué municipios cubrís este servicio?",
        content:
            "Prestamos servicio de análisis en Manilva, Estepona, Sotogrande y Marbella, con planificación adaptada a cada instalación.",
    },
];

export default function AnalisisPiscinas() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-14 md:py-20 text-white relative">
                <div className="absolute inset-0 bg-blue-900/30 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Breadcrumbs current={{ name: "Análisis de Piscinas", path: "/servicios/analisis-piscinas" }} />
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Análisis de Piscinas
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Realizamos controles periódicos y analíticas especializadas para evaluar la <strong>seguridad sanitaria</strong> de tu instalación y los requisitos aplicables del Real Decreto 742/2013.
                    </p>
                    <p className="text-blue-200 mt-4 font-semibold">
                        Servicio activo en <strong>Manilva, Estepona, Sotogrande y Marbella</strong>.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Máximo Control y Cumplimiento Normativo</h2>
                            <p className="text-slate-900 mb-4 leading-relaxed">
                                En GADYT trabajamos en coordinación con laboratorios acreditados para ofrecer resultados fiables. La frecuencia y el alcance de los controles dependen del tipo de piscina y de los requisitos aplicables del <strong>Real Decreto 742/2013</strong>; además, el seguimiento permite detectar desviaciones que podrían afectar a la salud de los bañistas.
                            </p>
                            <p className="text-slate-900 mb-6 leading-relaxed">
                                Evaluamos parámetros críticos tanto *in situ* como en el laboratorio, asegurando que los niveles de desinfectante (cloro libre y combinado, o bromo), pH, turbidez, ácido isocianúrico y microbiología general (incluyendo *E. coli* y *Pseudomonas aeruginosa*) se mantengan siempre en valores óptimos.
                            </p>
                            <p className="text-slate-800 mb-6 leading-relaxed font-medium bg-blue-50 border border-blue-100 rounded-xl p-4">
                                Tu ventaja competitiva: <strong>detectar desviaciones antes de que se conviertan en incidencias</strong>.
                            </p>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Nuestros Procedimientos</h3>
                            <ul className="space-y-4 mb-8 text-slate-900">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Toma de muestras trazable:</strong> Técnicos cualificados realizan la recogida con procedimientos adecuados y mantienen la cadena de frío.</span>
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
                        <div className="lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 w-full lg:sticky lg:top-24">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/piscina1.webp"
                                    alt="Laboratorio: Análisis de agua de piscina"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
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

            <RelatedServices
                services={[
                    {
                        name: "Control de Legionella",
                        description: "Planes preventivos, revisiones y control analítico para instalaciones con riesgo sanitario.",
                        href: "/servicios/control-legionella",
                    },
                    {
                        name: "Gestión integral del agua",
                        description: "Mantenimiento técnico y seguimiento continuado de instalaciones hidráulicas.",
                        href: "/servicios/gestion-del-agua",
                    },
                ]}
            />

            <ServiceAccordion
                heading="Preguntas Frecuentes de Análisis de Piscinas"
                subheading="Respuestas rápidas para mantener tu instalación en control."
                items={piscinasFaq}
            />
        </div>
    );
}
