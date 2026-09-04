'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Send, Mail, ChevronDown, Copy, Check } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "hello@bldrn.com";
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрытие по клику вне и Escape
  useEffect(() => {
    const handleEvents = (e: any) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleEvents);
    document.addEventListener('keydown', handleEvents);
    return () => {
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

  return (
    <header className="fixed top-8 left-0 w-full z-[150] px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between relative" ref={dropdownRef}>
        
        {/* Логотип */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[22px] px-7 h-14 flex items-center shadow-2xl">
          <Link href="/" className="text-lg font-bold tracking-[0.3em] uppercase text-white hover:text-white/70 transition-colors">BLDRN</Link>
        </div>

        {/* Кнопка-переключатель */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`backdrop-blur-2xl border transition-all duration-500 rounded-[22px] px-7 h-14 flex items-center gap-4 uppercase text-[10px] tracking-[0.2em] font-bold shadow-2xl
              ${isOpen ? 'bg-white text-black border-white' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
          >
            Contact
            <ChevronDown 
              size={14} 
              className={`transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180 opacity-100' : 'opacity-40'}`} 
            />
          </button>

          {/* Стеклянный Dropdown */}
          {isOpen && (
            <div className="absolute top-[72px] right-0 w-72 backdrop-blur-3xl bg-[#080808]/90 border border-white/10 rounded-[32px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-2 zoom-in-95 duration-300 origin-top-right">
              <div className="flex flex-col gap-3 items-center">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 text-center mb-1 font-bold">Channels</p>
                
                {/* Telegram */}
                <a 
                  href="https://t.me/your_user" 
                  target="_blank" 
                  className="w-full flex items-center justify-center gap-4 h-14 rounded-2xl bg-white/5 hover:bg-[#229ED9]/10 hover:text-[#229ED9] transition-all group"
                >
                  <Send size={16} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Telegram</span>
                </a>
                
                {/* Email Group */}
                <div className="flex gap-2 w-full">
                  <a 
                    href={`mailto:${email}`} 
                    className="flex-grow flex items-center justify-center gap-4 h-14 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all"
                  >
                    <Mail size={16} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Mail</span>
                  </a>
                  <button 
                    onClick={handleCopy} 
                    className="w-14 h-14 flex flex-col items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all gap-1"
                  >
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    <span className="text-[6px] uppercase">{copied ? 'OK' : 'Copy'}</span>
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