import type { Metadata } from "next";

export const SITE_NAME = "GADYT";
export const SITE_URL = "https://www.gadyt.es";
export const HOME_TITLE = "Control de Legionella y Tratamiento de Agua";
export const SITE_DESCRIPTION =
  "GADYT ofrece control de Legionella, gestión integral del agua, desinfecciones, limpieza de aljibes y análisis de agua en la Costa del Sol y Andalucía.";

const SOCIAL_IMAGE = {
  url: "/assets/og-gadyt.webp",
  width: 1200,
  height: 630,
  alt: "Vehículo del equipo técnico de GADYT",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title: path === "/" ? { absolute: socialTitle } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      url: path,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
