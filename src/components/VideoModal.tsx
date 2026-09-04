'use client';
import React, { useEffect } from 'react';

export default function VideoModal({ project, onClose }: { project: any, onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-0 md:p-12 animate-in fade-in duration-500"
      onClick={onClose}
    >
      <button 
        className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors z-[210] text-[10px] uppercase tracking-[0.4em] font-bold"
        onClick={onClose}
      >
        Close / Esc
      </button>
      
      <div className="w-full max-w-7xl aspect-video bg-black shadow-[0_0_100px_rgba(99,102,241,0.2)]" onClick={e => e.stopPropagation()}>
        <video 
          src={project.fullVideoUrl} 
          controls 
          autoPlay 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  );
}