import React from 'react';
import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";
import Background from "../components/Background";
import Footer from "../components/Footer";

const fontDisplay = Unbounded({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-display',
  weight: ['200', '300', '900'] // Добавили 200 для изящности
});

const fontSans = Manrope({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-sans',
  weight: ['400', '600']
});

export const metadata: Metadata = {
  title: "bldrn case",
  description: "Motion & Post-Production",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <body className="bg-[#050505] text-white antialiased font-sans">
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}