'use client';

import React, { useState } from 'react';
import { projects } from '../../data/projects';
import VideoCard from '../../components/VideoCard';
import VideoModal from '../../components/VideoModal';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-16 uppercase">Работы</h1>
      
      <div className="flex gap-8 mb-12 border-b border-white/5 pb-8 overflow-x-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <VideoCard 
            key={project.id} 
            project={project} 
            onOpen={setSelectedProject} 
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
}