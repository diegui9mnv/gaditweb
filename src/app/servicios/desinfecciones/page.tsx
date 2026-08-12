import Link from "next/link";
import ServiceAccordion from "@/components/services/ServiceAccordion";
import ServiceImageCarousel from "@/components/services/ServiceImageCarousel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Desinfección de Tuberías y Redes de Agua",
    description:
        "Desinfección de tuberías de obra civil, redes de abastecimiento y promociones de viviendas en la Costa del Sol, con acta y documentación técnica.",
    path: "/servicios/desinfecciones",
});

const desinfeccionFaq = [
    {
        title: "¿Qué tuberías y redes podéis desinfectar?",
        content:
            "Intervenimos en conducciones de abastecimiento ejecutadas en vía pública, acometidas, ramales y redes interiores de promociones de viviendas, tanto antes de su puesta en servicio como después de reparaciones o ampliaciones.",
    },
    {
        title: "¿Entregáis documentación al finalizar los trabajos?",
        content:
            "Sí. Entregamos el acta y el certificado de desinfección con la trazabilidad del tratamiento realizado, documentación útil para la dirección facultativa, la promotora, la constructora o la administración correspondiente.",
    },
    {
        title: "¿Trabajáis con constructoras y promotoras?",
        content:
            "Sí, coordinamos las actuaciones con constructoras, empresas de obra civil, promotoras y direcciones facultativas para adaptarnos a la planificación de la obra y a la puesta en servicio de la red.",
    },
];

const desinfeccionCarouselImages = [
    {
        src: "/images/real/desinfeccion-red-via-publica.webp",
        alt: "Medición de cloro libre durante la desinfección de una red de agua en vía pública",
    },
    {
        src: "/images/real/desinfeccion-red-obra-civil.webp",
        alt: "Control de cloro en una tubería de obra civil durante su desinfección",
    },
];

export default function Desinfecciones() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-14 md:py-20 text-white relative">
                <div className="absolute inset-0 bg-teal-900/30 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Breadcrumbs current={{ name: "Desinfecciones Técnicas", path: "/servicios/desinfecciones" }} />
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        DESINFECCIÓN DE TUBERÍAS Y REDES DE AGUA
                    </h1>
                    <p className="text-xl text-teal-100 max-w-3xl">
                        Tratamientos profesionales para <strong>tuberías de obra civil en vía pública</strong>, nuevas redes de abastecimiento y <strong>promociones de viviendas</strong> antes de su conexión y puesta en servicio.
                    </p>
                    <p className="text-teal-200 mt-4 font-semibold">
                        Trabajamos con constructoras, promotoras y direcciones facultativas en <strong>Manilva, Estepona, Sotogrande y Marbella</strong>.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Desinfección para Obra Civil y Obra Nueva</h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Nos especializamos en la <strong>desinfección de tuberías de agua potable ejecutadas en obras de urbanización y vía pública</strong>. Tratamos nuevas conducciones de abastecimiento, acometidas y ramales antes de conectarlos a la red o ponerlos en funcionamiento, reduciendo la carga microbiológica que puede quedar después de los trabajos de instalación.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                También actuamos en <strong>promociones de viviendas y edificios de nueva construcción</strong>, desinfectando las redes interiores de agua, montantes, acometidas, depósitos y puntos terminales antes de la entrega de la instalación. El procedimiento se adapta al trazado, volumen y características de cada red para que el tratamiento alcance el conjunto de la instalación.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Utilizamos <strong>productos autorizados y procedimientos controlados</strong>, coordinando la intervención con la constructora, la promotora o la dirección facultativa. Podemos planificar los trabajos por fases para adaptarnos al avance de la obra, a las pruebas de la red y a los plazos previstos para su recepción o puesta en servicio.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                El servicio resulta igualmente adecuado tras <strong>reparaciones, ampliaciones o sustituciones de tramos de tubería</strong> que requieran una nueva higienización antes de recuperar el suministro.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Una vez finalizada la intervención, entregamos el <strong>acta y certificado de desinfección de la red</strong>, con la trazabilidad del tratamiento realizado. Esta documentación facilita la justificación de los trabajos ante técnicos municipales, compañías suministradoras, direcciones facultativas y responsables de la promoción.
                            </p>
                            <Link href="/contacto" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                Solicitar Presupuesto
                            </Link>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 w-full">
                            <ServiceImageCarousel
                                images={desinfeccionCarouselImages}
                                className="relative mx-auto aspect-[3/4] max-w-[520px] overflow-hidden rounded-2xl bg-slate-100 shadow-2xl lg:max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-teal-100 bg-teal-50 py-10">
                <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-5 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-teal-700">Servicio para obra nueva</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-900">¿Necesitas el certificado de desinfección para primera ocupación?</h2>
                        <p className="mt-2 max-w-3xl text-slate-600">Consulta el servicio específico para promociones y expedientes LPO en Marbella y Estepona.</p>
                    </div>
                    <Link href="/servicios/certificaciones-lpo" className="shrink-0 rounded-full bg-teal-700 px-7 py-3 font-semibold text-white transition-colors hover:bg-teal-800">
                        Ver certificaciones LPO
                    </Link>
                </div>
            </section>

            <ServiceAccordion
                heading="Preguntas Frecuentes Sobre Desinfección de Tuberías"
                subheading="Información práctica para constructoras, promotoras y responsables de obra."
                items={desinfeccionFaq}
                accentClassName="text-teal-700"
            />
        </div>
    );
}
