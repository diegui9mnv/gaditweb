import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GADYT | Especialistas en Control de Legionella y Tratamiento de Agua",
  description: "Prevención de Legionella bajo RD 487/2022 y RD 614/2024. Gestión integral del agua, desinfección y analíticas en Málaga y Andalucía. ROESBA 1380-AND-750.",
  keywords: ["Plan de prevención de Legionella 2026", "cumplimiento del Real Decreto 614/2024", "Real Decreto 487/2022", "desinfecciones", "gestión del agua", "Málaga", "Andalucía"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
