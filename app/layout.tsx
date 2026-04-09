import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oíkos – Conexão de Serviços",
  description: "Conecte-se com profissionais verificados para serviços domésticos.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
