'use client';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reveal = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className="relative overflow-hidden">

      {/* ============================================================
          1. ВЕРСИЯ ДЛЯ ПК (md:block)
          Твой оригинальный код (восстановлен на 100%)
          ============================================================ */}
      <div className="hidden md:block relative z-10">
        {/* pt-20 и pb-10 позволяют видео снизу "заглядывать" в экран */}
        <div className="relative flex flex-col items-center px-6 pt-20 pb-10 max-w-[1600px] mx-auto">
          
          {/* Водяной знак EDIT (ПК) */}
          <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-all duration-1000 delay-300 ${reveal}`}>
            <span className="font-display font-[900] text-[34vw] md:text-[26vw] leading-none text-white/[0.03] md:text-white/[0.025] uppercase tracking-tighter">
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
      </div>


      {/* ============================================================
          2. ВЕРСИЯ ДЛЯ АНДРОИДА / МОБИЛОК (block md:hidden)
          Максимально компактная, чтобы видео было видно сразу.
          ============================================================ */}
      <div className="block md:hidden relative z-10">
        <div className="flex flex-col items-center px-8 pt-10 pb-6 relative">
          
          {/* EDIT (Мобильный) — прижат к MOTION, чтобы не растягивать экран */}
          <div className={`absolute top-24 pointer-events-none select-none transition-all duration-1000 delay-300 ${reveal}`}>
            <span className="font-display font-[900] text-[38vw] leading-none text-white/[0.03] uppercase tracking-tighter">
              EDIT
            </span>
          </div>

          {/* MOTION + Подпись (Мобильный) */}
          <p className={`font-sans text-[8px] uppercase tracking-[0.2em] text-white/30 mb-1 transition-all duration-700 ${reveal}`}>
            bldrn — video editor
          </p>
          
          <h1 className={`relative z-10 font-display text-[14vw] font-[900] uppercase tracking-tighter leading-none text-white transition-all duration-700 delay-100 ${reveal}`}>
            MOTION
          </h1>

          {/* Кот (Мобильный) — уменьшен до 210px для экономии места */}
          <div className={`relative flex-shrink-0 mt-4 transition-all duration-700 delay-200 ${reveal}`}>
            <div className="relative w-[210px] aspect-square flex items-center justify-center animate-float">
              <div className="absolute inset-0 bg-[#0d2b1d] opacity-30 blur-[50px] rounded-full scale-110" />
              <img
                src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png"
                alt="Bladerunner"
                className="relative z-10 w-[95%] h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          {/* Текст (Мобильный) — подтянут выше */}
          <div className={`flex flex-col items-center gap-2 mt-4 transition-all duration-700 delay-300 ${reveal}`}>
            <div className="h-4 w-[1px] bg-white/20" />
            <p className="font-display text-[15px] font-light text-white/70 text-center max-w-[240px] leading-tight">
              собираю кадры в истории, которые хочется досмотреть
            </p>
          </div>

          {/* Звезды (Мобильный) */}
          <span className="absolute top-[12%] left-[8%] text-white/20 text-[10px] animate-pulse">✦</span>
          <span className="absolute top-[20%] right-[10%] text-white/10 text-[8px] animate-pulse" style={{ animationDelay: '1s' }}>✦</span>
        </div>
      </div>

    </section>
  );
}