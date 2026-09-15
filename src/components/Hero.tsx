'use client';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reveal = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className="relative overflow-hidden">
      
      {/* ============================================================
          1. ВЕРСИЯ ДЛЯ ПК (md:flex)
          Отображается только на экранах шире 768px. 
          Это твой "тот самый" первый рабочий код.
          ============================================================ */}
      <div className="hidden md:flex min-h-screen flex-col items-center justify-center relative z-10 px-6 max-w-[1600px] mx-auto">
        
        {/* EDIT (ПК) */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none transition-all duration-1000 delay-300 z-0 ${reveal}`}>
          <span className="font-display font-[900] text-[26vw] leading-none text-white/[0.025] uppercase tracking-tighter">
            EDIT
          </span>
        </div>

        {/* Контент (ПК) */}
        <div className="relative z-10 flex flex-col items-center">
          <p className={`font-sans text-xs uppercase tracking-[0.4em] text-white/40 mb-1 transition-all duration-700 ${reveal}`}>
            bldrn — video editor
          </p>
          
          <h1 className={`font-display text-[9vw] font-[900] uppercase tracking-tighter leading-none text-white transition-all duration-700 delay-100 ${reveal}`}>
            MOTION
          </h1>

          <div className={`relative flex-shrink-0 mt-2 transition-all duration-700 delay-200 ${reveal}`}>
            <div className="relative w-[320px] lg:w-[380px] aspect-square flex items-center justify-center animate-float">
              <div className="absolute inset-0 bg-[#0d2b1d] opacity-30 blur-[70px] rounded-full scale-110" />
              <img
                src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png"
                alt="Bladerunner"
                className="relative z-10 w-[92%] h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)] filter brightness-[0.95] contrast-[1.08]"
              />
            </div>
          </div>

          <div className={`flex flex-col items-center gap-4 mt-6 transition-all duration-700 delay-300 ${reveal}`}>
            <div className="h-6 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
            <p className="font-display text-2xl font-light text-white/80 text-center max-w-lg leading-snug">
              собираю кадры в истории, которые хочется досмотреть
            </p>
          </div>
        </div>
      </div>


      {/* ============================================================
          2. ВЕРСИЯ ДЛЯ МОБИЛОК (flex md:hidden)
          Спроектирована специально под Андроид/iOS. 
          Никаких процентов высоты, только стабильный поток.
          ============================================================ */}
      <div className="flex md:hidden flex-col items-center pt-28 pb-12 px-8 relative z-10">
        
        {/* EDIT на фоне (Мобильный) — прижат к MOTION */}
        <div className={`absolute top-36 pointer-events-none select-none transition-all duration-1000 delay-300 z-0 ${reveal}`}>
          <span className="font-display font-[900] text-[36vw] leading-none text-white/[0.03] uppercase tracking-tighter">
            EDIT
          </span>
        </div>

        {/* MOTION (Мобильный) */}
        <p className={`font-sans text-[8px] uppercase tracking-[0.2em] text-white/30 mb-2 transition-all duration-700 ${reveal}`}>
          bldrn — video editor
        </p>
        
        <h1 className={`relative z-10 font-display text-[15vw] font-[900] uppercase tracking-tighter leading-none text-white transition-all duration-700 delay-100 ${reveal}`}>
          MOTION
        </h1>

        {/* КОТ (Мобильный) */}
        <div className={`relative mt-6 transition-all duration-700 delay-200 ${reveal}`}>
          <div className="relative w-[240px] aspect-square flex items-center justify-center animate-float">
            <div className="absolute inset-0 bg-[#0d2b1d] opacity-30 blur-[50px] rounded-full scale-110" />
            <img
              src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png"
              alt="Bladerunner"
              className="relative z-10 w-[95%] h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* ТЕКСТ (Мобильный) */}
        <div className={`flex flex-col items-center gap-3 mt-6 transition-all duration-700 delay-300 ${reveal}`}>
          <div className="h-4 w-[1px] bg-white/20" />
          <p className="font-display text-[16px] font-light text-white/70 text-center max-w-[260px] leading-tight">
            собираю кадры в истории, которые хочется досмотреть
          </p>
        </div>

      </div>

      {/* Глобальное свечение фона (одинаковое для всех) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] bg-[#0d2b1d] rounded-full blur-[120px] opacity-20 -z-10" />

    </section>
  );
}