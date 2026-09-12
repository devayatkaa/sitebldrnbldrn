'use client';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reveal = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className="relative overflow-hidden">

      {/* Водяной знак позади композиции */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-all duration-1000 delay-300 ${reveal}`}>
        <span className="font-display font-[900] text-[26vw] leading-none text-white/[0.025] uppercase tracking-tighter">
          EDIT
        </span>
      </div>

      {/* Мелкие звёздочки-декор */}
      <span className="absolute top-[18%] left-[12%] md:left-[20%] text-white/30 text-xs md:text-base pointer-events-none select-none animate-pulse">✦</span>
      <span className="absolute top-[30%] right-[10%] md:right-[22%] text-white/20 text-[10px] md:text-sm pointer-events-none select-none animate-pulse" style={{ animationDelay: '1s' }}>✦</span>
      <span className="absolute bottom-[15%] left-[20%] md:left-[30%] text-white/20 text-xs md:text-base pointer-events-none select-none animate-pulse" style={{ animationDelay: '2s' }}>✦</span>
      <span className="absolute bottom-[25%] right-[15%] md:right-[28%] text-white/25 text-[10px] md:text-sm pointer-events-none select-none animate-pulse" style={{ animationDelay: '0.5s' }}>✦</span>

      <div className="relative z-10 flex flex-col items-center px-6 pt-14 pb-6 md:pt-20 md:pb-10">

        {/* Верхняя подпись */}
        <p className={`font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/40 mb-1 text-center transition-all duration-700 ${reveal}`}>
          bldrn — video editor
        </p>

        {/* Объект и MOTION */}
        <div className="flex items-center justify-center gap-1 md:flex-col md:gap-0">

          <h1 className={`font-display text-[15vw] md:text-[9vw] font-[900] uppercase tracking-tighter leading-none text-white transition-all duration-700 delay-100 ${reveal} md:order-1`}>
            MOTION
          </h1>

          <div className={`relative flex-shrink-0 transition-all duration-700 delay-200 ${reveal} md:order-2 md:mt-2`}>
            <div className="relative w-[90px] sm:w-[130px] md:w-[320px] lg:w-[380px] aspect-square flex items-center justify-center animate-float">
              <div className="absolute inset-0 bg-[#0d2b1d] opacity-30 blur-[40px] md:blur-[70px] rounded-full scale-110" />
              <img
                src="/images/bg-object.png"
                alt="Bladerunner"
                className="relative z-10 w-[92%] h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)] filter brightness-[0.95] contrast-[1.08]"
              />
            </div>
          </div>
        </div>

        {/* Нижний текст */}
        <div className={`flex flex-col items-center gap-2 md:gap-4 mt-1 md:mt-6 transition-all duration-700 delay-300 ${reveal}`}>
          <div className="h-3 md:h-6 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          <p className="font-display text-sm md:text-2xl font-light text-white/80 text-center max-w-[260px] md:max-w-lg leading-snug">
            собираю кадры в истории, которые хочется досмотреть
          </p>
        </div>

      </div>
    </section>
  );
}