import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gestión Integral del Agua y Mantenimiento de Aljibes | GADYT",
    description: "Limpieza de aljibes, análisis de piscinas (RD 742/2013), control de agua potable (RD 3/2023) y consultoría técnica SILOÉ.",
};

export default function GestionAgua() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-20 text-white relative">
                <div className="absolute inset-0 bg-blue-800/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Mantenimiento y Gestión del Agua
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Aseguramos la calidad y salubridad del agua en depósitos, aljibes y vasos de piscina, acompañando a nuestros clientes con asesoría completa.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Un enfoque global y seguro</h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-blue-700 mb-2 border-b pb-2">Mantenimiento de Aljibes</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Realizamos la obligatoria limpieza y desinfección anual de depósitos de agua de consumo humano e industrial, evitando la acumulación de incrustaciones, sedimentos y el crecimiento microbiológico que puede derivar en problemas graves de salud.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-blue-700 mb-2 border-b pb-2">Análisis de Agua Normativo</h3>
                                    <ul className="text-slate-600 text-sm leading-relaxed list-disc ml-5 space-y-2">
                                        <li><strong>Piscinas:</strong> Controles físico-químicos y microbiológicos exhaustivos en cumplimiento con el <strong>RD 742/2013</strong>.</li>
                                        <li><strong>Agua Potable:</strong> Verificación y control en redes de viviendas, urbanizaciones y pozos privados, asegurando que se cumple el <strong>RD 3/2023</strong> de calidad del agua de consumo.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-blue-700 mb-2 border-b pb-2">Consultoría Técnica y Legal</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Facilitamos la burocracia con Sanidad y Medio Ambiente. Tramitamos sistemas <strong>SILOÉ</strong> para piscinas, gestionamos autorizaciones de <strong>vertido al dominio público hidráulico</strong> y expedientes de <strong>Calificación Ambiental (CA)</strong> necesarios para la apertura de nuevas instalaciones.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                    Consultar Proyecto
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/deposito-sucio-1.jpg"
                                    alt="Evaluación y limpieza técnica de un aljibe o depósito de agua"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
