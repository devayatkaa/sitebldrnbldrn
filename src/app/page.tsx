'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import AboutMe from '../components/AboutMe';
import Background from '../components/Background';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

export default function Home() {
  // Активируем логику появления при скролле
  useScrollReveal();
  
  const [lang, setLang] = useState<'RU' | 'EN'>('RU');

  return (
    <main className="relative min-h-screen">
      <Background />
      <Header lang={lang} setLang={setLang} />
      
      <Hero />
      
      {/* 
        СЕКЦИЯ ПОРТФОЛИО: 
        Вертикальный отступ py-12 обеспечивает видимость верхнего ряда на первом экране.
      */}
      <section id="projects" className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto py-12 md:py-16 space-y-24">
        
        {/* ВЕРХНИЙ РЯД (3 карточки) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.slice(0, 3).map((p, i) => (
            <div 
              key={p.id} // Стабильный уникальный ключ
              className="lg:scale-105 transform-gpu"
            >
              <VideoCard 
                project={p} 
                delayClass={`delay-${(i + 1) * 150}`} 
              />
            </div>
          ))}
        </div>
        
        {/* НИЖНИЙ РЯД (2 карточки) */}
        {/* Контейнер max-w-5xl изолирует второй ряд, предотвращая влияние на общую сетку */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {projects.slice(3, 5).map((p, i) => (
            <div 
              key={p.id} // Стабильный уникальный ключ
              className="transform-gpu opacity-90 hover:opacity-100 transition-opacity duration-500"
            >
              <VideoCard 
                project={p} 
                /* 
                   Для 4-й карточки (индекс i=0 здесь) задержка начинается после 
                   завершения анимации верхнего ряда.
                */
                delayClass={`delay-${(i + 4) * 150}`} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Секция About Me */}
      <div className="reveal-hidden transform-gpu">
        <AboutMe lang={lang} />
      </div>

    </main>
  );
}