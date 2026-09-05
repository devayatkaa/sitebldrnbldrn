'use client';
import React from 'react';

export default function Hero() {
  return (
    /* 
       На уровне секции добавляем max-w-full, чтобы она сама не могла стать шире 100% 
    */
    <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center pt-20 md:pt-32 lg:pt-28 pb-4 md:pb-12 px-6 md:px-12 lg:px-24 overflow-x-hidden md:overflow-visible max-w-full">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-20 w-full relative z-10">
        
        {/* ПРАВАЯ КОЛОНКА (ОБЪЕКТ) */}
        <div className="reveal-hidden delay-300 order-1 lg:order-2 flex justify-center lg:justify-end relative w-full">
          
          {/* 
              МАСКА-КОКОН: 
              На мобильном (база) она имеет overflow-hidden и жесткий max-w-[100vw].
              Это физически "отрезает" всё, что выходит за границы экрана.
              На десктопе md:overflow-visible отключает обрезку для мягких теней.
          */}
          <div className="relative w-full max-w-[100vw] overflow-hidden md:overflow-visible flex justify-center items-center py-10 md:py-0">
            
            <div className="relative w-full max-w-[220px] sm:max-w-[240px] md:max-w-[400px] lg:max-w-[550px] mt-4 md:mt-0 flex items-center justify-center scale-125 md:scale-100 transform-gpu">
              
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
        </div>

        {/* ЛЕВАЯ КОЛОНКА (ТЕКСТ) */}
        <div className="reveal-hidden order-2 lg:order-1 flex flex-col items-start text-left z-20 -mt-10 md:mt-0">
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/30 ml-[2px] lg:ml-6 mb-4 md:mb-5 font-bold">
            make video horizontal again.
          </p>
          
          <div className="flex flex-col items-start">
            <h1 className="text-[26px] sm:text-[30px] md:text-7xl lg:text-[5.5vw] font-bold leading-none md:leading-[0.95] tracking-tighter uppercase italic text-white">
              Product needs design
            </h1>
            
            <span className="block text-[19px] sm:text-[22px] md:text-7xl lg:text-[5.5vw] font-bold leading-none md:leading-[0.95] tracking-tighter uppercase mt-0.5 md:mt-0 not-italic text-white/10 whitespace-nowrap md:whitespace-normal">
              Design needs a good hand
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * САМОПРОВЕРКА (Debug):
 * Если скролл остался, временно добавь в консоль браузера или в globals.css (на 10 секунд):
 * * { outline: 1px solid red !important; }
 * Это подсветит красным границы всех блоков. Тот блок, чья красная рамка 
 * шире основной черной области — и есть виновник.
 */