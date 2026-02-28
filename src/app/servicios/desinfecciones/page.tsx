import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Desinfecciones Técnicas de Instalaciones | GADYT",
    description: "Servicios de desinfección profesional con entrega de documentación sanitaria oficial. Garantizamos espacios libres de patógenos. ROESBA 1380-AND-750.",
};

export default function Desinfecciones() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-20 text-white relative">
                <div className="absolute inset-0 bg-teal-900/30 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Desinfecciones Técnicas
                    </h1>
                    <p className="text-xl text-teal-100 max-w-3xl">
                        Soluciones avanzadas de higienización y bioseguridad para instalaciones críticas, avaladas por nuestra inscripción en el ROESBA (1380-AND-750).
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Protección Certificada</h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Nuestros servicios de desinfección están diseñados para eliminar la carga microbiana, garantizando un entorno seguro para trabajadores y usuarios. Finalizado nuestro servicio, entregamos el pertinente <strong>Certificado de Documentación Sanitaria Oficial</strong> que avala nuestro trabajo ante Sanidad.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Utilizamos biocidas autorizados por el Ministerio de Sanidad y empleamos equipos de nebulización y pulverización de última generación, asegurando que el producto alcance todos los rincones de la instalación.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                                <h3 className="font-semibold text-slate-900 mb-2">Ideal para:</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                                    <li className="flex items-center"><span className="text-teal-500 mr-2">✓</span> Gimnasios y centros deportivos</li>
                                    <li className="flex items-center"><span className="text-teal-500 mr-2">✓</span> Hoteles y recintos de ocio</li>
                                    <li className="flex items-center"><span className="text-teal-500 mr-2">✓</span> Centros sociosanitarios</li>
                                    <li className="flex items-center"><span className="text-teal-500 mr-2">✓</span> Colegios e institutos</li>
                                    <li className="flex items-center"><span className="text-teal-500 mr-2">✓</span> Vestuarios y zonas comunes</li>
                                </ul>
                            </div>
                            <Link href="/contacto" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                Solicitar Presupuesto
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/zona-inundada.jpg"
                                    alt="Técnico de GADYT evaluando y limpiando una zona interior inundada"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
