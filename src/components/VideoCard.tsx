'use client';
import React from 'react';
interface VideoCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    videoUrl: string;
    poster: string;
  };
  delayClass?: string;
  onOpen?: (project: any) => void;
}
export default function VideoCard({ project, delayClass }: VideoCardProps) {
  return (
    /* 
      transform-gpu и transition-all гарантируют использование аппаратного ускорения.
      will-change подсказывает браузеру заранее подготовить слой для анимации.
    */
    <div className={`flex flex-col gap-5 group reveal-hidden transform-gpu will-change-[transform,opacity] ${delayClass}`}>
      
      {/* 
        aspect-video критически важен здесь: он резервирует место под 4-ю карточку,
        исключая лаг при формировании второго ряда сетки.
      */}
      <div className="relative aspect-video rounded-[32px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl transition-all duration-700">
        <video
          src={project.videoUrl}
          poster={project.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          /* pointer-events-none убирает лишние системные события при наведении */
          className="w-full h-full object-cover pointer-events-none transition-all duration-1000 grayscale-[0.2] opacity-90 group-hover:opacity-100 group-hover:grayscale-0"
        />
        
        {/* Тонкое тонирование только на видео */}
        <div className="absolute inset-0 pointer-events-none bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-700"></div>
        
        {/* Стеклянный градиент-блик */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.05] to-transparent opacity-40"></div>
      </div>
      
      {/* Подпись: всегда 100% четкость без прозрачности */}
      <div className="px-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.4em] mb-1 text-white/40 italic">
            {project.category}
          </span>
          <h3 className="text-sm font-medium tracking-tight uppercase text-white/90">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
}