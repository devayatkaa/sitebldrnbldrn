'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Send, Mail, Copy, Check } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const email = "notbladerunnnerr@gmail.com";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleEvents = (e: any) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('pointerdown', handleEvents);
    document.addEventListener('keydown', handleEvents);
    return () => {
      document.removeEventListener('pointerdown', handleEvents);
      document.removeEventListener('keydown', handleEvents);
    };
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <header className="site-header fixed left-0 w-full z-[150] px-4 md:px-12 lg:px-24 pointer-events-none">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between relative" ref={dropdownRef}>
        
        {/* Логотип */}
        <button 
          type="button"
          onClick={scrollToTop}
          className="header-enter surface-control pointer-events-auto rounded-full px-5 md:px-9 h-12 md:h-14 flex items-center justify-center transition-colors duration-300 ease-out cursor-pointer"
        >
          <span className="text-sm md:text-lg font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-white select-none">
            BLDRN
          </span>
        </button>

        {/* Контакты */}
        <div className="relative pointer-events-auto">
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className={`header-enter header-enter-delayed surface-control rounded-full px-5 md:px-10 h-12 md:h-14 flex items-center justify-center gap-3 md:gap-4 uppercase text-[11px] md:text-[12px] tracking-[0.15em] font-medium
              ${isOpen ? 'text-white' : 'text-white/85'}
              transition-colors duration-300 ease-out`}
          >
            Контакты
            <ChevronDown size={14} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'opacity-40'}`} />
          </button>

          <div 
            inert={!isOpen ? true : undefined}
            className={`surface-panel contact-dropdown absolute top-[60px] md:top-[72px] right-0 w-64 md:w-72 rounded-[24px] p-4 md:p-6 origin-top-right transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
          >
            <div className="flex flex-col gap-2.5">
              <a href="https://t.me/bladerunnnerr" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 h-14 px-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/20 transition-colors duration-300">
                <Send size={16} className="text-[#229ED9]" />
                <span className="text-[12px] uppercase tracking-wider font-bold text-white">Телеграм</span>
              </a>
              <div className="flex gap-2.5">
                <a href={`mailto:${email}`} className="flex-grow flex items-center gap-4 h-14 px-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white transition-all duration-300">
                  <Mail size={16} />
                  <span className="text-[12px] uppercase tracking-wider font-bold">Почта</span>
                </a>
                <button onClick={handleCopy} aria-label={copied ? 'Email скопирован' : 'Скопировать email'} className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white/40 hover:text-white transition-colors duration-300">
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
