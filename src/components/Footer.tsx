'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#080808]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-white">BLDRN</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">Independent Video Editor</span>
        </div>
        
        <div className="flex gap-10">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/10">Precision</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/10">Aesthetics</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/10">Rhythm</span>
        </div>
      </div>
    </footer>
  );
}