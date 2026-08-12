import Link from "next/link";
import ServiceAccordion from "@/components/services/ServiceAccordion";
import ServiceImageCarousel from "@/components/services/ServiceImageCarousel";
import RelatedServices from "@/components/services/RelatedServices";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Limpieza de Aljibes en Estepona, Marbella y Sotogrande",
    description:
        "Servicio profesional de limpieza de aljibes en Manilva, Sotogrande y Marbella, incluyendo limpieza de aljibes en Estepona con cumplimiento del RD 487/2022.",
    path: "/servicios/limpieza-aljibes",
});

const limpiezaFaq = [
    {
        title: "¿Cada cuánto conviene limpiar y desinfectar un aljibe?",
        content:
            "Depende del uso, volumen y estado del depósito, pero lo más recomendable es mantener una periodicidad preventiva para evitar lodos, biopelículas y desviaciones en la calidad del agua.",
    },
    {
        title: "¿Qué documentación entregáis al terminar?",
        content:
            "Entregamos acta técnica y trazabilidad sanitaria de la intervención, con detalle de los productos aplicados y observaciones del estado del aljibe.",
    },
    {
        title: "¿En qué zonas prestáis este servicio de forma habitual?",
        content:
            "Trabajamos con frecuencia en Manilva, Estepona, Sotogrande y Marbella, además de otras zonas de la Costa del Sol.",
    },
];

const limpiezaCarouselImages = [
    {
        src: "/images/real/limpieza01.webp",
        alt: "Limpieza de aljibe en fase de vaciado y preparación",
    },
    {
        src: "/images/real/limpieza02.webp",
        alt: "Intervención técnica de limpieza interior de aljibe",
    },
    {
        src: "/images/real/limpieza03.webp",
        alt: "Proceso de higienización y desinfección de depósito",
    },
    {
        src: "/images/real/limpieza04.webp",
        alt: "Equipo técnico realizando mantenimiento de aljibe",
    },
    {
        src: "/images/real/limpieza05.webp",
        alt: "Resultado tras la limpieza profesional del aljibe",
    },
    {
        src: "/images/real/legionella.webp",
        alt: "Control preventivo de legionella en instalación de agua",
    },
];

export default function LimpiezaAljibes() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-14 md:py-20 text-white relative">
                <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Breadcrumbs current={{ name: "Limpieza de Aljibes", path: "/servicios/limpieza-aljibes" }} />
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        LIMPIEZA DE ALJIBES
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Realizamos la <strong>limpieza y desinfección exhaustiva</strong> de aljibes en comunidades de propietarios, hoteles y complejos residenciales, asegurando que los depósitos mantengan las condiciones higiénicas necesarias para el consumo humano.
                    </p>
                    <p className="text-blue-200 mt-4 font-semibold">
                        Cobertura habitual en <strong>Manilva, Estepona, Sotogrande y Marbella</strong>.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Potabilidad y Seguridad Hídrica</h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Nuestra empresa está especializada en la limpieza y desinfección de aljibes y depósitos de agua en Estepona, Sotogrande, Marbella y Manilva. Eliminamos suciedad y focos de contaminación para recuperar condiciones adecuadas de <strong>higiene y seguridad</strong>; cuando procede, la potabilidad se verifica mediante el control analítico correspondiente.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                En nuestras actuaciones integramos los criterios técnicos del <strong>Real Decreto 487/2022</strong> para la prevención y control de la Legionella cuando resultan aplicables al tipo de instalación.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                El proceso de mantenimiento incluye la <strong>eliminación de lodos, sedimentos, incrustaciones de cal y biopelículas</strong>, que son los principales focos de proliferación de bacterias y patógenos. Para ello aplicamos procedimientos de limpieza mecánica y desinfección química específicos para depósitos de agua, respetando siempre la integridad de las instalaciones y protegiendo la salud pública.
                            </p>
                            <p className="text-slate-700 mb-8 leading-relaxed">
                                Al finalizar cada servicio de limpieza de aljibes, emitimos el correspondiente <strong>acta técnica y certificado de higienización</strong>, con el detalle de la intervención realizada. Esta documentación facilita a administradores de fincas, gestores de mantenimiento y responsables de instalaciones la trazabilidad ante inspecciones o requerimientos sanitarios.
                            </p>
                            <div className="mt-8">
                                <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                    Solicitar Limpieza
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 w-full">
                            <ServiceImageCarousel images={limpiezaCarouselImages} />
                        </div>
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: "Control de Legionella",
                        description: "Prevención, documentación y seguimiento sanitario de instalaciones de agua.",
                        href: "/servicios/control-legionella",
                    },
                    {
                        name: "Análisis de agua potable",
                        description: "Comprobación analítica de la calidad del agua después de la intervención cuando corresponda.",
                        href: "/servicios/analisis-potable",
                    },
                ]}
            />

            <ServiceAccordion
                heading="Dudas Frecuentes Sobre Limpieza de Aljibes"
                subheading="Información clara para decidir con rapidez y sin incertidumbre."
                items={limpiezaFaq}
            />
        </div>
    );
}
