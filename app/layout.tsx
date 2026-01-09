import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kodano Dashboard - Planejamento Estratégico",
  description: "Dashboard pessoal para gestão estratégica Kodano: Gateway → Subadquirente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
