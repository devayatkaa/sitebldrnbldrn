'use client';

import React, { useState } from 'react';
import { projects } from '../../data/projects';
import VideoCard from '../../components/VideoCard';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <main className="relative pt-24 md:pt-32 pb-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <h1 data-reveal className="pearl-text relative z-10 text-5xl md:text-7xl font-display font-light tracking-tighter mb-10 md:mb-16 uppercase">Работы</h1>

      <div data-reveal data-reveal-delay="80" className="relative z-10 flex gap-5 md:gap-8 mb-8 md:mb-12 border-b border-white/10 pb-4 overflow-x-auto">
        {['all', ...Array.from(new Set(projects.map(project => project.category)))].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`min-h-11 shrink-0 text-[11px] md:text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${
              filter === cat ? 'text-white underline underline-offset-8' : 'text-white/60 hover:text-white'
            }`}
          >
            {cat === 'all' ? 'Все' : cat}
          </button>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div key={project.id} data-reveal="video">
            <VideoCard project={project} />
          </div>
        ))}
      </div>

    </main>
  );
}
