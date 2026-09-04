'use client';
import React from 'react';

interface VideoCardProps {
  project: any;
  onOpen?: (project: any) => void;
}

export default function VideoCard({ project, onOpen }: VideoCardProps) {
  return (
    <div className="flex flex-col gap-5 animate-reveal">
      {/* 
        Обертка-контейнер. Именно она теперь ловит клик, 
        так как само видео "прозрачно" для кликов и наведений.
      */}
      <div
        className="relative aspect-video rounded-[32px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl cursor-default transition-all duration-700 hover:border-white/20"
        onClick={() => onOpen?.(project)}
      >
        <video
          src={project.videoUrl}
          poster={project.poster}
          autoPlay
          muted
          loop
          playsInline
          // Эти атрибуты — стандартная попытка скрыть меню
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
          // pointer-events-none — ГЛАВНЫЙ ФИКС: отключает реакцию видео на мышь,
          // поэтому кнопка "Картинка в картинке" и меню не могут появиться.
          className="w-full h-full object-cover pointer-events-none"
        />
        
        {/* 
          Стеклянный слой-блик. 
          Он лежит ПОВЕРХ видео и дополнительно блокирует доступ к нему.
        */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40"></div>
      </div>
      
      {/* Подпись под видео */}
      <div className="px-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-1">
            {project.category}
          </span>
          <h3 className="text-sm font-medium text-white/80 tracking-tight">
            {project.title}
          </h3>
        </div>
        <div className="h-px w-8 bg-white/10"></div>
      </div>
    </div>
  );
}