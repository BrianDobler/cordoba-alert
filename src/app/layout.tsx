import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CordobAlert",
  description: "Genere reportes de robos en tiempo real, dentro de la Ciudad de Córdoba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="font-medium"      >
        {children}
      </body>
    </html>
  );
}
