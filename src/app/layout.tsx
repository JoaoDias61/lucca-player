import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucca Barros — Jogador de Futebol | Pouso Alegre",
  description:
    "Site oficial de Lucca Barros, jogador de futebol de base de Pouso Alegre/MG. Meia e lateral esquerdo. Lances, estatísticas e contato para olheiros.",
  keywords: [
    "Lucca Barros",
    "futebol de base",
    "Pouso Alegre",
    "jogador de futebol",
    "meia",
    "lateral esquerdo",
  ],
  openGraph: {
    title: "Lucca Barros — Jogador de Futebol",
    description: "Lances, estatísticas e jornada de Lucca, meia/lateral esquerdo de Pouso Alegre.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
