import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// On importe nos composants qu'on vient de créer
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chronolab - La Santé Connectée",
  description: "Plateforme de santé digitale innovante en Algérie et en Afrique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* On ajoute min-h-screen pour que le site prenne toute la hauteur même s'il est vide */}
      <body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}