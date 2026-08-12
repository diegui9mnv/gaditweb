import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Normativa de Legionella y Calidad del Agua",
    description: "Resumen del RD 487/2022, modificado por el RD 614/2024, y de la normativa sobre agua de consumo y piscinas. Asesoramiento técnico en la Costa del Sol.",
    path: "/normativa",
});

export default function Normativa() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <section className="bg-slate-900 py-14 md:py-20 text-white text-center">
                <Breadcrumbs current={{ name: "Normativa", path: "/normativa" }} align="center" />
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Normativa de Legionella y Calidad del Agua
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Consulta los principales requisitos sanitarios aplicables al agua y cuenta con apoyo técnico para mantener tu instalación y su documentación al día.
                </p>
            </section>

            <section className="py-14 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 md:space-y-12">
                    <p className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-relaxed text-slate-700">
                        Este resumen tiene carácter informativo. Los requisitos concretos dependen del tipo de instalación, su evaluación de riesgo y los criterios de la autoridad sanitaria competente.
                    </p>

                    {/* RD 487/2022 */}
                    <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b pb-4">Real Decreto 487/2022 (Prevención y Control de Legionelosis)</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            El <strong>Real Decreto 487/2022</strong> establece los requisitos sanitarios para la prevención y el control de la legionelosis en instalaciones susceptibles de convertirse en focos de propagación (torres de refrigeración, condensadores evaporativos, sistemas de agua caliente sanitaria, jacuzzis, etc.).
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Desde el <strong>2 de enero de 2024</strong>, las instalaciones incluidas en su ámbito deben tener implantado un <strong>Plan de Prevención y Control de Legionella (PPCL)</strong> o, en su caso, un <strong>Plan Sanitario frente a Legionella (PSL)</strong>. En GADYT ayudamos a evaluar la instalación, preparar el plan que corresponda y mantener sus actuaciones y registros.
                        </p>
                        <a
                            href="https://www.boe.es/buscar/act.php?id=BOE-A-2022-10297"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-blue-700 hover:underline"
                        >
                            Consultar el texto consolidado en el BOE →
                        </a>
                        <Link href="/servicios/control-legionella" className="mt-4 block font-semibold text-blue-700 hover:underline">
                            Ver el servicio de control de Legionella →
                        </Link>
                    </article>

                    {/* RD 614/2024 */}
                    <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-blue-600">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Real Decreto 614/2024 (modificación del RD 487/2022)</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            El <strong>Real Decreto 614/2024</strong> modificó el RD 487/2022. Los PPCL y PSL debían actualizarse a sus disposiciones <strong>antes del 1 de julio de 2025</strong>, por lo que actualmente conviene comprobar que el plan, el programa de actuaciones y los registros incorporan los cambios aplicables.
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            La modificación también amplió hasta el <strong>1 de enero de 2030</strong> el periodo transitorio previsto para la acreditación de la toma de muestras. Revisamos cada instalación y coordinamos la documentación, los tratamientos y el control analítico conforme a los requisitos que resulten aplicables.
                        </p>
                        <a
                            href="https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-13422"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm font-semibold text-blue-700 hover:underline mb-4"
                        >
                            Consultar la modificación en el BOE →
                        </a>
                        <Link href="/contacto" className="text-blue-600 font-semibold hover:underline">
                            → Solicita una revisión técnica de tu PPCL o PSL
                        </Link>
                    </article>

                    {/* RD 742/2013 */}
                    <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-teal-600 mb-4 border-b pb-4">Real Decreto 742/2013 (Piscinas)</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Establece los criterios técnico-sanitarios básicos de las piscinas para proteger la salud de las personas usuarias. El programa de autocontrol, la frecuencia de los análisis, los registros y las comunicaciones aplicables deben ajustarse al tipo de piscina y a sus características.
                        </p>
                        <ul className="list-disc ml-5 text-slate-600 mb-4 space-y-2">
                            <li>Planificación y seguimiento de los controles.</li>
                            <li>Coordinación de análisis físico-químicos y microbiológicos.</li>
                            <li>Mantenimiento técnico y documental.</li>
                        </ul>
                        <a
                            href="https://www.boe.es/buscar/act.php?id=BOE-A-2013-10580"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-teal-700 hover:underline"
                        >
                            Consultar el texto consolidado en el BOE →
                        </a>
                        <Link href="/servicios/analisis-piscinas" className="mt-4 block font-semibold text-teal-700 hover:underline">
                            Ver análisis de agua en piscinas →
                        </Link>
                    </article>

                    {/* RD 3/2023 */}
                    <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b pb-4">Real Decreto 3/2023 (Agua de Consumo)</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Establece los criterios técnico-sanitarios de la calidad del agua de consumo, su control y suministro. Puede afectar a depósitos, aljibes y redes interiores de comunidades y establecimientos según las características y responsabilidades de cada instalación. Nuestros técnicos realizan limpiezas y desinfecciones, coordinan la verificación analítica y documentan las actuaciones efectuadas.
                        </p>
                        <a
                            href="https://www.boe.es/buscar/act.php?id=BOE-A-2023-628"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-blue-800 hover:underline"
                        >
                            Consultar el texto consolidado en el BOE →
                        </a>
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                            <Link href="/servicios/analisis-potable" className="font-semibold text-blue-800 hover:underline">
                                Ver análisis de agua potable →
                            </Link>
                            <Link href="/servicios/limpieza-aljibes" className="font-semibold text-blue-800 hover:underline">
                                Ver limpieza de aljibes →
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
