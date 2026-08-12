import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileQuickNav from "@/components/layout/MobileQuickNav";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import { HOME_TITLE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  display: "swap",
  style: "normal",
  weight: "100 900",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${HOME_TITLE}`,
    template: "%s | GADYT",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
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
        <LocalBusinessJsonLd />
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
