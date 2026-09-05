'use client';
import React, { useState } from 'react';
import { User, Mail, Send, Copy, Check } from 'lucide-react';

export default function AboutMe({ lang = 'RU' }: { lang?: 'RU' | 'EN' }) {
  const [copied, setCopied] = useState(false);
  
  const email = "notbladerunnnerr@gmail.com";
  const telegram = "https://t.me/bladerunnnerr";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto scroll-mt-32">
      <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[32px] md:rounded-[48px] p-6 md:p-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 shadow-2xl relative">
        
        {/* АВАТАРКА - Адаптивный размер */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/10 bg-white/5 flex items-center justify-center relative shadow-inner">
            <img 
              src="/images/profile.png" 
              alt="Avatar"
              className="w-full h-full object-cover opacity-90"
            />
            <User size={40} className="text-white/5 absolute -z-10 md:hidden" />
            <User size={64} className="text-white/5 absolute -z-10 hidden md:block" />
          </div>
        </div>

        {/* ТЕКСТ - Центрирование на мобильных */}
        <div className="flex-grow space-y-6 md:space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <span className="inline-block px-4 py-1 backdrop-blur-md bg-white/10 border border-white/10 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
              {lang === 'RU' ? 'обо мне' : 'about me'}
            </span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
              {lang === 'RU' ? 'Я' : "I'm"} <span className="italic font-light text-white/60">Bladerunner</span>
            </h2>
            <p className="max-w-2xl text-base md:text-2xl text-white/40 font-light leading-relaxed">
              {lang === 'RU' 
                ? "Работаю в разных сферах с разными авторами, основное направление развлекательный контент"
                : "I specialize in dense, structured storytelling. My approach is a focus on clarity, rhythm, and intention."
              }
            </p>
          </div>

          {/* КОНТАКТЫ */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-2">
            <a 
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 md:gap-4 px-6 md:px-8 h-12 md:h-16 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:bg-[#229ED9]/10 transition-all duration-500 shadow-xl"
            >
              <Send size={18} className="text-[#229ED9]" />
              <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-white/90">Telegram</span>
            </a>

            <div className="flex items-center gap-2">
              <a 
                href={`mailto:${email}`}
                className="group flex items-center gap-3 md:gap-4 px-6 md:px-8 h-12 md:h-16 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-500 shadow-xl"
              >
                <Mail size={18} className="text-white/40 group-hover:text-white transition-colors" />
                <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-white/90">Email</span>
              </a>
              
              <button 
                onClick={handleCopy}
                className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 group shadow-xl relative"
              >
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-white/20" />}
                {copied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[8px] font-bold rounded uppercase animate-in fade-in slide-in-from-bottom-2">
                    {lang === 'RU' ? 'Готово' : 'Copied'}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}