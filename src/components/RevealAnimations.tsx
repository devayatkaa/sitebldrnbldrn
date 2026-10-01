'use client';

import { useEffect } from 'react';

export default function RevealAnimations() {
  useEffect(() => {
    // Original reveal mechanism: a one-way CSS transition, independent of video playback.
    const seen = new WeakSet<Element>();
    const pending = new Set<Element>();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reveal = (element: Element) => {
      // React may replace className on state updates; this marker is not React-owned.
      element.setAttribute('data-revealed', 'true');
      pending.delete(element);
      observer?.unobserve(element);
    };
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target);
          });
        }, { threshold: 0.05, rootMargin: '0px 0px 200px 0px' })
      : null;

    const register = (element: Element) => {
      if (seen.has(element)) return;
      seen.add(element);
      const bounds = element.getBoundingClientRect();
      if (motion.matches || !observer || element.contains(document.activeElement)
          || (bounds.top < window.innerHeight && bounds.bottom > 0)) {
        reveal(element);
      } else {
        pending.add(element);
        observer.observe(element);
      }
    };
    const scan = (root: Document | Element) => {
      if (root instanceof Element && root.matches('[data-reveal]')) register(root);
      root.querySelectorAll('[data-reveal]').forEach(register);
    };
    scan(document);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node instanceof Element) scan(node);
      }));
      pending.forEach((element) => {
        if (!element.isConnected) { pending.delete(element); observer?.unobserve(element); }
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    const reduceMotion = () => { if (motion.matches) pending.forEach(reveal); };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest('[data-reveal]');
      if (element) reveal(element);
    };
    motion.addEventListener('change', reduceMotion);
    document.addEventListener('focusin', onFocus);
    return () => {
      observer?.disconnect();
      mutations.disconnect();
      motion.removeEventListener('change', reduceMotion);
      document.removeEventListener('focusin', onFocus);
    };
  }, []);
  return null;
}
