'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 pt-12 pb-[max(3rem,env(safe-area-inset-bottom))] md:py-16">
      <div data-reveal className="text-center">
        <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-white/30 select-none">
          BLDRN © 2026
        </span>
      </div>
    </footer>
  );
}
