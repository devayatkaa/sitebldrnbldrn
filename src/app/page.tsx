'use client';
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import AboutMe from '../components/AboutMe';
import { projects } from '../data/projects';

export default function Home() {

  return (
    <main className="relative min-h-screen">
      <Header />

      {/* 1. HERO */}
      <Hero />

      {/* 2. ПОРТФОЛИО */}
      <section id="projects" className="relative z-50 mx-auto max-w-[1920px] px-4 pb-12 pt-8 sm:px-6 md:px-12 md:pb-20 md:pt-10 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12 xl:gap-x-10 xl:gap-y-16">
          {projects.map((p) => (
            <div key={p.id} data-reveal="video">
              <VideoCard
                project={p}
              />
            </div>
          ))}
        </div>

      </section>

      {/* 3. ABOUT ME */}
      <div className="relative z-50">
        <AboutMe lang="RU" />
      </div>

    </main>
  );
}
