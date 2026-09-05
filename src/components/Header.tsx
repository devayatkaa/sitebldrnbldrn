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
    // Увеличенная задержка перед появлением для "дорогого" эффекта
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

  // Стили для плавного появления
  const entranceStyles = isMounted 
    ? "opacity-100 translate-y-0" 
    : "opacity-0 -translate-y-4";

  return (
    <header className="fixed top-8 left-0 w-full z-[150] px-6 md:px-12 lg:px-24 pointer-events-none">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between relative pointer-events-auto" ref={dropdownRef}>
        
        {/* ЛОГОТИП */}
        <div 
          onClick={scrollToTop}
          className={`backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[22px] px-8 h-14 flex items-center shadow-2xl cursor-pointer transition-all duration-[900ms] delay-[150ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-white/10 active:scale-95 ${entranceStyles}`}
        >
          <span className="text-lg font-bold tracking-[0.3em] uppercase text-white select-none">
            BLDRN
          </span>
        </div>

        {/* КОНТАКТЫ */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`backdrop-blur-2xl border transition-all duration-[900ms] delay-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] rounded-[22px] px-10 h-14 flex items-center gap-4 uppercase text-[10px] tracking-[0.2em] font-bold shadow-2xl hover:scale-105 active:scale-95
              ${entranceStyles}
              ${isOpen ? 'bg-white text-black border-white' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
          >
            Contact
            <ChevronDown size={14} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'opacity-40'}`} />
          </button>

          {isOpen && (
            <div className="absolute top-[72px] right-0 w-72 backdrop-blur-3xl bg-[#080808]/90 border border-white/10 rounded-[32px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-2 zoom-in-95 duration-500 origin-top-right">
              <div className="flex flex-col gap-3">
                <a href="https://t.me/bladerunnnerr" target="_blank" className="flex items-center gap-4 h-14 px-5 rounded-2xl bg-white/5 hover:bg-[#229ED9]/10 transition-all">
                  <Send size={16} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Telegram</span>
                </a>
                <div className="flex gap-2">
                  <a href={`mailto:${email}`} className="flex-grow flex items-center gap-4 h-14 px-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
                    <Mail size={16} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Mail</span>
                  </a>
                  <button onClick={handleCopy} className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all">
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}