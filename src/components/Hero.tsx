'use client';
import React from 'react';

export default function Hero() {
  return (
    /* 
       min-h-[50vh] на мобильных гарантирует, что видео-сетка будет видна.
       pt-20 (мобильный) / pt-32 (десктоп) для баланса с Header.
    */
    <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center pt-20 md:pt-32 lg:pt-28 pb-4 md:pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-20 w-full relative z-10">
        
        {/* ПРАВАЯ КОЛОНКА (ОБЪЕКТ) */}
        <div className="reveal-hidden delay-300 order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[180px] sm:max-w-[200px] md:max-w-[400px] lg:max-w-[550px] flex items-center justify-center">
            
            {/* ЭФФЕКТЫ СВЕЧЕНИЯ */}
            <div 
              className="absolute inset-[-30%] rounded-full opacity-30 blur-[40px] md:blur-[60px] z-0 pointer-events-none scale-75 md:scale-100" 
              style={{ background: 'radial-gradient(circle, rgba(13,43,29,0.8) 0%, rgba(13,43,29,0) 70%)' }}
            />
            <div 
              className="absolute inset-[-10%] rounded-full opacity-40 blur-[30px] md:blur-[40px] z-0 pointer-events-none scale-75 md:scale-100" 
              style={{ background: 'radial-gradient(circle, rgba(13,43,29,1) 0%, rgba(13,43,29,0) 60%)' }}
            />

            {/* ИЗОБРАЖЕНИЕ */}
            <div className="relative z-10 w-full">
              <img 
                src="/images/bg-object.png" 
                alt="Visual Object" 
                className="w-full h-auto rounded-xl md:rounded-3xl opacity-90 blur-[0.3px] select-none pointer-events-none transition-all duration-[1.5s] filter brightness-[0.95] contrast-[1.05]"
              />
            </div>
          </div>
        </div>

        {/* ЛЕВАЯ КОЛОНКА (ТЕКСТ) */}
        <div className="reveal-hidden order-2 lg:order-1 flex flex-col items-start text-left z-20">
          {/* Caption теперь строго выровнен по левому краю без ml-6 */}
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/30 mb-4 md:mb-5 font-bold">
            make video horizontal again.
          </p>
          
          {/* 
              ЗАГОЛОВОК:
              leading-tight (на мобильном) предотвращает наслоение букв.
              mt-1 (на мобильном) для span создает четкий вертикальный стек без пересечений.
          */}
          <h1 className="text-[26px] sm:text-[30px] md:text-7xl lg:text-[5.5vw] font-bold leading-tight md:leading-[0.95] tracking-tighter uppercase italic text-white">
            Product needs design
            
            <span className="block mt-1 md:mt-0 not-italic text-white/10 uppercase break-words w-full">
              Design needs a good hand
            </span>
          </h1>
        </div>

      </div>
    </section>
  );
}