import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
        {/* We can use a generated background image here later, for now we will use a solid gradient */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-br from-slate-900 via-blue-900/40 to-slate-900 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Gestión Integral del Agua y <span className="text-blue-400">Prevención de Legionella</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Soluciones adaptadas y eficientes para minimizar riesgos microbiológicos, garantizando espacios seguros en hoteles, centros deportivos, gimnasios, spas y sistemas de ACS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <Link href="/contacto" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center">
                Pedir Presupuesto Sin Compromiso
              </Link>
              <Link href="/servicios/control-legionella" className="bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-3 rounded-full transition-all w-full sm:w-auto text-center">
                Conoce Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Expertos en Higiene y Tecnología del Agua</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                En GADYT, nuestro equipo está liderado por Mario Jiménez, gran especialista farmacéutico en gestión de agua potable y tratamiento de Legionella. Nuestro enfoque integral combina la más avanzada tecnología con el cumplimiento del <strong className="text-slate-900">Real Decreto 487/2022</strong>.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Además, te preparamos para el futuro: estamos capacitados para la elaboración e implementación del <strong>Plan de prevención de Legionella 2026</strong>, garantizando desde hoy el cumplimiento del próximo <strong>Real Decreto 614/2024</strong>.
              </p>

              <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
                <p className="text-slate-800 font-medium">Estamos inscritos en el Registro Oficial de Establecimientos y Servicios Biocidas de Andalucía (ROESBA) con el número <strong>1380-AND-750</strong>.</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <svg className="w-6 h-6 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Atención rápida y desplazamientos garantizados.
                </li>
                <li className="flex items-center text-slate-700">
                  <svg className="w-6 h-6 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Metodologías basadas en normativas vigentes.
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/assets/furgoneta-gadyt.jpg"
                  alt="Vehículo oficial de GADYT acudiendo a un servicio"
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
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros Servicios Principales</h2>
            <p className="text-slate-600">
              Ofrecemos soluciones técnicas y sanitarias para el control del agua y superficies. Cubrimos las necesidades de comunidades, hoteles, viviendas rurales e industria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link href="/servicios/control-legionella" className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 overflow-hidden group">
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <Image
                  src="/images/real/analisis-agua-potable.jpg"
                  alt="Técnico realizando análisis de control de Legionella"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Control de Legionella</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Planes de Prevención (PPCL) y Planes Sanitarios (PSL) adaptados al RD 487/2022 y RD 614/2024.
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
                  src="/images/real/zona-inundada.jpg"
                  alt="Servicios de desinfección y limpieza de zonas difíciles"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                />
              </div>
              <div className="p-8">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Desinfecciones</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Desinfecciones técnicas con entrega de documentación sanitaria oficial, garantizando la bioseguridad.
                </p>
                <div className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Saber más <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link href="/servicios/gestion-del-agua" className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 overflow-hidden group">
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <Image
                  src="/images/real/analisis-piscina.jpg"
                  alt="Técnico trabajando en muestreo y gestión del agua en piscina"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                />
              </div>
              <div className="p-8">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Gestión del Agua</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Limpieza y desinfección de aljibes, análisis de agua para piscinas y potable bajo los RD 742/2013 y RD 3/2023.
                </p>
                <div className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Saber más <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Field Work Gallery Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestro Trabajo en Campo</h2>
            <p className="text-slate-600">
              Imágenes reales de las intervenciones de nuestro equipo técnico en Andalucía. Aportamos total transparencia y demostramos nuestra experiencia resolviendo problemas en las condiciones más difíciles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
              <Image src="/images/real/analisis-agua-potable.jpg" alt="Análisis de agua en fuente" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
              <Image src="/images/real/zona-inundada.jpg" alt="Limpieza y desinfección de zona interior inundada" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
              <Image src="/images/real/deposito-sucio-1.jpg" alt="Inspección de depósito de agua sucio antes del vaciado y limpieza" fill className="object-cover group-hover:scale-110 transition-transform duration-700 object-center" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
              <Image src="/images/real/deposito-sucio-2.jpg" alt="Evaluación del lodo en aljibe deteriorado para su posterior higienización" fill className="object-cover group-hover:scale-110 transition-transform duration-700 object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
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
