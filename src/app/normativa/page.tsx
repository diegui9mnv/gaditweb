import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Normativa sobre Prevención de Legionella y Agua Potable | GADYT",
    description: "Información detallada sobre el RD 487/2022, el próximo RD 614/2024 y RD 742/2013 de piscinas. Prepara tu Plan de Prevención de Legionella 2026.",
};

export default function Normativa() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <section className="bg-slate-900 py-20 text-white text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Marco Normativo y Legal
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Mantén tu instalación al día gracias a nuestro centro de información sobre normativas de salud pública aplicables al agua.
                </p>
            </section>

            <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    {/* RD 487/2022 */}
                    <article className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b pb-4">Real Decreto 487/2022 (Prevención y Control de Legionelosis)</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            El <strong>Real Decreto 487/2022</strong> establece los requisitos sanitarios para la prevención y el control de la legionelosis en instalaciones susceptibles de convertirse en focos de propagación (torres de refrigeración, condensadores evaporativos, sistemas de agua caliente sanitaria, jacuzzis, etc.).
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            En GADYT evaluamos el riesgo de la instalación para elaborar e implantar el <strong>Plan de Prevención y Control de Legionella (PPCL)</strong> o el más avanzado <strong>Plan Sanitario frente a Legionella (PSL)</strong>. De esta manera, reducimos la posibilidad de brotes en residencias, hoteles y hospitales mediante limpiezas químicas, térmicas y dosificación precisa.
                        </p>
                    </article>

                    {/* RD 614/2024 - Planificación 2026 */}
                    <article className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-blue-600">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Real Decreto 614/2024 (Plan de prevención de Legionella 2026)</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            La constante actualización de riesgos microbiológicos ha motivado la publicación del <strong>Real Decreto 614/2024</strong>. Aunque prevé plazos de adaptación que corren hacia el <strong>2026</strong>, este marco endurece los controles en el uso del agua y los biocidas.
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Al confiar en GADYT, tu instalación ya estará planificada bajo este nuevo paradigma legal. Formulamos tu "Plan de prevención de Legionella 2026" garantizando total tranquilidad durante las auditorías de la Consejería de Salud y reduciendo costes futuros de readaptación.
                        </p>
                        <Link href="/contacto" className="text-blue-600 font-semibold hover:underline">
                            → Solicita una auditoría preliminar para el RD 614/2024
                        </Link>
                    </article>

                    {/* RD 742/2013 */}
                    <article className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-teal-600 mb-4 border-b pb-4">Real Decreto 742/2013 (Piscinas)</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Define los criterios higiénico-sanitarios para piscinas de uso público y parques acuáticos. Según esta norma, es obligatorio realizar análisis de laboratorios frecuentes (físico-químicos y microbiológicos), así como registrar diariamente los parámetros del agua (cloro o bromo, pH, turbidez) y publicarlos mediante la aplicación nacional SILOÉ.
                        </p>
                        <ul className="list-disc ml-5 text-slate-600 mb-4 space-y-2">
                            <li>Laboratorio propio y concertado.</li>
                            <li>Apertura de Libro de Registro de Piscina.</li>
                            <li>Mantenimiento técnico continuado.</li>
                        </ul>
                    </article>

                    {/* RD 3/2023 */}
                    <article className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b pb-4">Real Decreto 3/2023 (Agua de Consumo)</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Rige la calidad del agua de consumo humano desde la acometida hasta el grifo del consumidor. Aplicable profundamente a depósitos, aljibes y redes de distribución interiores en comunidades de propietarios o establecimientos públicos. Nuestros técnicos realizan desinfecciones reglamentadas y verifican la salubridad para que el agua suministrada sea impecable, evitando contaminación cruzada y la propagación de metales pesados o bacterias.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
}
