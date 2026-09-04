'use client';
import React from 'react';

export default function VideoCard({ project }: { project: any }) {
  return (
    <div className="flex flex-col gap-5 animate-reveal">
      {/* Стеклянная карточка */}
      <div className="relative aspect-video rounded-[32px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
        <video 
          src={project.videoUrl} 
          poster={project.poster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Стеклянный блик поверх видео */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
      </div>
      
      {/* Подпись */}
      <div className="px-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-1">{project.category}</span>
          <h3 className="text-sm font-medium text-white/80 tracking-tight">{project.title}</h3>
        </div>
      </div>
    </div>
  );
}