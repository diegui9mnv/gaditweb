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
                        DESINFECIONES TÉCNICAS
                    </h1>
                    <p className="text-xl text-teal-100 max-w-3xl">
                        Ofrecemos soluciones avanzadas de higienización y bioseguridad para la desinfección de redes de agua y la obtención de los certificados técnicos correspondientes.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Higienización y Bioseguridad</h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Nuestros servicios de higienización de redes de agua están diseñados para eliminar eficazmente la carga microbiana y garantizar un entorno seguro para trabajadores y usuarios. Para ello, empleamos exclusivamente biocidas autorizados por el Ministerio de Sanidad, aplicados mediante sistemas de nebulización y pulverización que aseguran que el tratamiento alcance todos los puntos críticos de la instalación, desde los depósitos hasta los puntos terminales.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Especializados en el sector de la construcción, ejecutamos la desinfección técnica de redes y depósitos en promociones de obra nueva en la localidad de Estepona. Nos encargamos íntegramente de la gestión y tramitación de la documentación sanitaria necesaria para la obtención de la licencia de primera ocupación, asegurando que los sistemas hídricos cumplen con los estándares de salubridad exigidos por la administración local antes de su puesta en marcha.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Una vez finalizada cada intervención, formalizamos el acta sanitaria oficial que acredita la correcta ejecución de los protocolos de limpieza y desinfección según la normativa vigente. Este rigor en la trazabilidad documental permite a nuestros clientes disponer de toda la información técnica necesaria para el mantenimiento preventivo de sus instalaciones y la seguridad de sus redes hídricas.
                            </p>
                            <Link href="/contacto" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                Solicitar Presupuesto
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/desinfecion.png"
                                    alt="Desinfeccione técnicas"
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
