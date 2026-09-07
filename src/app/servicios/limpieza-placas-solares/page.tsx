import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceAccordion from "@/components/services/ServiceAccordion";
import ServiceImageCarousel from "@/components/services/ServiceImageCarousel";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

const pagePath = "/servicios/limpieza-placas-solares" as const;

const description =
  "Limpieza profesional de placas solares para viviendas, comunidades y empresas en Marbella, Estepona, Sotogrande y Manilva. Servicio seguro y cuidadoso.";

export const metadata = createPageMetadata({
  title: "Limpieza de Placas Solares",
  description,
  path: pagePath,
});

const solarCarouselImages = [
  {
    src: "/images/real/limpieza-placas-solares.webp",
    alt: "Proceso de limpieza manual de la superficie de una placa solar",
  },
  {
    src: "/images/real/placas-solares-con-suciedad.webp",
    alt: "Placas solares antes de la limpieza con suciedad acumulada",
  },
];

const benefits = [
  {
    title: "Mejor aprovechamiento solar",
    description:
      "Retirar la suciedad favorece que la superficie de los módulos reciba la luz sin obstáculos innecesarios.",
  },
  {
    title: "Producción más estable",
    description:
      "Una limpieza adecuada ayuda a evitar pérdidas de rendimiento asociadas a la acumulación de residuos.",
  },
  {
    title: "Eliminación de residuos",
    description:
      "Actuamos sobre polvo, polen, excrementos de aves y otras partículas depositadas en los paneles.",
  },
  {
    title: "Cuidado de los paneles",
    description:
      "Empleamos un procedimiento no agresivo orientado a conservar el buen estado de los módulos.",
  },
  {
    title: "Revisión visual",
    description:
      "Durante el servicio podemos advertir anomalías o desperfectos visibles para que el cliente pueda revisarlos.",
  },
];

const installationTypes = [
  {
    title: "Viviendas particulares",
    description: "Instalaciones solares domésticas en cubiertas y espacios exteriores.",
  },
  {
    title: "Comunidades y edificios",
    description: "Mantenimiento adaptado a instalaciones compartidas y zonas comunes.",
  },
  {
    title: "Empresas y naves",
    description: "Limpieza planificada para cubiertas comerciales e industriales.",
  },
  {
    title: "Instalaciones fotovoltaicas",
    description: "Atención a instalaciones de diferentes tamaños y niveles de suciedad.",
  },
];

const solarFaq = [
  {
    title: "¿Cada cuánto conviene limpiar las placas solares?",
    content:
      "La frecuencia depende de la ubicación, la inclinación de los paneles y la presencia de polvo, polen, aves u otros residuos. Valoramos cada instalación para recomendar una periodicidad razonable.",
  },
  {
    title: "¿La limpieza puede mejorar el rendimiento?",
    content:
      "Eliminar la suciedad acumulada ayuda a que los módulos reciban mejor la luz solar y evita pérdidas asociadas a esos residuos. El resultado concreto depende también del estado y las características de la instalación.",
  },
  {
    title: "¿Trabajáis en viviendas y en instalaciones de empresas?",
    content:
      "Sí. Atendemos viviendas particulares, comunidades, edificios, empresas, naves e instalaciones fotovoltaicas de diferentes tamaños, adaptando el procedimiento a cada caso.",
  },
  {
    title: "¿En qué zonas ofrecéis el servicio?",
    content:
      "Prestamos servicio habitual en Manilva, Sotogrande, Estepona y Marbella, además de otras localidades de la Costa del Sol según las características del trabajo.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}${pagePath}#service`,
      name: "Limpieza profesional de placas solares",
      serviceType: "Limpieza y mantenimiento de placas solares",
      description,
      url: `${SITE_URL}${pagePath}`,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: ["Manilva", "Sotogrande", "Estepona", "Marbella", "Costa del Sol"],
      audience: [
        { "@type": "Audience", audienceType: "Viviendas particulares" },
        { "@type": "Audience", audienceType: "Comunidades y edificios" },
        { "@type": "Audience", audienceType: "Empresas e instalaciones fotovoltaicas" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: solarFaq.map((item) => ({
        "@type": "Question",
        name: item.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.content,
        },
      })),
    },
  ],
};

export default function LimpiezaPlacasSolares() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-slate-900 py-14 text-white md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-blue-700/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs current={{ name: "Limpieza de Placas Solares", path: pagePath }} />
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Limpieza de placas solares
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-slate-200">
            Mantén tus placas solares limpias y ayuda a conservar el buen rendimiento de tu instalación.
          </p>
          <p className="mt-4 font-semibold text-amber-100">
            Servicio en <strong>Manilva, Sotogrande, Estepona y Marbella</strong>.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-amber-600">
              Más luz, menos suciedad acumulada
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Mantén tus placas limpias y favorece su rendimiento
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              La suciedad, el polvo, el polen, los excrementos de aves y otros residuos pueden acumularse sobre la superficie de los paneles solares y reducir la cantidad de luz que reciben, afectando a su rendimiento.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              En GADYT ofrecemos un servicio profesional de limpieza y mantenimiento de placas solares, realizado de forma segura y cuidadosa para ayudar a conservar tus instalaciones en buenas condiciones y favorecer su funcionamiento.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
            >
              Solicitar presupuesto
            </Link>
          </div>

          <ServiceImageCarousel
            images={solarCarouselImages}
            className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl"
          />
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              ¿Por qué es importante limpiar tus placas solares?
            </h2>
            <p className="mt-4 text-slate-600">
              Una limpieza periódica forma parte del cuidado responsable de una instalación fotovoltaica.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 12 4 4L19 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Un servicio profesional y especializado</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Realizamos la limpieza utilizando productos y métodos adecuados para instalaciones fotovoltaicas, evitando procedimientos agresivos que puedan dañar la superficie de los módulos.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Prestamos especial atención a cada instalación y adaptamos el procedimiento a las características de los paneles, su ubicación, la accesibilidad y el nivel de suciedad.
            </p>
            <p className="mt-6 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5 text-lg font-semibold text-slate-800">
              No se trata solo de limpiar: se trata de cuidar tu instalación solar.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 p-7 text-white md:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-300">Nuestra forma de trabajar</p>
            <ul className="mt-6 space-y-5">
              {[
                "Valoración de las características y el estado visible de la instalación.",
                "Procedimiento ajustado a la ubicación y al nivel de suciedad.",
                "Limpieza cuidadosa con métodos apropiados para los módulos.",
                "Aviso de posibles anomalías visibles detectadas durante el servicio.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-200">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 12 4 4L19 6" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-slate-400">
              La observación visual realizada durante la limpieza no sustituye una inspección técnica o eléctrica especializada.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Limpieza para viviendas, empresas e instalaciones fotovoltaicas
            </h2>
            <p className="mt-4 text-slate-600">
              Adaptamos el servicio a la escala, ubicación y necesidades de cada instalación.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {installationTypes.map((type, index) => (
              <article key={type.title} className="rounded-2xl border border-blue-100 bg-white p-6">
                <span className="text-sm font-extrabold text-blue-600">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{type.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-blue-700 px-6 py-9 text-center text-white md:px-10 md:py-12">
            <h2 className="text-3xl font-bold">Confía el cuidado de tus placas solares a GADYT</h2>
            <p className="mx-auto mt-4 max-w-3xl text-blue-100">
              Nos encargamos de que tus paneles estén limpios, cuidados y preparados para seguir aprovechando la energía del sol.
            </p>
            <Link
              href="/contacto"
              className="mt-7 inline-flex rounded-full bg-white px-8 py-3 font-bold text-blue-700 transition-colors hover:bg-blue-50"
            >
              Solicita presupuesto sin compromiso
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices
        services={[
          {
            name: "Gestión integral del agua",
            description: "Mantenimiento técnico y preventivo para las instalaciones de tu comunidad o empresa.",
            href: "/servicios/gestion-del-agua",
          },
          {
            name: "Limpieza de aljibes",
            description: "Limpieza y desinfección profesional de depósitos de agua.",
            href: "/servicios/limpieza-aljibes",
          },
        ]}
      />

      <ServiceAccordion
        heading="Preguntas frecuentes sobre limpieza de placas solares"
        subheading="Resolvemos las dudas habituales antes de valorar tu instalación."
        items={solarFaq}
        accentClassName="text-amber-600"
      />
    </div>
  );
}
