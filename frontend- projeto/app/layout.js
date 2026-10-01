import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

<nav>
    <Link href="/">Início</Link>
    <Link href="/listaluno">Cadastro Turmas</Link>
    <Link href="/notaluno">Pesagem</Link>
    <Link href="/semaforo">Semáforo</Link>
</nav>

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NutriData | Controle alimentar",
  description: "Sistema de controle de desperdícios alimentares",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
