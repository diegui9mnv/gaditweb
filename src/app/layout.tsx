import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileQuickNav from "@/components/layout/MobileQuickNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GADYT | Especialistas en Control de Legionella y Tratamiento de Agua",
  description: "Prevención de Legionella bajo RD 487/2022 y RD 614/2024. Gestión integral del agua, desinfección y analíticas en Málaga y Andalucía. ROESBA 1380-AND-750.",
  keywords: [
    "Plan de prevención de Legionella 2026",
    "control legionella Marbella",
    "control legionella Estepona",
    "desinfecciones de agua Manilva",
    "desinfeccion de piscinas Estepona",
    "limpieza de algibes Estepona",
    "Sotogrande",
    "Real Decreto 487/2022",
    "gestión del agua",
    "Málaga",
    "Andalucía"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth scroll-pt-20 md:scroll-pt-24">
      <body
        className={`${inter.className} antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileQuickNav />
      </body>
    </html>
  );
}
