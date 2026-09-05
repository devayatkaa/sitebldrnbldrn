'use client';
import React, { useState } from 'react';
import { User, Mail, Send, Copy, Check } from 'lucide-react';

export default function AboutMe({ lang }: { lang: 'RU' | 'EN' }) {
  const [copied, setCopied] = useState(false);
  
  const email = "notbladerunnnerr@gmail.com"; // ЗАМЕНИТЕ НА ВАШ АДРЕС
  const telegram = "https://t.me/bladerunnnerr"; // ЗАМЕНИТЕ НА ВАШ ТЕЛЕГРАМ

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto scroll-mt-32">
      <div className="backdrop-blur-3xl bg-white/[0.03] border border-white/10 rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row items-start gap-12 shadow-2xl relative">
        
        <div className="flex-shrink-0">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/10 bg-white/5 flex items-center justify-center relative shadow-inner">
            <img 
              src="/images/profile.png" 
              alt="Avatar"
              className="w-full h-full object-cover opacity-90"
            />
            <User size={64} className="text-white/5 absolute -z-10" />
          </div>
        </div>

        <div className="flex-grow space-y-10">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 backdrop-blur-md bg-white/10 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
              {lang === 'RU' ? 'обо мне' : 'about me'}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              {lang === 'RU' ? 'Я' : "I'm"} <span className="italic font-light text-white/60">Bladerunner</span>
            </h2>
            <p className="max-w-2xl text-xl md:text-2xl text-white/40 font-light leading-relaxed">
              {lang === 'RU' 
                ? "Работаю в разных сферах с разными авторами, основное направление развлекательный контент"
                : "I specialize in dense, structured storytelling. My approach is a focus on clarity, rhythm, and intention."
              }
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* КНОПКА TELEGRAM */}
            <a 
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 h-16 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl hover:bg-[#26A5E4]/10 hover:border-[#26A5E4]/40 transition-all duration-500 shadow-xl"
            >
              <Send size={18} className="text-[#26A5E4]" />
              <span className="text-[11px] uppercase tracking-widest font-bold text-white/90">Telegram</span>
            </a>

            {/* КНОПКА EMAIL С КОПИРОВАНИЕМ */}
            <div className="flex items-center gap-2">
              <a 
                href={`mailto:${email}`}
                className="group flex items-center gap-4 px-8 h-16 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 shadow-xl"
              >
                <Mail size={18} className="text-white/40 group-hover:text-white transition-colors" />
                <span className="text-[11px] uppercase tracking-widest font-bold text-white/90">Email</span>
              </a>
              
              <button 
                onClick={handleCopy}
                className="flex items-center justify-center w-16 h-16 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group shadow-xl relative"
                title="Copy email"
              >
                {copied ? (
                  <Check size={18} className="text-green-400" />
                ) : (
                  <Copy size={18} className="text-white/20 group-hover:text-white transition-colors" />
                )}
                {/* Всплывающая подсказка */}
                {copied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[10px] font-bold rounded uppercase tracking-tighter animate-in fade-in slide-in-from-bottom-2">
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