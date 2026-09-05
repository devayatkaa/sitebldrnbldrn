'use client';
import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      // Срабатывает мгновенно, когда край показался
      threshold: 0.01, 
      // Даем запас в 300px, чтобы 4-я карточка "проснулась" заранее
      rootMargin: '0px 0px 300px 0px' 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Используем задержку кадра для плавности
          requestAnimationFrame(() => {
            entry.target.classList.add('reveal-visible');
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-hidden');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};