import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/contact";

const siteUrl = "https://www.gadyt.es";

const services = [
  {
    name: "Control de Legionella",
    path: "/servicios/control-legionella",
  },
  {
    name: "Desinfecciones técnicas",
    path: "/servicios/desinfecciones",
  },
  {
    name: "Desinfección y certificado LPO",
    path: "/servicios/certificaciones-lpo",
  },
  {
    name: "Gestión integral del agua",
    path: "/servicios/gestion-del-agua",
  },
  {
    name: "Limpieza y desinfección de aljibes",
    path: "/servicios/limpieza-aljibes",
  },
  {
    name: "Análisis de agua en piscinas",
    path: "/servicios/analisis-piscinas",
  },
  {
    name: "Análisis de agua potable",
    path: "/servicios/analisis-potable",
  },
];

const localBusiness = {
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: "GADYT",
  url: siteUrl,
  logo: `${siteUrl}/assets/logo-gadyt.jpg`,
  telephone: "+34 667 752 702",
  email: "contacto@gadyt.es",
  sameAs: [INSTAGRAM_URL],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34 667 752 702",
    contactType: "customer service",
    availableLanguage: "Spanish",
    url: WHATSAPP_URL,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/Domínguez, 8",
    addressLocality: "Manilva",
    addressRegion: "Málaga",
    postalCode: "29691",
    addressCountry: "ES",
  },
  areaServed: [
    "Manilva",
    "Estepona",
    "Sotogrande",
    "Marbella",
    "Costa del Sol",
    "Andalucía",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de GADYT",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${siteUrl}${service.path}`,
      },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "GADYT",
  inLanguage: "es",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export default function LocalBusinessJsonLd() {
  return (
    <script
      id="gadyt-local-business-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [localBusiness, website],
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
