import { createPageMetadata } from "@/lib/seo";

const contactDescription =
  "Contacta con GADYT para solicitar información o presupuesto sobre control de Legionella, tratamiento, desinfección y análisis de agua en la Costa del Sol.";

export const metadata = createPageMetadata({
  title: "Contacto y presupuesto",
  description: contactDescription,
  path: "/contacto",
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
