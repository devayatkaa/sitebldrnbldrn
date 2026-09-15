'use client';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reveal = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className="relative overflow-hidden pt-20 md:pt-0">
      
      {/* Мягкий фон */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] bg-[#0d2b1d] rounded-full blur-[120px] opacity-20" />
      </div>

      {/* 
          ГЛАВНЫЙ КОНТЕЙНЕР
          На мобилках убрали min-h, чтобы секция сжалась и видео подтянулось вверх.
      */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-10 md:pt-20 md:min-h-screen justify-center max-w-[1600px] mx-auto">
        
        {/* 1. ВЕРХНЯЯ ПОДПИСЬ */}
        <p className={`font-sans text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/30 mb-2 md:mb-4 text-center transition-all duration-700 ${reveal}`}>
          bldrn — video editor
        </p>

        {/* 
           2. ЦЕНТРАЛЬНЫЙ БЛОК (EDIT + MOTION + КОТ)
           Мы объединяем их в одну "коробку", чтобы композиция была монолитной
        */}
        <div className="relative flex flex-col items-center w-full">
          
          {/* 
              EDIT (Фоновое слово)
              На мобилке: top-[-10px] — всегда приклеен к верху MOTION.
              На ПК (md): top-1/2 -translate-y-1/2 — ровно в центре, как и было.
          */}
          <div className={`absolute top-[-10px] md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 pointer-events-none select-none transition-all duration-1000 delay-300 z-0 ${reveal}`}>
            <span className="font-display font-[900] text-[36vw] md:text-[26vw] leading-none text-white/[0.03] md:text-white/[0.025] uppercase tracking-tighter">
              EDIT
            </span>
          </div>

          {/* MOTION (Главное слово) */}
          <h1 className={`relative z-10 font-display text-[15vw] md:text-[9vw] font-[900] uppercase tracking-tighter leading-none text-white transition-all duration-700 delay-100 ${reveal}`}>
            MOTION
          </h1>

          {/* КОТ (Объект) */}
          <div className={`relative z-20 -mt-4 md:mt-2 transition-all duration-700 delay-200 ${reveal}`}>
            <div className="relative w-[250px] sm:w-[270px] md:w-[320px] lg:w-[380px] aspect-square flex items-center justify-center animate-float">
              <div className="absolute inset-0 bg-[#0d2b1d] opacity-30 blur-[50px] md:blur-[70px] rounded-full scale-110" />
              <img
                src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png"
                alt="Bladerunner"
                className="relative z-10 w-[95%] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-[0.95] contrast-[1.08]"
              />
            </div>
          </div>
        </div>

        {/* 3. ТЕКСТ ПРО КАДРЫ */}
        <div className={`relative z-30 flex flex-col items-center gap-2 md:gap-4 mt-6 md:mt-10 transition-all duration-700 delay-300 ${reveal}`}>
          <div className="h-4 md:h-6 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          <p className="font-display text-[16px] md:text-2xl font-light text-white/70 text-center max-w-[260px] md:max-w-lg leading-tight">
            собираю кадры в истории, которые хочется досмотреть
          </p>
        </div>

      </div>

      {/* ЗВЕЗДЫ */}
      <span className="absolute top-[20%] right-[10%] text-white/10 text-[8px] animate-pulse">✦</span>
      <span className="absolute top-[15%] left-[10%] text-white/20 text-[10px] animate-pulse hidden md:block">✦</span>

    </section>
  );
}