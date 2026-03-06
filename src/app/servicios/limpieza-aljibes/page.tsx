import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceAccordion from "@/components/services/ServiceAccordion";

export const metadata: Metadata = {
    title: "Limpieza y Desinfección de Aljibes | GADYT",
    description:
        "Servicio profesional de limpieza de aljibes en Manilva, Sotogrande y Marbella, incluyendo limpieza de algibes Estepona con cumplimiento del RD 487/2022.",
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
                                Nuestra intervención garantiza la <strong>potabilidad y salubridad</strong> del agua, permitiendo que los residentes y usuarios finales dispongan de un suministro en condiciones óptimas de seguridad y confianza. Todas nuestras actuaciones en depósitos de agua siguen estrictamente las directrices técnicas marcadas por el Real Decreto 487/2022 para la prevención de la Legionella.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                El proceso incluye la eliminación de lodos, incrustaciones y biopelículas donde proliferan los patógenos, empleando métodos de desinfección mecánica y química que protegen la integridad de las instalaciones y la salud pública.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Al finalizar las tareas de mantenimiento, formalizamos el acta técnica y la validación sanitaria correspondiente que acredita la correcta higienización del aljibe. Este documento oficial asegura que la instalación cumple con la normativa vigente y facilita a los administradores de fincas y responsables de mantenimiento la trazabilidad necesaria ante cualquier requerimiento de las autoridades sanitarias.
                            </p>
                            <p className="text-slate-700 mb-8 leading-relaxed">
                                También cubrimos necesidades asociadas a la búsqueda <strong>limpieza de algibes Estepona</strong>, además de servicios de limpieza de aljibes en el resto de la Costa del Sol.
                            </p>
                            <p className="text-slate-800 mb-8 leading-relaxed font-medium bg-blue-50 border border-blue-100 rounded-xl p-4">
                                Si gestionas inmuebles en <strong>Manilva, Estepona, Sotogrande o Marbella</strong>, este servicio es una forma directa de reforzar la seguridad del agua y evitar incidencias evitables.
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
                                    src="/images/real/algibe.png"
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
