import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Luísa Pires — Backend & Mobile Developer",
  description:
    "Portfólio de Maria Luísa Pires Soares — Desenvolvedora Backend com C# .NET e Mobile com Flutter. Projetos reais, arquitetura limpa e experiência fullstack.",
  keywords: ["C#", ".NET", "Flutter", "Dart", "Backend Developer", "Mobile Developer", "ASP.NET Core", "PostgreSQL"],
  authors: [{ name: "Maria Luísa Pires Soares", url: "https://github.com/mariialuisapires" }],
  openGraph: {
    title: "Maria Luísa Pires — Backend & Mobile Developer",
    description: "Portfolio premium com projetos reais em C# .NET, Flutter e mais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
