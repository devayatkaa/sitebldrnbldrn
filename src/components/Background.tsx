'use client';
import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none bg-[#050505]">
      {/* Плавный многоступенчатый радиальный градиент */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, #0d2b1d 0%, #0a1f16 25%, #07130e 50%, #050505 100%)'
        }}
      />

      {/* Слой цифрового шума для устранения цветовых полос (Dithering) */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Дополнительный затемняющий слой для глубины нижних секций */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_bottom,transparent_0%,#000_100%)]" />
    </div>
  );
}