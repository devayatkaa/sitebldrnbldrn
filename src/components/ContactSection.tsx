'use client';
import React, { useState } from 'react';
import { Send, Mail, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "hello@bldrn.com"; // ЗАМЕНИТЕ НА ВАШУ ПОЧТУ

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-40 px-6 max-w-xl mx-auto">
      <div className="backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[48px] p-10 md:p-16 flex flex-col items-center shadow-2xl">
        <h2 className="text-3xl font-bold mb-12 tracking-tight text-white">Connect</h2>
         
        <div className="flex flex-col gap-4 w-full">
          {/* Telegram */}
          <a 
            href="https://t.me/yl" // ЗАМЕНИТЕ НА ВАШ ТГ
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-8 bg-white/5 hover:bg-[#229ED9]/10 border border-white/5 hover:border-[#229ED9]/30 h-20 rounded-[24px] transition-all duration-500"
          >
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-[#229ED9]/10 flex items-center justify-center text-[#229ED9]">
                <Send size={18} />
              </div>
              <span className="text-[12px] uppercase tracking-[0.15em] font-bold text-white">Telegram</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-white/30 group-hover:text-[#229ED9] transition-colors italic">@your_user</span>
          </a>

          {/* Email */}
          <div className="flex gap-2 w-full">
            <a 
              href={`mailto:${email}`}
              className="group flex-grow flex items-center justify-between px-8 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 h-20 rounded-[24px] transition-all duration-500"
            >
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <Mail size={18} />
                </div>
                <span className="text-[12px] uppercase tracking-[0.15em] font-bold text-white">Email</span>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-white/30 group-hover:text-white transition-colors italic">Send Mail</span>
            </a>

            {/* Кнопка копирования */}
            <button 
              onClick={handleCopy}
              className="w-20 h-20 bg-white/5 border border-white/5 rounded-[24px] flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-all text-white/40 hover:text-white"
            >
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
              <span className="text-[9px] uppercase tracking-tighter">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}