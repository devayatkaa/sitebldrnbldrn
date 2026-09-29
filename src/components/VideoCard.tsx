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
    <div className={`flex flex-col gap-3 md:gap-4 group reveal-hidden transform-gpu will-change-[transform,opacity] ${delayClass}`}>
      
      <div className="relative aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl transition-all duration-700">
        <video
          src={project.videoUrl}
          poster={project.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover pointer-events-none transition-all duration-1000 grayscale-[0.2] opacity-90 group-hover:opacity-100 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 pointer-events-none bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.05] to-transparent opacity-40"></div>
      </div>
      
      {/* Подпись */}
      <div className="px-2 md:px-4 flex flex-col gap-1.5 md:gap-2">
        <div className="flex items-center gap-3">
          <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-white/50 font-semibold">
            {project.category}
          </span>
          <div className="h-[1px] flex-1 bg-white/10 self-center"></div>
        </div>
        <h3 className="font-display text-lg md:text-2xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
          {project.title}
        </h3>
      </div>
    </div>
  );
}