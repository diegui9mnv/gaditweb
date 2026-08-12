import Image from "next/image";
import Link from "next/link";
import ServiciosInteractivos from "@/components/home/ServiciosInteractivos";
import FieldWorkCarousel from "@/components/home/FieldWorkCarousel";
import { createPageMetadata, HOME_TITLE, SITE_DESCRIPTION } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: HOME_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

const heroSlides = [
  {
    src: "/images/real/despiscina.webp",
    alt: "Servicio técnico de control de legionella",
  },
  {
    src: "/images/real/analisis-piscina.webp",
    alt: "Control de calidad del agua en piscina",
  },
  {
    src: "/images/real/desinfeccion.webp",
    alt: "Desinfección profesional de redes de agua",
  },
  {
    src: "/images/real/gestion.webp",
    alt: "Mantenimiento técnico de instalaciones de agua",
  },
  {
    src: "/images/real/deposito-sucio-2.webp",
    alt: "Inspección de aljibe con necesidad de higienización",
  },
];

const fieldWorkImages = [
  {
    src: "/images/real/deposito-sucio-1.webp",
    alt: "Inspección de depósito de agua antes del vaciado y limpieza",
  },
  {
    src: "/images/real/deposito-sucio-2.webp",
    alt: "Evaluación del lodo en aljibe deteriorado para su higienización",
  },
  {
    src: "/images/real/limpieza01.webp",
    alt: "Limpieza de aljibe en fase de vaciado",
  },
  {
    src: "/images/real/limpieza02.webp",
    alt: "Intervención técnica en interior de aljibe",
  },
  {
    src: "/images/real/limpieza03.webp",
    alt: "Proceso de higienización de depósito de agua",
  },
  {
    src: "/images/real/limpieza04.webp",
    alt: "Mantenimiento profesional de aljibe",
  },
  {
    src: "/images/real/limpieza05.webp",
    alt: "Estado final tras limpieza y desinfección de aljibe",
  },
  {
    src: "/images/real/legionella.webp",
    alt: "Servicio de prevención y control de legionella",
  },
  {
    src: "/images/real/filtros.webp",
    alt: "Equipo de filtración para gestión del agua",
  },
  {
    src: "/images/real/gestion.webp",
    alt: "Mantenimiento técnico de instalaciones hidráulicas",
  },
  {
    src: "/images/real/algibe.webp",
    alt: "Instalación de aljibe tratada por el equipo técnico",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.src}
              className={`hero-slide ${index === 0 ? "hero-slide-first" : ""}`}
              style={{ animationDelay: `${index * 5}s` }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-slate-900/65 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/35 to-slate-900 z-0"></div>
        <div className="absolute inset-0 hero-grid-overlay z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <div className="lg:col-span-7 text-center md:text-left">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-5">
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider bg-blue-600/70 px-3 py-1 rounded-full">
                  ROESBA 1380-AND-750
                </span>
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider bg-slate-700/80 px-3 py-1 rounded-full">
                  Manilva · Estepona · Sotogrande · Marbella
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Control de Legionella y
                <br />
                <span className="text-cyan-300">Desinfecciones de Agua en Costa del Sol</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-100 mb-8 max-w-3xl">
                Servicio técnico en toda la <strong>Costa del Sol</strong> para control de Legionella, desinfecciones de agua, piscinas y aljibes, con cobertura reforzada en <strong>Marbella, Estepona, Manilva y Sotogrande</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
                <Link href="/contacto" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                  Pedir Presupuesto
                </Link>
                <a href="tel:+34667752702" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-3.5 rounded-full transition-all shadow-lg w-full sm:w-auto text-center">
                  Llamar Ahora
                </a>
                <Link href="/#seleccion-inteligente" className="bg-transparent border-2 border-slate-500 hover:border-slate-300 text-white font-semibold px-8 py-3.5 rounded-full transition-all w-full sm:w-auto text-center">
                  Ver Servicios
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-7">
                <div className="bg-slate-900/55 border border-slate-600 rounded-xl px-4 py-3">
                  <p className="text-sm font-semibold text-white">Plan personalizado</p>
                  <p className="text-xs text-slate-300">Ajustado a tu instalación real</p>
                </div>
                <div className="bg-slate-900/55 border border-slate-600 rounded-xl px-4 py-3">
                  <p className="text-sm font-semibold text-white">Ejecución + acta</p>
                  <p className="text-xs text-slate-300">Todo trazado y documentado</p>
                </div>
                <div className="bg-slate-900/55 border border-slate-600 rounded-xl px-4 py-3">
                  <p className="text-sm font-semibold text-white">Soporte continuo</p>
                  <p className="text-xs text-slate-300">Seguimiento técnico experto</p>
                </div>
              </div>
            </div>

            <aside className="hidden lg:block lg:col-span-5">
              <div className="bg-white/10 border border-white/25 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wider text-blue-200 font-bold mb-3">Servicio Premium GADYT</p>
                <h3 className="text-2xl font-extrabold text-white mb-3">Hoja de ruta sanitaria completa</h3>
                <p className="text-slate-200 leading-relaxed mb-5">
                  Si tu instalación necesita garantías reales, diseñamos un plan técnico y documental de alto nivel para pasar de incertidumbre a control.
                </p>
                <ul className="space-y-3 text-slate-100 text-sm">
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 h-2.5 w-2.5 rounded-full bg-cyan-300"></span>
                    Auditoría inicial de puntos críticos.
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 h-2.5 w-2.5 rounded-full bg-cyan-300"></span>
                    Plan de acciones con prioridad sanitaria.
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 mr-2 h-2.5 w-2.5 rounded-full bg-cyan-300"></span>
                    Entrega documental lista para auditoría.
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Trust & About Us Section */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14 md:gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Expertos en higiene y tecnología del agua</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                En GADYT, nuestro equipo combina la más avanzada tecnología con el cumplimiento del Real Decreto 487/2022, ofreciendo un enfoque integral en la gestión del agua potable y el tratamiento de Legionella. Este trabajo está liderado por Mario Jiménez, farmacéutico especialista en este ámbito.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Te ayudamos a encontrar las soluciones más adecuadas para tu instalación, adaptadas a tus necesidades reales. Te asesoramos y acompañamos para controlar la seguridad y la calidad del agua y aplicar los requisitos que correspondan del Real Decreto 487/2022.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed font-semibold">
                Protege tu instalación frente a la Legionella con el respaldo de un equipo especializado.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Trabajamos de forma recurrente en <strong>Manilva, Estepona, Sotogrande y Marbella</strong>, además de otras zonas de Andalucía.
              </p>

              <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
                <p className="text-slate-800 font-medium">Estamos inscritos en el Registro Oficial de Establecimientos y Servicios Biocidas de Andalucía (ROESBA) con el número <strong>1380-AND-750</strong>.</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <svg className="w-6 h-6 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Atención ágil y cobertura habitual en la zona.
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-6 h-6 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Metodologías basadas en normativas vigentes.
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative mt-10 md:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/assets/furgoneta-gadyt.webp"
                  alt="Vehículo del equipo técnico de GADYT acudiendo a un servicio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-20">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg leading-tight">Servicio Rápido</p>
                  <p className="text-sm text-slate-500">En toda Andalucía</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros Servicios Especializados</h2>
            <p className="text-slate-600">
              Ofrecemos soluciones técnicas y sanitarias avanzadas para el control del agua y superficies. Cubrimos las necesidades de comunidades, hoteles, industria y promociones de obra nueva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <Link href="/servicios/control-legionella" className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 overflow-hidden group">
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <Image
                  src="/images/real/despiscina.webp"
                  alt="Control de Legionella"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Control de Legionella</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Planes de Prevención (PPCL) y Planes Sanitarios (PSL) adaptados al RD 487/2022.
                </p>
                <div className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Saber más <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/servicios/desinfecciones" className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 overflow-hidden group">
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <Image
                  src="/images/real/desinfeccion.webp"
                  alt="Desinfecciones Técnicas"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Desinfecciones Técnicas</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Desinfección de tuberías de obra civil, redes de abastecimiento y promociones de viviendas.
                </p>
                <div className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Saber más <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link href="/servicios/limpieza-aljibes" className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 overflow-hidden group">
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <Image
                  src="/images/real/legionella.webp"
                  alt="Limpieza de Aljibes"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Limpieza de Aljibes</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Limpieza y desinfección de aljibes con criterios técnicos de prevención y control.
                </p>
                <div className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Saber más <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>

            {/* Service 4 */}
            <Link href="/servicios/gestion-del-agua" className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 overflow-hidden group">
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <Image
                  src="/images/real/gestion.webp"
                  alt="Gestión del Agua"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Gestión del Agua</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Tratamiento de aguas, cloración automática y mantenimiento de grupos de presión y piscinas.
                </p>
                <div className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Saber más <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>
          </div>

          <Link
            href="/servicios/certificaciones-lpo"
            className="group mx-auto mt-8 flex max-w-5xl flex-col items-start justify-between gap-5 rounded-2xl border border-teal-200 bg-teal-50 p-6 transition-all hover:border-teal-300 hover:shadow-lg sm:flex-row sm:items-center md:p-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Obra nueva en Marbella y Estepona</span>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">Desinfección y certificado para LPO</h3>
              <p className="mt-2 max-w-3xl text-slate-600">Desinfectamos la red de agua de promociones y documentamos la actuación para el expediente de primera ocupación cuando corresponda.</p>
            </div>
            <span className="shrink-0 font-bold text-teal-700 transition-transform group-hover:translate-x-1">Ver servicio →</span>
          </Link>
        </div>
      </section>

      <ServiciosInteractivos />

      {/* Analysis Services Section - Premium Artistic Look */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Análisis: <span className="text-blue-600">Piscinas y Agua Potable</span>
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-6"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Verificamos la calidad del agua mediante controles rigurosos y análisis con laboratorios acreditados.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Piscina Section */}
            <Link href="/servicios/analisis-piscinas" className="relative group block h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <Image
                    src="/images/real/piscina1.webp"
                    alt="Técnico realizando análisis de agua en piscina"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-blue-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block">RD 742/2013</span>
                    <h3 className="text-2xl font-bold">Análisis de Piscinas</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    En GADYT, nos encargamos de realizar los análisis de agua en tu piscina, para garantizar su calidad y el cumplimiento de la normativa vigente. Contamos con equipos de medición avanzados y trabajamos con laboratorios acreditados para evaluar los principales parámetros físico-químicos y microbiológicos del agua.
                  </p>
                  <p className="text-slate-500 text-sm italic border-l-4 border-blue-500 pl-4 mb-6">
                    Según el Real Decreto 742/2013, es obligatorio realizar controles periódicos para asegurar que el agua no represente un riesgo para la salud.
                  </p>
                  <div className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center mt-auto">
                    Saber más <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Agua Potable Section */}
            <Link href="/servicios/analisis-potable" className="relative group block h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <Image
                    src="/images/real/potable1.webp"
                    alt="Muestreo de agua potable para análisis sanitario"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-green-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block">RD 3/2023</span>
                    <h3 className="text-2xl font-bold">Agua Potable</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    En GADYT, realizamos análisis de agua potable para garantizar su calidad y seguridad, cumpliendo con los requisitos del Real Decreto 3/2023, que establece los criterios sanitarios de la calidad del agua de consumo humano.
                  </p>
                  <p className="text-slate-500 text-sm italic border-l-4 border-green-500 pl-4 mb-6">
                    Servicios orientados a pozos, viviendas, aljibes y comunidades de vecinos que requieran verificar la potabilidad del agua.
                  </p>
                  <div className="text-green-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center mt-auto">
                    Saber más <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Field Work Gallery Section */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestro Trabajo en Campo</h2>
            <p className="text-slate-600">
              Imágenes reales de las intervenciones de nuestro equipo técnico en Andalucía. Aportamos total transparencia y demostramos nuestra experiencia resolviendo problemas en las condiciones más difíciles.
            </p>
          </div>
          <FieldWorkCarousel images={fieldWorkImages} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Necesitas asegurar la calidad del agua en tu instalación?</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10">
            Contáctanos hoy mismo y un experto farmacéutico evaluará tus necesidades para ofrecerte un presupuesto a medida y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-blue-700 hover:bg-slate-50 font-bold px-10 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl">
              Contactar Ahora
            </Link>
            <a href="tel:+34667752702" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-full transition-all border border-blue-500 hover:border-blue-400">
              Llamar al 667 752 702
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
