import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-body",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veoma & Co - L'uniforme, un art qui vous ressemble",
  description: "Une expertise passionnée depuis plus de 10 ans pour l'uniforme professionnel. Création de tenues personnalisées et totalement inédites pour votre entreprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
