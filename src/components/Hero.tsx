'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-48 pb-20 px-6 flex flex-col items-center text-center animate-reveal">
      <div className="max-w-3xl">
        {/* Вариант 1: Rhythm in Frame / Precision in Motion */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
          Rhythm in Frame <br /> Precision in Motion
        </h1>
        <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-xl mx-auto">
          Независимый видеомонтаж для тех, кто ищет идеальный баланс между визуальным стилем и динамикой повествования.
        </p>
      </div>
    </section>
  );
}