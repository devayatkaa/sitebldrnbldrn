'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Send, Mail, Copy, Check } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const email = "notbladerunnnerr@gmail.com";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 200);
    const handleEvents = (e: any) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleEvents);
    document.addEventListener('keydown', handleEvents);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleEvents);
      document.removeEventListener('keydown', handleEvents);
    };
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const entranceStyles = isMounted 
    ? "opacity-100 translate-y-0" 
    : "opacity-0 -translate-y-4";

  return (
    <header className="fixed top-4 md:top-8 left-0 w-full z-[150] px-4 md:px-12 lg:px-24 pointer-events-auto">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between relative" ref={dropdownRef}>
        
        {/* ЛОГОТИП — задержка изменена на 200ms */}
        <button 
          onClick={scrollToTop}
          className={`backdrop-blur-2xl bg-white/[0.06] border border-white/10 rounded-full px-6 md:px-9 h-12 md:h-14 flex items-center justify-center shadow-2xl transition-all duration-[900ms] delay-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-white/10 active:scale-95 cursor-pointer transform-gpu ${entranceStyles}`}
        >
          <span className="text-sm md:text-lg font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-white select-none">
            BLDRN
          </span>
        </button>

        {/* КОНТАКТЫ — задержка также 200ms для синхронности */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`backdrop-blur-2xl border transition-all duration-300 ease-out rounded-full px-6 md:px-10 h-12 md:h-14 flex items-center justify-center gap-3 md:gap-4 uppercase text-[9px] md:text-[10px] tracking-[0.2em] font-bold shadow-2xl hover:scale-105 active:scale-95
              ${entranceStyles} transition-all duration-[900ms] delay-[200ms]
              ${isOpen ? 'bg-white text-black border-white' : 'bg-white/[0.06] text-white border-white/10 hover:border-white/20'}`}
          >
            Контакты
            <ChevronDown size={14} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'opacity-40'}`} />
          </button>

          <div 
            className={`absolute top-[60px] md:top-[72px] right-0 w-64 md:w-72 backdrop-blur-3xl bg-[#0a0a0a]/95 border border-white/[0.12] rounded-[28px] md:rounded-[36px] p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] origin-top-right transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu
              ${isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
          >
            <div className="flex flex-col gap-2.5">
              <a href="https://t.me/bladerunnnerr" target="_blank" className="group flex items-center gap-4 h-14 px-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-[#229ED9]/10 hover:border-[#229ED9]/30 transition-all duration-300">
                <Send size={16} className="text-[#229ED9]" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-white">Телеграм</span>
              </a>
              <div className="flex gap-2.5">
                <a href={`mailto:${email}`} className="flex-grow flex items-center gap-4 h-14 px-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white transition-all duration-300">
                  <Mail size={16} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Почта</span>
                </a>
                <button onClick={handleCopy} className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white/40 hover:text-white transition-all duration-300">
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}