import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceAccordion from "@/components/services/ServiceAccordion";

export const metadata: Metadata = {
    title: "Limpieza y Desinfección de Aljibes | GADYT",
    description:
        "Servicio profesional de limpieza de aljibes en Manilva, Sotogrande y Marbella, incluyendo limpieza de aljibes en Estepona con cumplimiento del RD 487/2022.",
};

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

export default function LimpiezaAljibes() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-14 md:py-20 text-white relative">
                <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                                Nuestra empresa está especializada en la limpieza y desinfección de aljibes y depósitos de agua en Estepona, Sotogrande, Marbella y Manilva, garantizando que el agua almacenada mantenga las condiciones adecuadas de <strong>potabilidad, higiene y seguridad</strong> para los usuarios finales. Nuestro servicio permite que comunidades de propietarios, urbanizaciones, hoteles y complejos residenciales dispongan de un suministro de agua en óptimas condiciones sanitarias.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Todas nuestras actuaciones de limpieza de aljibes en la Costa del Sol se realizan siguiendo estrictamente las directrices técnicas establecidas por el <strong>Real Decreto 487/2022</strong> para la prevención y control de la Legionella, asegurando el cumplimiento de la normativa sanitaria vigente.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                El proceso de mantenimiento incluye la <strong>eliminación de lodos, sedimentos, incrustaciones de cal y biopelículas</strong>, que son los principales focos de proliferación de bacterias y patógenos. Para ello aplicamos procedimientos de limpieza mecánica y desinfección química específicos para depósitos de agua, respetando siempre la integridad de las instalaciones y protegiendo la salud pública.
                            </p>
                            <p className="text-slate-700 mb-8 leading-relaxed">
                                Al finalizar cada servicio de limpieza de aljibes, emitimos el correspondiente <strong>acta técnica y certificado de higienización</strong>, que acredita que el depósito ha sido correctamente desinfectado y cumple con la normativa sanitaria. Esta documentación facilita a administradores de fincas, gestores de mantenimiento y responsables de instalaciones la trazabilidad necesaria ante cualquier inspección o requerimiento de las autoridades sanitarias.
                            </p>
                            <div className="mt-8">
                                <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                    Solicitar Limpieza
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 w-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/legionella.png"
                                    alt="Limpieza de aljibes"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceAccordion
                heading="Dudas Frecuentes Sobre Limpieza de Aljibes"
                subheading="Información clara para decidir con rapidez y sin incertidumbre."
                items={limpiezaFaq}
            />
        </div>
    );
}
