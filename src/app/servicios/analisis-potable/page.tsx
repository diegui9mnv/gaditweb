import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceAccordion from "@/components/services/ServiceAccordion";

export const metadata: Metadata = {
    title: "Análisis de Agua Potable y Consumo Humano (RD 3/2023) | GADYT",
    description:
        "Análisis de agua potable en Manilva, Estepona, Sotogrande y Marbella para comunidades, pozos y aljibes, cumpliendo el RD 3/2023.",
};

const potableFaq = [
    {
        title: "¿Qué incluye un análisis básico de potabilidad?",
        content:
            "Incluye parámetros indicadores de calidad, control de desinfectante residual y revisión sanitaria inicial para detectar incidencias comunes.",
    },
    {
        title: "¿También realizáis análisis avanzados?",
        content:
            "Sí, podemos ampliar con metales pesados, microbiología específica o plaguicidas según el tipo de captación y riesgo de la instalación.",
    },
    {
        title: "¿En qué zonas os desplazáis para toma de muestras?",
        content:
            "Nos desplazamos regularmente a Manilva, Estepona, Sotogrande y Marbella para comunidades, viviendas, hoteles y pozos particulares.",
    },
];

export default function AnalisisPotable() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-14 md:py-20 text-white relative">
                <div className="absolute inset-0 bg-green-900/30 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Análisis de Agua Potable
                    </h1>
                    <p className="text-xl text-green-100 max-w-3xl">
                        Cercioramos la salubridad del agua de consumo mediante un <strong>control analítico riguroso</strong>, fundamental para asegurar la salud pública bajo el marco del Real Decreto 3/2023.
                    </p>
                    <p className="text-green-200 mt-4 font-semibold">
                        Cobertura en <strong>Manilva, Estepona, Sotogrande y Marbella</strong>.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Garantía de Potabilidad en Todas tus Fuentes</h2>
                            <p className="text-slate-900 mb-4 leading-relaxed">
                                Cualquier instalación que almacene o distribuya agua de consumo humano debe garantizar que ésta llegue al consumidor en perfectas condiciones y libre de riesgos sanitarios. Nuestro servicio de análisis de potabilidad cubre toda la cadena, desde el punto de abastecimiento hasta el grifo final.
                            </p>
                            <p className="text-slate-900 mb-6 leading-relaxed">
                                Ya se trate de redes de distribución generales, el suministro de una comunidad de vecinos con aljibe, o el control de seguridad en sistemas aislados de pozos, en GADYT aplicamos los criterios del <strong>Real Decreto 3/2023</strong> (antiguo RD 140/2003) para evaluar los riesgos físicos, químicos y microbiológicos del agua.
                            </p>
                            <p className="text-slate-800 mb-6 leading-relaxed font-medium bg-green-50 border border-green-100 rounded-xl p-4">
                                Objetivo clave: <strong>confirmar potabilidad con datos fiables</strong> y actuar antes de que aparezcan problemas sanitarios.
                            </p>

                            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl mb-8 mt-8 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Auditorías a Medida</h3>
                                <p className="text-slate-700 text-sm">Ofrecemos desde análisis básicos de control en grifo (parámetros indicadores y desinfectante residual), hasta análisis completos e integrales y detección específica de metales pesados en redes o plaguicidas en aguas de captación.</p>
                            </div>

                            <ul className="space-y-4 mb-8 text-slate-900">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Análisis en Grifo de Instalación (AGI):</strong> Revisiones requeridas por sanidad en establecimientos públicos, residencias y servicios críticos.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Monitoreo tras Limpieza de Aljibes:</strong> Validación de la aptitud del agua para consumo tras intervenciones de mantenimiento en los depósitos.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span><strong>Asistencia Sanitaria Continua:</strong> Consultoría de farmacéuticos expertos para la interpretación de resultados y la emisión de alertas u orientaciones de tratamiento del agua.</span>
                                </li>
                            </ul>

                            <Link href="/contacto" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                Pedir Asesoramiento Analítico
                            </Link>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 w-full lg:sticky lg:top-24">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/potable1.png"
                                    alt="Muestreo de Agua Potable"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block shadow-sm">RD 3/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceAccordion
                heading="Preguntas Frecuentes de Análisis de Agua Potable"
                subheading="Todo lo esencial para evaluar riesgos y actuar con criterio sanitario."
                items={potableFaq}
                accentClassName="text-green-700"
            />
        </div>
    );
}
