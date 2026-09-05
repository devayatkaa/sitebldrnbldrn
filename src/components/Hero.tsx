'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-28 md:pt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 w-full relative z-10">
        
        {/* ЛЕВАЯ КОЛОНКА: ТЕКСТ */}
        <div className="reveal-hidden order-2 lg:order-1 flex flex-col items-start text-left z-20">
          <p className="text-[10px] uppercase tracking-[0.6em] text-white/30 mb-5 ml-6 font-bold">
            make video horizontal again.
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5vw] font-bold leading-[0.95] tracking-tighter uppercase italic text-white mb-8">
            Product needs design <br />
            <span className="not-italic text-white/10 uppercase">
              Design needs a good hand
            </span>
          </h1>
          
          <p className="max-w-md text-base md:text-lg text-white/40 font-light leading-relaxed">
          
          </p>
        </div>

        {/* ПРАВАЯ КОЛОНКА: ОБЪЕКТ С ЭФФЕКТАМИ ПОЗАДИ */}
        <div className="reveal-hidden delay-300 order-1 lg:order-2 flex justify-center lg:justify-end relative">
          
          <div className="relative w-full max-w-[400px] lg:max-w-[550px] flex items-center justify-center">
            
            {/* --- ЭФФЕКТЫ (СТРОГО ПОД КАРТИНКОЙ, z-0) --- */}
            
            {/* 1. Внешнее размытое пятно (Самый нижний слой) */}
            <div className="absolute inset-[-15%] rounded-full bg-[#0d2b1d]/40 blur-[100px] z-0 pointer-events-none" />

            {/* 2. Кольцевое свечение (Box-shadow, строго под картинкой) */}
            <div className="absolute inset-10 rounded-full shadow-[0_0_110px_30px_rgba(13,43,29,0.5)] z-0 pointer-events-none" />

            {/* 3. Центральный блик для глубины */}
            <div className="absolute w-full h-full bg-[#0d2b1d] opacity-20 blur-[120px] rounded-full scale-110 z-0 pointer-events-none" />


            {/* --- ИЗОБРАЖЕНИЕ (СТРОГО ПОВЕРХ ЭФФЕКТОВ, z-10) --- */}
            
            <div className="relative z-10 w-full h-full">
              <img 
                src="/images/bg-object.png" 
                alt="Visual Object" 
                className="w-full h-auto rounded-3xl opacity-90 blur-[0.3px] select-none pointer-events-none transition-all duration-[1.5s] filter brightness-[0.95] contrast-[1.05]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}