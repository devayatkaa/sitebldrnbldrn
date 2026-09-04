'use client';
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import ContactSection from '../components/ContactSection';
// Footer отсюда убран, так как он теперь в layout.tsx
import { projects } from '../data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <div className="glass-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <Header />
      <Hero />
      
      <section className="px-6 max-w-[1400px] mx-auto pb-20 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.slice(0, 3).map((p) => (
            <VideoCard key={p.id} project={p} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.slice(3, 5).map((p) => (
            <VideoCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <ContactSection />
      {/* Здесь больше нет <Footer />, он вызывается глобально */}
    </main>
  );
}