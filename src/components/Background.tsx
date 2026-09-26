'use client';
import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#060807]">
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 20% 10%, #1e5a38 0%, transparent 40%), radial-gradient(circle at 85% 20%, #2a1750 0%, transparent 45%), radial-gradient(circle at 75% 90%, #3a2410 0%, transparent 35%), radial-gradient(circle at 10% 80%, #0f2a1c 0%, transparent 40%), #060807'
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_bottom,transparent_0%,#000_100%)]" />
    </div>
  );
}