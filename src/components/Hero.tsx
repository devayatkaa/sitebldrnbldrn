'use client';
import React from 'react';

export default function Hero() {
  return (
    /* 
       На мобильных (ниже md): min-h-[55vh] и pt-16, чтобы блоки были максимально компактными.
       На десктопе (md и выше): сохраняем min-h-[70vh] и pt-32.
    */
    <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-center pt-16 md:pt-32 lg:pt-28 pb-4 md:pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-8 lg:gap-20 w-full relative z-10">
        
        {/* ПРАВАЯ КОЛОНКА (ОБЪЕКТ) - Уменьшен до max-w-[150px] на мобильных */}
        <div className="reveal-hidden delay-300 order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[150px] sm:max-w-[180px] md:max-w-[400px] lg:max-w-[550px] flex items-center justify-center">
            
            {/* ЭФФЕКТЫ СВЕЧЕНИЯ (Пропорционально уменьшены через scale на мобильных) */}
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
        <div className="reveal-hidden order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/30 mt-2 md:mt-0 mb-3 md:mb-5 lg:ml-6 font-bold">
            make video horizontal again.
          </p>
          
          {/* 
              ЗАГОЛОВОК:
              leading-[0.85] создает эффект наложения строк на мобильном.
              text-3xl на мобильном делает заголовок компактным.
          */}
          <h1 className="text-3xl md:text-7xl lg:text-[5.5vw] font-bold leading-[0.85] md:leading-[0.95] tracking-tighter uppercase italic text-white mb-2 md:mb-8">
            Product needs design <br />
            {/* Отрицательный margin-top (mt-[-8px]) усиливает наложение на маленьких экранах */}
            <span className="block mt-[-8px] md:mt-0 not-italic text-white/10 uppercase">
              Design needs a good hand
            </span>
          </h1>
          
          {/* ОПИСАНИЕ УДАЛЕНО ПОЛНОСТЬЮ */}
        </div>

      </div>
    </section>
  );
}