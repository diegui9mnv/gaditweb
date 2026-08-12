import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ServiceAccordion from "@/components/services/ServiceAccordion";
import ServiceImageCarousel from "@/components/services/ServiceImageCarousel";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

const pagePath = "/servicios/certificaciones-lpo";
const pageDescription =
  "Desinfección de redes de agua y certificado para LPO o primera ocupación en Marbella y Estepona. Servicio para promotoras y obra nueva.";

export const metadata = createPageMetadata({
  title: "Desinfección LPO en Marbella y Estepona",
  description: pageDescription,
  path: pagePath,
});

const lpoFaq = [
  {
    title: "¿Qué es un certificado de desinfección para LPO?",
    content:
      "Es el documento que deja constancia de la desinfección realizada en la red de agua de una obra nueva o promoción. Identifica la instalación y aporta la trazabilidad del tratamiento para que la dirección facultativa, la promotora o la constructora pueda incorporarlo a la documentación de primera ocupación cuando corresponda.",
  },
  {
    title: "¿El certificado garantiza la licencia de primera ocupación?",
    content:
      "No. Nuestro certificado acredita el trabajo de desinfección de la red, pero no sustituye el resto de documentos técnicos ni la comprobación municipal. El procedimiento puede tramitarse como licencia o declaración responsable y sus requisitos dependen del expediente, del municipio y de las características de la obra.",
  },
  {
    title: "¿Realizáis desinfecciones LPO en Marbella y Estepona?",
    content:
      "Sí. Prestamos este servicio en Marbella, San Pedro Alcántara, Nueva Andalucía, Estepona y promociones del entorno de la Costa del Sol occidental. También podemos desplazarnos a Manilva y Sotogrande.",
  },
  {
    title: "¿Cuándo conviene realizar la desinfección de la red?",
    content:
      "Debe programarse cuando la red esté terminada y permita ejecutar el tratamiento de forma completa, coordinándolo con las pruebas, la puesta en servicio y los plazos de entrega. Revisamos cada caso con la constructora o la dirección facultativa antes de fijar la intervención.",
  },
  {
    title: "¿Podéis coordinar también el análisis del agua?",
    content:
      "Sí. Cuando el expediente o el técnico responsable lo requiera, podemos coordinar el muestreo y el análisis de agua con laboratorios acreditados. Su alcance se define por separado según la instalación y los parámetros solicitados.",
  },
];

const lpoCarouselImages = [
  {
    src: "/images/real/desinfeccion.webp",
    alt: "Desinfección de una red de agua para primera ocupación",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${pagePath}#service`,
  name: "Desinfección de redes y certificado para primera ocupación",
  serviceType: "Desinfección y certificado LPO de redes de agua",
  url: `${SITE_URL}${pagePath}`,
  description: pageDescription,
  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
  areaServed: [
    { "@type": "City", name: "Marbella" },
    { "@type": "City", name: "Estepona" },
    { "@type": "City", name: "Manilva" },
    { "@type": "Place", name: "Sotogrande" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Promotoras, constructoras, direcciones facultativas y empresas de obra civil",
  },
};

export default function CertificacionesLpo() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative bg-slate-900 py-14 text-white md:py-20">
        <div className="absolute inset-0 z-0 bg-teal-900/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            current={{ name: "Certificaciones LPO", path: pagePath }}
          />
          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight md:text-5xl">
            DESINFECCIÓN DE REDES PARA OBTENCIÓN DE LICENCIA DE PRIMERA
            OCUPACIÓN
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-teal-100">
            Desinfectamos redes de agua de promociones y edificios de obra
            nueva y emitimos el <strong>certificado de desinfección</strong> para
            incorporarlo a la documentación de primera ocupación cuando
            corresponda.
          </p>
          <p className="mt-4 font-semibold text-teal-200">
            Servicio especializado en <strong>Marbella y Estepona</strong>, con
            cobertura en la Costa del Sol occidental.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-10 md:gap-16 lg:flex-row">
            <div className="order-2 lg:order-1 lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Certificado de Desinfección para LPO
              </h2>
              <p className="mb-4 leading-relaxed text-slate-600">
                Este servicio está dirigido a <strong>promotoras, constructoras
                y direcciones facultativas</strong> que necesitan higienizar la
                instalación de agua de una promoción antes de su entrega y
                documentar correctamente la actuación.
              </p>
              <p className="mb-6 leading-relaxed text-slate-600">
                Intervenimos en redes interiores de agua, montantes, acometidas,
                ramales, depósitos y puntos terminales. Antes de comenzar
                revisamos el alcance y el estado de la instalación para definir
                el procedimiento y coordinarlo con la planificación de la obra.
              </p>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Tratamiento y documentación técnica
              </h3>
              <p className="mb-4 leading-relaxed text-slate-600">
                Ejecutamos la desinfección mediante un procedimiento controlado
                y adaptado a las características de la red. Al finalizar
                entregamos el <strong>acta y certificado de desinfección</strong>,
                con la identificación de la instalación y la trazabilidad del
                tratamiento realizado.
              </p>
              <p className="mb-6 leading-relaxed text-slate-600">
                Cuando el expediente o el técnico responsable lo requieren,
                también podemos coordinar el muestreo y el {" "}
                <Link
                  href="/servicios/analisis-potable"
                  className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
                >
                  análisis de agua potable
                </Link>
                . Este control se define por separado según la instalación y
                los parámetros solicitados.
              </p>

              <div className="mb-6 rounded-xl border border-teal-100 bg-teal-50 p-5 text-slate-700">
                <p className="font-bold text-slate-900">
                  Primera ocupación en Marbella y Estepona
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  La documentación publicada por el Ayuntamiento de Estepona
                  contempla acreditar la correcta desinfección sanitaria de la
                  red. En Marbella, la primera ocupación dispone de un trámite
                  específico mediante declaración responsable.
                </p>
                <p className="mt-3 text-sm">
                  Consulta las fuentes del {" "}
                  <a
                    href="https://urbanismo.marbella.es/documentos/modelos-de-solicitud/licencias-urbanisticas.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-teal-700 underline underline-offset-4"
                  >
                    Ayuntamiento de Marbella
                  </a>{" "}
                  y del {" "}
                  <a
                    href="https://ayuntamiento.estepona.es/docs/dee35afebe288af1ccbeea3f763bd6d5.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-teal-700 underline underline-offset-4"
                  >
                    Ayuntamiento de Estepona
                  </a>
                  .
                </p>
              </div>

            </div>

            <div className="order-1 mb-6 w-full lg:order-2 lg:mb-0 lg:w-1/2">
              <ServiceImageCarousel images={lpoCarouselImages} />
            </div>
          </div>
        </div>
      </section>

      <ServiceAccordion
        heading="Preguntas Frecuentes Sobre Desinfección y Certificado LPO"
        subheading="Información para promotoras, constructoras y técnicos de obra nueva."
        items={lpoFaq}
        accentClassName="text-teal-700"
      />
    </div>
  );
}
