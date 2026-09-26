import React from 'react';
import type { Metadata } from "next";
import { Unbounded, Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Background from "../components/Background";
import Footer from "../components/Footer";

const fontDisplay = Unbounded({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-display',
  weight: ['200', '300', '900']
});

const fontSans = Manrope({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-sans',
  weight: ['400', '600']
});

const fontAccent = Instrument_Serif({
  subsets: ["latin"],
  variable: '--font-accent',
  weight: ['400'],
  style: ['italic', 'normal']
});

export const metadata: Metadata = {
  title: "bldrn case",
  description: "Motion & Post-Production",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${fontDisplay.variable} ${fontSans.variable} ${fontAccent.variable}`}>
      <body className="bg-[#050505] text-white antialiased font-sans">
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}