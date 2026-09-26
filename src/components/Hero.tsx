'use client';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reveal = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className="relative overflow-hidden">

      {/* ============================================================
          1. ВЕРСИЯ ДЛЯ ПК
          ============================================================ */}
      <div className="hidden md:block relative z-10">
        <div className="relative flex flex-col items-center px-6 pt-16 pb-6 max-w-[1600px] mx-auto">

          <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-all duration-1000 delay-300 ${reveal}`}>
            <span className="font-display font-[900] text-[26vw] leading-none text-white/[0.025] uppercase tracking-tighter">
              EDIT
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center">

            <div className={`flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-700 ${reveal}`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/50">открыт для проектов</span>
            </div>

            <p className={`font-sans text-xs uppercase tracking-[0.4em] text-white/40 mb-1 transition-all duration-700 ${reveal}`}>
              bldrn — video editor
            </p>

            <h1 className={`font-display text-[9vw] font-[900] uppercase tracking-tighter leading-none text-white transition-all duration-700 delay-100 ${reveal}`}>
              MOTION
            </h1>

            <div className={`relative flex-shrink-0 mt-2 transition-all duration-700 delay-200 ${reveal}`}>
              <div className="relative w-[300px] lg:w-[350px] aspect-square flex items-center justify-center animate-float">
                <div className="absolute inset-0 bg-[#0d2b1d] opacity-30 blur-[70px] rounded-full scale-110" />
                <img
                  src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png"
                  alt="Bladerunner"
                  className="relative z-10 w-[92%] h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)] filter brightness-[0.95] contrast-[1.08]"
                />
              </div>
            </div>

            <div className={`flex flex-col items-center gap-4 mt-5 transition-all duration-700 delay-300 ${reveal}`}>
              <div className="h-6 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
              <p className="font-display text-2xl font-light text-white/80 text-center max-w-lg leading-snug">
                собираю кадры в истории, которые хочется досмотреть
              </p>
            </div>
          </div>

          <span className="absolute top-[18%] left-[20%] text-white/30 text-base animate-pulse">✦</span>
          <span className="absolute top-[30%] right-[22%] text-white/20 text-sm animate-pulse" style={{ animationDelay: '1s' }}>✦</span>
          <span className="absolute bottom-[15%] left-[30%] text-white/20 text-base animate-pulse" style={{ animationDelay: '2s' }}>✦</span>
          <span className="absolute bottom-[25%] right-[28%] text-white/25 text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>✦</span>
        </div>
      </div>


      {/* ============================================================
          2. ВЕРСИЯ ДЛЯ АНДРОИДА / МОБИЛОК
          ============================================================ */}
      <div className="block md:hidden relative z-10">
        <div className="flex flex-col items-center px-8 pt-20 pb-4 relative">

          <div className={`absolute top-32 pointer-events-none select-none transition-all duration-1000 delay-300 z-0 ${reveal}`}>
            <span className="font-display font-[900] text-[36vw] leading-none text-white/[0.03] uppercase tracking-tighter">
              EDIT
            </span>
          </div>

          <div className={`flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] transition-all duration-700 ${reveal}`}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
            </span>
            <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/50">открыт для проектов</span>
          </div>

          <p className={`font-sans text-[8px] uppercase tracking-[0.2em] text-white/30 mb-2 transition-all duration-700 ${reveal}`}>
            bldrn — video editor
          </p>

          <h1 className={`relative z-10 font-display text-[15vw] font-[900] uppercase tracking-tighter leading-none text-white transition-all duration-700 delay-100 ${reveal}`}>
            MOTION
          </h1>

          <div className={`relative flex-shrink-0 mt-6 transition-all duration-700 delay-200 ${reveal}`}>
            <div className="relative w-[240px] aspect-square flex items-center justify-center animate-float">
              <div className="absolute inset-0 bg-[#0d2b1d] opacity-30 blur-[50px] rounded-full scale-110" />
              <img
                src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png"
                alt="Bladerunner"
                className="relative z-10 w-[95%] h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          <div className={`flex flex-col items-center gap-3 mt-6 transition-all duration-700 delay-300 ${reveal}`}>
            <div className="h-4 w-[1px] bg-white/20" />
            <p className="font-display text-[16px] font-light text-white/90 text-center max-w-[260px] leading-tight">
              собираю кадры в истории, которые хочется досмотреть
            </p>
          </div>

          <span className="absolute top-[14%] left-[10%] text-white/20 text-[10px] animate-pulse">✦</span>
          <span className="absolute top-[25%] right-[4%] text-white/15 text-[8px] animate-pulse" style={{ animationDelay: '0.5s' }}>✦</span>
          <span className="absolute top-[55%] left-[8%] text-white/15 text-[10px] animate-pulse" style={{ animationDelay: '1.2s' }}>✦</span>
          <span className="absolute top-[80%] right-[15%] text-white/10 text-[9px] animate-pulse" style={{ animationDelay: '2.1s' }}>✦</span>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] bg-[#0d2b1d] rounded-full blur-[120px] opacity-20 -z-10" />

    </section>
  );
}