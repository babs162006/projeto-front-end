"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideHeaderFooter = pathname === "/formulario";

  return (
    <html lang="pt-BR">
      <head />
      <body>
        {!hideHeaderFooter && <Header />}
        <main>{children}</main>
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
