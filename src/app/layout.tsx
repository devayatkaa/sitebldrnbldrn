import React from 'react';
import type { Metadata, Viewport } from "next";
import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";
import Background from "../components/Background";
import Footer from "../components/Footer";
import RevealAnimations from "../components/RevealAnimations";

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#24392f',
};

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
        <RevealAnimations />
        <noscript><style>{'[data-reveal] { opacity: 1 !important; transform: none !important; }'}</style></noscript>
      </body>
    </html>
  );
}
