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
                                Nuestros servicios de higienización de redes de agua están diseñados para eliminar eficazmente la carga microbiana y garantizar un entorno seguro para trabajadores y usuarios. Para ello, empleamos exclusivamente biocidas autorizados por el Ministerio de Sanidad, aplicados mediante sistemas de nebulización y pulverización que aseguran que el tratamiento alcance todos los puntos críticos de la instalación, desde los depósitos hasta los puntos terminales.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Especializados en el sector de la construcción, ejecutamos la desinfección técnica de redes y depósitos en promociones de obra nueva y activos residenciales de <strong>Manilva, Estepona, Sotogrande y Marbella</strong>. Nos encargamos íntegramente de la gestión y tramitación de la documentación sanitaria necesaria para la obtención de la licencia de primera ocupación, asegurando que los sistemas hídricos cumplen con los estándares de salubridad exigidos por la administración local antes de su puesta en marcha.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Una vez finalizada cada intervención, formalizamos el acta sanitaria oficial que acredita la correcta ejecución de los protocolos de limpieza y desinfección según la normativa vigente. Este rigor en la trazabilidad documental permite a nuestros clientes disponer de toda la información técnica necesaria para el mantenimiento preventivo de sus instalaciones y la seguridad de sus redes hídricas.
                            </p>
                            <p className="text-slate-700 mb-8 leading-relaxed">
                                Para búsquedas como <strong>desinfecciones de agua Manilva</strong> o <strong>desinfeccion de piscinas Estepona</strong>, ofrecemos intervención técnica y soporte documental integral.
                            </p>
                            <p className="text-slate-800 mb-8 leading-relaxed font-medium bg-teal-50 border border-teal-100 rounded-xl p-4">
                                Nuestro objetivo es que tu instalación quede <strong>desinfectada, documentada y lista para avanzar</strong> sin retrasos innecesarios.
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
