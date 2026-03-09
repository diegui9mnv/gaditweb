import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceAccordion from "@/components/services/ServiceAccordion";

export const metadata: Metadata = {
    title: "Desinfecciones Técnicas de Instalaciones | GADYT",
    description:
        "Servicios de desinfecciones de agua Manilva y desinfeccion de piscinas Estepona, con cobertura en Sotogrande y Marbella y documentación sanitaria completa.",
};

const desinfeccionFaq = [
    {
        title: "¿Qué valor aporta una desinfección técnica frente a una limpieza convencional?",
        content:
            "La desinfección técnica se centra en eliminar carga microbiológica con procedimientos y productos autorizados, dejando evidencia documental de la intervención.",
    },
    {
        title: "¿Emitís documentación útil para licencias o aperturas?",
        content:
            "Sí, entregamos acta sanitaria y soporte documental para acreditar la correcta ejecución del tratamiento ante requerimientos técnicos o administrativos.",
    },
    {
        title: "¿Dais cobertura en obra nueva y comunidades?",
        content:
            "Sí, trabajamos en promociones de obra nueva, hoteles y comunidades en Manilva, Estepona, Sotogrande y Marbella.",
    },
];

export default function Desinfecciones() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-14 md:py-20 text-white relative">
                <div className="absolute inset-0 bg-teal-900/30 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        DESINFECCIONES TÉCNICAS
                    </h1>
                    <p className="text-xl text-teal-100 max-w-3xl">
                        Ofrecemos soluciones avanzadas de <strong>higienización y bioseguridad</strong> para la desinfección de redes de agua y la obtención de los certificados técnicos correspondientes.
                    </p>
                    <p className="text-teal-200 mt-4 font-semibold">
                        Servicio local en <strong>Manilva, Estepona, Sotogrande y Marbella</strong>.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Higienización y Bioseguridad</h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Ofrecemos servicios profesionales de <strong>desinfección de redes de agua</strong> en Estepona, Manilva, Sotogrande y Marbella, especializados en la higienización de instalaciones hidráulicas antes de su puesta en servicio. Nuestros tratamientos eliminan eficazmente la <strong>carga microbiológica</strong> presente en tuberías, depósitos y puntos terminales, garantizando un <strong>entorno seguro</strong> para usuarios y trabajadores.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Para la desinfección de redes de agua para primera ocupación, utilizamos exclusivamente <strong>biocidas autorizados por el Ministerio de Sanidad</strong>, aplicados mediante sistemas de recirculación, nebulización o pulverización que permiten que el tratamiento alcance <strong>todos los puntos críticos</strong> de la instalación, desde los aljibes y depósitos hasta grifos, duchas y otros puntos de consumo.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Estamos especialmente especializados en desinfección de redes de agua en <strong>obra nueva y promociones inmobiliarias</strong> en Estepona, Marbella, Sotogrande y Manilva. Realizamos la desinfección técnica de las instalaciones hidráulicas antes de su entrega, un requisito habitual para la obtención de la <strong>licencia de primera ocupación</strong> y la puesta en funcionamiento de las redes de abastecimiento.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Además, nos encargamos de la <strong>gestión y tramitación de la documentación sanitaria</strong> necesaria, asegurando que las redes de agua cumplen con los estándares de higiene y salubridad exigidos por la normativa vigente y por las administraciones locales.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Una vez finalizada la intervención, emitimos el <strong>acta sanitaria y certificado de desinfección</strong> de la red de agua, documento que acredita la correcta ejecución de los trabajos y que es requerido frecuentemente por técnicos municipales, direcciones facultativas y promotores para completar los trámites de primera ocupación y garantizar la seguridad sanitaria de la instalación.
                            </p>
                            <Link href="/contacto" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                Solicitar Presupuesto
                            </Link>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 w-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/desinfeccion.png"
                                    alt="Desinfecciones técnicas"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceAccordion
                heading="Preguntas Frecuentes Sobre Desinfecciones Técnicas"
                subheading="Respuestas prácticas para saber cuándo actuar y cómo justificar cada intervención."
                items={desinfeccionFaq}
                accentClassName="text-teal-700"
            />
        </div>
    );
}
