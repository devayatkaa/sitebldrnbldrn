'use client';

import React, { useState } from 'react';
import { User, Mail, Send, Copy, Check } from 'lucide-react';

type AboutMeProps = {
  lang?: 'RU' | 'EN';
};

export default function AboutMe({ lang = 'RU' }: AboutMeProps) {
  const [copied, setCopied] = useState(false);

  const email = 'notbladerunnnerr@gmail.com';
  const telegram = 'https://t.me/bladerunnnerr';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  return (
    <section
      id="about"
      className="py-16 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto scroll-mt-32"
    >
      <div className="relative overflow-hidden rounded-[32px] md:rounded-[48px] border border-white/[0.08] bg-[#11141a]/90 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

        {/* Green glow */}
        <div
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#1a1030] opacity-40 blur-[80px] pointer-events-none"
        />

        {/* Subtle highlight */}
        <div
          className="absolute inset-0 rounded-[32px] md:rounded-[48px] border border-white/[0.04] pointer-events-none"
        />

        <div className="relative flex flex-col items-center gap-8 p-6 md:gap-12 md:p-16 lg:flex-row lg:items-start">

          {/* Avatar */}
          <div className="relative z-10 flex-shrink-0">
            <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(30,140,90,0.15)] md:h-44 md:w-44">

              <img
                src="/images/profile.png"
                alt="Avatar"
                className="h-full w-full object-cover opacity-90"
              />

              <User
                size={40}
                className="absolute -z-10 text-white/5 md:hidden"
              />

              <User
                size={64}
                className="absolute -z-10 hidden text-white/5 md:block"
              />

            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-grow flex-col items-center space-y-6 text-center md:space-y-10 lg:items-start lg:text-left">

            {/* Text */}
            <div className="space-y-4 md:space-y-6">

              <span className="inline-block rounded-full border border-white/10 bg-white/[0.08] px-4 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-white/50 md:text-[10px]">
                {lang === 'RU' ? 'обо мне' : 'about me'}
              </span>

              <h2 className="text-4xl font-bold tracking-tighter text-white md:text-7xl">
                {lang === 'RU' ? 'Я' : "I'm"}{' '}
                <span className="font-light italic text-white/60">
                  Bladerunner
                </span>
              </h2>

              <p className="max-w-2xl text-base font-light leading-relaxed text-white/40 md:text-2xl">
                {lang === 'RU'
                  ? 'Работаю в разных сферах с разными авторами, основное направление развлекательный контент'
                  : 'I specialize in dense, structured storytelling. My approach is a focus on clarity, rhythm, and intention.'}
              </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-3 pt-2 md:gap-4 lg:justify-start">

              {/* Telegram */}
              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-6 shadow-xl transition-colors duration-300 hover:border-[#229ED9]/30 hover:bg-[#229ED9]/10 md:h-16 md:gap-4 md:px-8"
              >
                <Send
                  size={18}
                  className="text-[#229ED9]"
                />

                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 md:text-[11px]">
                  Telegram
                </span>
              </a>

              {/* Email */}
              <div className="flex items-center gap-2">

                <a
                  href={'mailto:' + email}
                  className="group flex h-12 items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-6 shadow-xl transition-colors duration-300 hover:bg-white/10 md:h-16 md:gap-4"
                >
                  <Mail
                    size={18}
                    className="text-white/40 transition-colors group-hover:text-white"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 md:text-[11px]">
                    Email
                  </span>
                </a>

                {/* Copy email */}
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={
                    lang === 'RU'
                      ? 'Скопировать email'
                      : 'Copy email'
                  }
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-xl transition-colors duration-300 hover:bg-white/10 md:h-16 md:w-16"
                >
                  {copied ? (
                    <Check
                      size={18}
                      className="text-green-400"
                    />
                  ) : (
                    <Copy
                      size={18}
                      className="text-white/20"
                    />
                  )}
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}