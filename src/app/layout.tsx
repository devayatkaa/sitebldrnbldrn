import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "../components/Background";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "bldrn case",
  description: "Портфолио",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-white`}>
        <Background />
        {children}
        {/* Это единственный вызов Футера на весь проект */}
        <Footer />
      </body>
    </html>
  );
}