'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[70vh] flex items-center pt-24 md:pt-32 lg:pt-28 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-20 w-full relative z-10">
        
        {/* ПРАВАЯ КОЛОНКА (ОБЪЕКТ) - На мобильном сверху */}
        <div className="reveal-hidden delay-300 order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[240px] md:max-w-[400px] lg:max-w-[550px] flex items-center justify-center">
            
            {/* ЭФФЕКТЫ СВЕЧЕНИЯ */}
            <div 
              className="absolute inset-[-30%] rounded-full opacity-30 blur-[60px] z-0 pointer-events-none" 
              style={{ background: 'radial-gradient(circle, rgba(13,43,29,0.8) 0%, rgba(13,43,29,0) 70%)' }}
            />
            <div 
              className="absolute inset-[-10%] rounded-full opacity-40 blur-[40px] z-0 pointer-events-none" 
              style={{ background: 'radial-gradient(circle, rgba(13,43,29,1) 0%, rgba(13,43,29,0) 60%)' }}
            />

            {/* ИЗОБРАЖЕНИЕ */}
            <div className="relative z-10 w-full">
              <img 
                src="/images/bg-object.png" 
                alt="Visual Object" 
                className="w-full h-auto rounded-2xl md:rounded-3xl opacity-90 blur-[0.3px] select-none pointer-events-none transition-all duration-[1.5s] filter brightness-[0.95] contrast-[1.05]"
              />
            </div>
          </div>
        </div>

        {/* ЛЕВАЯ КОЛОНКА (ТЕКСТ) - На мобильном снизу */}
        <div className="reveal-hidden order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/30 mt-8 lg:mt-0 mb-4 md:mb-5 lg:ml-6 font-bold">
            make video horizontal again.
          </p>
          
          <h1 className="text-4xl md:text-7xl lg:text-[5.5vw] font-bold leading-[1.1] lg:leading-[0.95] tracking-tighter uppercase italic text-white mb-6 md:mb-8">
            Product needs design <br className="hidden md:block" />
            <span className="not-italic text-white/10 uppercase">
              Design needs a good hand
            </span>
          </h1>
          
          <p className="max-w-md text-sm md:text-base lg:text-lg text-white/40 font-light leading-relaxed">
     
          </p>
        </div>

      </div>
    </section>
  );
}