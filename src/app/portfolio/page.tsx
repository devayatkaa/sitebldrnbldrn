'use client';

import React, { useState } from 'react';
import { projects } from '../../data/projects';
import VideoCard from '../../components/VideoCard';
import VideoModal from '../../components/VideoModal';
import Background from '../../components/Background';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <main className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <Background />
      <h1 className="relative z-10 text-5xl md:text-7xl font-extralight tracking-tighter mb-16 uppercase">Работы</h1>

      <div className="relative z-10 flex gap-8 mb-12 border-b border-white/5 pb-8 overflow-x-auto">
        {['all', 'commercial', 'music', 'vlog'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${
              filter === cat ? 'text-white underline underline-offset-8' : 'text-neutral-600'
            }`}
          >
            {cat === 'all' ? 'Все' : cat}
          </button>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <VideoCard
            key={project.id}
            project={project}
            onOpen={setSelectedProject}
            delayClass={`delay-[${(i + 1) * 150}ms]`}
          />
        ))}
      </div>

      {selectedProject && (
        <VideoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}ы