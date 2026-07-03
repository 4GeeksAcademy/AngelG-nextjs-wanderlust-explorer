import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { FavoritesProvider } from "@/components/favorites-provider";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Explorador de experiencias de viaje con busqueda y filtros por URL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <FavoritesProvider>
          <Navbar />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
