'use client';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import AboutMe from '../components/AboutMe';
import Background from '../components/Background';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

export default function Home() {

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px 200px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-hidden');
    elements.forEach((el) => observer.observe(el));

    const timeout = setTimeout(() => {
      const heroElements = document.querySelectorAll('section:first-of-type .reveal-hidden');
      heroElements.forEach(el => el.classList.add('reveal-visible'));
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      <Background />
      <Header />

      {/* 1. HERO */}
      <Hero />

      {/* 2. ПОРТФОЛИО */}
      <section id="projects" className="relative z-50 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto py-12 md:py-16 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.slice(0, 3).map((p, i) => (
            <div key={p.id} className="reveal-hidden transform-gpu">
              <VideoCard
                project={p}
                delayClass={`delay-[${(i + 1) * 150}ms]`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {projects.slice(3, 5).map((p, i) => (
            <div key={p.id} className="reveal-hidden transform-gpu">
              <VideoCard
                project={p}
                delayClass={`delay-[${(i + 3) * 150}ms]`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT ME */}
      <div className="reveal-hidden transform-gpu relative z-50">
        <AboutMe lang="RU" />
      </div>

    </main>
  );
}