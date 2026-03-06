import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceAccordion from "@/components/services/ServiceAccordion";

export const metadata: Metadata = {
    title: "Gestión Integral del Agua y Mantenimiento de Aljibes | GADYT",
    description:
        "Gestión integral del agua en Manilva, Estepona, Sotogrande y Marbella: cloración automática, mantenimiento hidráulico y soporte técnico continuo.",
};

const gestionFaq = [
    {
        title: "¿Qué mejoras se notan con una gestión técnica continua?",
        content:
            "Se reduce la aparición de averías imprevistas, mejora la estabilidad de los parámetros del agua y se alarga la vida útil de equipos e instalaciones.",
    },
    {
        title: "¿Podéis combinar mantenimiento, reparación y análisis?",
        content:
            "Sí, trabajamos con enfoque integral para que no tengas proveedores fragmentados: diagnóstico, intervención y seguimiento técnico en un mismo circuito.",
    },
    {
        title: "¿Atendéis comunidades y hoteles de la zona?",
        content:
            "Sí, operamos con frecuencia en Manilva, Estepona, Sotogrande y Marbella, adaptando el servicio al tipo de instalación y uso.",
    },
];

export default function GestionAgua() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-900 py-14 md:py-20 text-white relative">
                <div className="absolute inset-0 bg-blue-800/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        GESTIÓN DEL AGUA
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Ofrecemos un servicio integral de gestión y tratamiento de aguas que incluye la instalación y el mantenimiento de sistemas de cloración automática, tanto para piscinas como para redes de agua potable.
                    </p>
                    <p className="text-blue-200 mt-4 font-semibold">
                        Cobertura técnica en <strong>Manilva, Estepona, Sotogrande y Marbella</strong>.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tratamiento y Mantenimiento Técnico</h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Nuestro objetivo es garantizar una <strong>desinfección continua y precisa</strong>, ajustando los niveles de biocida de forma automatizada para asegurar un suministro seguro y de alta calidad en todo momento. Contamos con un equipo técnico especializado en el mantenimiento de grupos de presión, donde nos encargamos de la regulación de calderines y la optimización de la fuerza de impulsión para evitar averías y garantizar un flujo constante.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Además, realizamos reparaciones de fontanería general y llevamos a cabo la instalación de nuevos aljibes en aquellos casos donde el deterioro, la rotura o la normativa vigente exijan la sustitución completa de los depósitos existentes.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Nuestra capacidad técnica se extiende también al ámbito de las piscinas, donde resolvemos problemas estructurales o de funcionamiento mediante reparaciones específicas y arreglos de averías. Este enfoque preventivo y correctivo asegura que todas las instalaciones hidráulicas de su comunidad o complejo hotelero operen con la máxima eficiencia, prolongando la vida útil de los equipos y cumpliendo con los estándares de seguridad exigidos.
                            </p>
                            <p className="text-slate-800 mb-8 leading-relaxed font-medium bg-blue-50 border border-blue-100 rounded-xl p-4">
                                Traducido a negocio: <strong>menos paradas, menos urgencias y más control</strong> en el día a día de tu instalación.
                            </p>
                            <div className="mt-8">
                                <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                                    Consultar Proyecto
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 w-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                <Image
                                    src="/images/real/gestion.jpeg"
                                    alt="Gestión del agua"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceAccordion
                heading="Preguntas Frecuentes de Gestión del Agua"
                subheading="Claves para mejorar rendimiento, continuidad y seguridad operativa."
                items={gestionFaq}
            />
        </div>
    );
}
