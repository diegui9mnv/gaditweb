import Image from "next/image";
import Link from "next/link";
import ServiceAccordion from "@/components/services/ServiceAccordion";
import RelatedServices from "@/components/services/RelatedServices";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Control de Legionella en Costa del Sol",
    description:
        "Control de Legionella y revisión de PPCL o PSL en Marbella, Estepona, Sotogrande y Manilva, conforme al RD 487/2022 y su modificación por el RD 614/2024.",
    path: "/servicios/control-legionella",
});

const legionellaFaq = [
    {
        title: "¿Qué diferencia hay entre PPCL y PSL?",
        content:
            "El PPCL organiza el diagnóstico inicial, los programas de actuación y la evaluación periódica. El PSL se basa en la evaluación del riesgo y adapta las medidas de control a la instalación. La opción adecuada depende de sus características y de los requisitos aplicables.",
    },
    {
        title: "¿Cómo os preparáis para una inspección sanitaria?",
        content:
            "Revisamos la documentación, los registros y el estado real de la red para detectar posibles pendientes, proponer medidas correctoras y mejorar la trazabilidad antes de una inspección.",
    },
    {
        title: "¿Prestáis servicio local en Costa del Sol?",
        content:
            "Sí, trabajamos de forma continuada en Manilva, Estepona, Sotogrande y Marbella para comunidades, hoteles y centros deportivos.",
    },
];

export default function ControlLegionella() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-14 md:py-20 text-white relative">
                <div className="absolute inset-0 bg-blue-900/30 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Breadcrumbs current={{ name: "Control de Legionella", path: "/servicios/control-legionella" }} />
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Control de Legionella
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Te ofrecemos una <strong>solución integral</strong> para aplicar el Real Decreto 487/2022 y su modificación por el Real Decreto 614/2024, desde la elaboración o revisión del PPCL o PSL hasta el control analítico de las aguas de tu red.
                    </p>
                    <p className="text-blue-200 mt-4 font-semibold">
                        Servicio recurrente en <strong>Manilva, Estepona, Sotogrande y Marbella</strong>.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Soluciones Integrales y a Medida</h2>
                            <p className="text-slate-900 mb-4 leading-relaxed">
                                Ajustamos cada plan de prevención a las características específicas de tu instalación para <strong>reducir el riesgo sanitario</strong> y facilitar su adecuación a la normativa vigente. Realizamos tareas de limpieza y desinfección en distintos sistemas, incluyendo depósitos de AFCH y ACS, tuberías, redes de contraincendios, sistemas de riego y puntos terminales.
                            </p>
                            <p className="text-slate-900 mb-6 leading-relaxed">
                                Al finalizar cada actuación, emitimos el certificado de limpieza y desinfección correspondiente. También ejecutamos o coordinamos el plan de muestreo y análisis de agua para mantener la trazabilidad documental de la instalación, atendiendo a los requisitos de acreditación y a los plazos transitorios aplicables.
                            </p>
                            <p className="text-slate-700 mb-6 leading-relaxed">
                                Si buscas control legionella en Marbella, Manilva, Estepona o Sotogrande, trabajamos con protocolos técnicos completos en toda la zona.
                            </p>
                            <p className="text-slate-800 mb-6 leading-relaxed font-medium bg-blue-50 border border-blue-100 rounded-xl p-4">
                                Nuestro enfoque combina <strong>prevención real + documentación sólida</strong> para reducir incidencias sanitarias y facilitar inspecciones y revisiones.
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
                                    <span><strong>Toma de muestras y analíticas:</strong> ejecución o coordinación conforme a los requisitos de acreditación y al régimen transitorio aplicable.</span>
                                </li>
                            </ul>
                            <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                Solicitar Revisión Técnica
                            </Link>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 w-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/despiscina.webp"
                                    alt="Control de Legionella"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: "Limpieza y desinfección de aljibes",
                        description: "Mantenimiento higiénico de depósitos de agua y eliminación de sedimentos y biopelículas.",
                        href: "/servicios/limpieza-aljibes",
                    },
                    {
                        name: "Análisis de agua potable",
                        description: "Toma de muestras y control analítico para verificar la calidad del agua de consumo.",
                        href: "/servicios/analisis-potable",
                    },
                ]}
            />

            <ServiceAccordion
                heading="Preguntas Clave de Control de Legionella"
                subheading="Respuestas directas para facilitar decisiones técnicas y normativas."
                items={legionellaFaq}
            />
        </div>
    );
}

