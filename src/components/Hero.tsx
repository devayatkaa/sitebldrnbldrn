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
          Твой идеальный исходный код. Виден только на компьютерах.
          ============================================================ */}
      <div className="hidden md:flex min-h-screen flex-col items-center justify-center relative z-10 px-6 md:pt-20 md:pb-10 max-w-[1600px] mx-auto">
        
        {/* Водяной знак EDIT (ПК) - Ровно в центре */}
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-all duration-1000 delay-300 ${reveal}`}>
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

        {/* Звёздочки (ПК) */}
        <span className="absolute top-[18%] left-[20%] text-white/30 text-base animate-pulse">✦</span>
        <span className="absolute top-[30%] right-[22%] text-white/20 text-sm animate-pulse" style={{ animationDelay: '1s' }}>✦</span>
        <span className="absolute bottom-[15%] left-[30%] text-white/20 text-base animate-pulse" style={{ animationDelay: '2s' }}>✦</span>
        <span className="absolute bottom-[25%] right-[28%] text-white/25 text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>✦</span>
      </div>


      {/* ============================================================
          2. ВЕРСИЯ ДЛЯ МОБИЛОК (flex md:hidden)
          Специально для Андроид. Элементы подняты выше, EDIT опущен.
          ============================================================ */}
      <div className="flex md:hidden flex-col items-center px-8 pt-14 pb-10 relative z-10">
        
        {/* EDIT (Мобильный) - Опущен чуть ниже (translate-y-5) */}
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-all duration-1000 delay-300 translate-y-5 ${reveal}`}>
          <span className="font-display font-[900] text-[34vw] leading-none text-white/[0.03] uppercase tracking-tighter">
            EDIT
          </span>
        </div>

        {/* MOTION + Подпись (Мобильный) - Подняты выше за счет pt-14 */}
        <p className={`font-sans text-[8px] uppercase tracking-[0.2em] text-white/40 mb-2 transition-all duration-700 ${reveal}`}>
          bldrn — video editor
        </p>
        
        <h1 className={`relative z-10 font-display text-[12vw] font-[900] uppercase tracking-tighter leading-none text-white transition-all duration-700 delay-100 ${reveal}`}>
          MOTION
        </h1>

        {/* Объект (Мобильный) */}
        <div className={`relative flex-shrink-0 mt-4 transition-all duration-700 delay-200 ${reveal}`}>
          <div className="relative w-[190px] sm:w-[220px] aspect-square flex items-center justify-center animate-float">
            <div className="absolute inset-0 bg-[#0d2b1d] opacity-30 blur-[50px] rounded-full scale-110" />
            <img
              src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png"
              alt="Bladerunner"
              className="relative z-10 w-[92%] h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] filter brightness-[0.95] contrast-[1.08]"
            />
          </div>
        </div>

        {/* Текст (Мобильный) */}
        <div className={`flex flex-col items-center gap-2 mt-4 transition-all duration-700 delay-300 ${reveal}`}>
          <div className="h-4 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          <p className="font-display text-[15px] font-light text-white/80 text-center max-w-[250px] leading-snug">
            собираю кадры в истории, которые хочется досмотреть
          </p>
        </div>

        {/* Звёздочки (Мобильный) */}
        <span className="absolute top-[10%] left-[8%] text-white/30 text-[10px] animate-pulse">✦</span>
        <span className="absolute top-[14%] right-[10%] text-white/20 text-[8px] animate-pulse" style={{ animationDelay: '1s' }}>✦</span>
      </div>

    </section>
  );
}