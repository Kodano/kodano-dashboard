import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kodano Dashboard - Planejamento Estratégico",
  description: "Dashboard para gestão do plano de negócios Kodano: Gateway → Subadquirente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
