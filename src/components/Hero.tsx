'use client';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reveal = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className="relative overflow-hidden min-h-[75vh] md:min-h-0">

      {/* Водяной знак EDIT — на мобилах top-[30%], чтобы залез под MOTION */}
      <div className={`absolute top-[30%] md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 pointer-events-none select-none transition-all duration-1000 delay-300 ${reveal}`}>
        <span className="font-display font-[900] text-[34vw] md:text-[26vw] leading-none text-white/[0.03] md:text-white/[0.025] uppercase tracking-tighter">
          EDIT
        </span>
      </div>

      {/* Мелкие звёздочки-декор */}
      <span className="absolute top-[12%] left-[8%] md:top-[18%] md:left-[20%] text-white/30 text-[10px] md:text-base pointer-events-none select-none animate-pulse">✦</span>
      <span className="absolute top-[15%] right-[10%] md:top-[30%] md:right-[22%] text-white/20 text-[8px] md:text-sm pointer-events-none select-none animate-pulse" style={{ animationDelay: '1s' }}>✦</span>
      <span className="absolute bottom-[25%] left-[10%] md:bottom-[15%] md:left-[30%] text-white/20 text-[10px] md:text-base pointer-events-none select-none animate-pulse" style={{ animationDelay: '2s' }}>✦</span>

      <div className="relative z-10 flex flex-col items-center px-8 pt-20 pb-4 md:px-6 md:pt-20 md:pb-10">

        {/* Верхняя подпись */}
        <p className={`font-sans text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/40 mb-1 md:mb-1 text-center transition-all duration-700 ${reveal}`}>
          bldrn — video editor
        </p>

        {/* MOTION */}
        <h1 className={`font-display text-[12vw] md:text-[9vw] font-[900] uppercase tracking-tighter leading-none text-white transition-all duration-700 delay-100 ${reveal}`}>
          MOTION
        </h1>

        {/* Объект (Кот) — стал больше (w-210) и mt-8 для баланса */}
        <div className={`relative flex-shrink-0 mt-8 md:mt-2 transition-all duration-700 delay-200 ${reveal}`}>
          <div className="relative w-[210px] sm:w-[230px] md:w-[320px] lg:w-[380px] aspect-square flex items-center justify-center animate-float">
            <div className="absolute inset-0 bg-[#0d2b1d] opacity-30 blur-[50px] md:blur-[70px] rounded-full scale-110" />
            <img
              src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png"
              alt="Bladerunner"
              className="relative z-10 w-[95%] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] md:drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)] filter brightness-[0.95] contrast-[1.08]"
            />
          </div>
        </div>

        {/* Нижний текст — mt-10, чтобы сократить дыру */}
        <div className={`flex flex-col items-center gap-2 md:gap-4 mt-10 md:mt-6 transition-all duration-700 delay-300 ${reveal}`}>
          <div className="h-4 md:h-6 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          <p className="font-display text-[14px] md:text-2xl font-light text-white/70 text-center max-w-[240px] md:max-w-lg leading-tight">
            собираю кадры в истории, которые хочется досмотреть
          </p>
        </div>

      </div>
    </section>
  );
}