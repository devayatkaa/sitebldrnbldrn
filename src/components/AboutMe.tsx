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
      className="relative py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto scroll-mt-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <span className="ambient-star absolute left-[12%] top-5 text-sm md:top-10">✦</span>
        <span className="ambient-star absolute right-[16%] top-7 text-[10px] md:top-12">✦</span>
        <span className="ambient-star absolute bottom-3 left-[22%] text-[10px] md:bottom-8">✦</span>
        <span className="ambient-star absolute bottom-5 right-[10%] text-base md:bottom-12">✦</span>
      </div>
      <div className="surface-panel about-panel relative overflow-hidden rounded-[24px] md:rounded-[32px]">

        <div className="relative flex flex-col items-center gap-6 px-5 py-8 sm:p-8 md:gap-10 md:p-12 lg:flex-row lg:items-start">

          {/* Avatar */}
          <div data-reveal className="about-portrait relative z-10 flex-shrink-0">
            <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 md:h-44 md:w-44">

              <img
                src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/profile.png"
                alt="Avatar"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
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
          <div className="relative z-10 flex min-w-0 flex-grow flex-col items-center space-y-6 text-center md:space-y-10 lg:items-start lg:text-left">

            {/* Text */}
            <div className="space-y-4 md:space-y-6">

              <span data-reveal data-reveal-delay="60" className="inline-block rounded-full border border-white/10 bg-white/[0.08] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 md:text-[12px]">
                {lang === 'RU' ? 'BLADERUNNER' : 'about me'}
              </span>

              <h2 data-reveal data-reveal-delay="120" className="about-title font-sans font-semibold tracking-tight text-white">
                {lang === 'RU' ? 'я' : "I'm"}
                <span className="font-normal text-[#d0d1d5] ml-2">
                  Александр
                </span>
              </h2>

              <p data-reveal data-reveal-delay="180" className="max-w-[36rem] text-base font-normal leading-relaxed text-[#aeb0b8] md:text-xl">
                {lang === 'RU'
                  ? 'Работаю в разных сферах с разными авторами, основное направление развлекательный контент'
                  : 'I specialize in dense, structured storytelling. My approach is a focus on clarity, rhythm, and intention.'}
              </p>

            </div>

            <div data-reveal data-reveal-delay="240" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-white/40 lg:justify-start">
              <span className="whitespace-nowrap">After Effects</span>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span className="whitespace-nowrap">Premiere Pro</span>
            </div>

            {/* Buttons */}
            <div data-reveal data-reveal-delay="300" className="about-actions flex w-full flex-wrap justify-center gap-3 border-t border-white/[0.08] pt-6 md:gap-4 lg:justify-start">

              {/* Telegram */}
              <a
                href={telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-control group flex h-12 items-center justify-center gap-3 rounded-full px-5 transition-colors duration-300 md:h-14 md:gap-4 md:px-7"
              >
                <Send
                  size={20}
                  className="text-[#229ED9]"
                />

                <span className="text-[12px] font-semibold uppercase tracking-wider text-white/90 md:text-[13px]">
                  Телеграм
                </span>
              </a>

              {/* Email */}
              <div className="flex items-center gap-2">

                <a
                  href={'mailto:' + email}
                  className="surface-control group flex h-12 items-center justify-center gap-3 rounded-full px-5 transition-colors duration-300 md:h-14 md:gap-4"
                >
                  <Mail
                    size={20}
                    className="text-white/50 transition-colors group-hover:text-white"
                  />

                  <span className="text-[12px] font-semibold uppercase tracking-wider text-white/90 md:text-[13px]">
                    Почта
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
                  className="surface-control group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 md:h-14 md:w-14"
                >
                  {copied ? (
                    <Check
                      size={20}
                      className="text-green-400"
                    />
                  ) : (
                    <Copy
                      size={20}
                      className="text-white/30"
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
