import { useEffect } from 'react';

export default function useScrollReveal(options = {}) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));

    // Initialize each element with base class and optional delay
    els.forEach((el) => {
      el.classList.add('reveal');
      const delay = el.getAttribute('data-delay');
      if (delay) {
        el.style.transitionDelay = delay;
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            // Remove to allow fade out when scrolled away
            entry.target.classList.remove('show');
          }
        });
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || '0px 0px -5% 0px',
        threshold: options.threshold ?? 0.15,
      }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [options.root, options.rootMargin, options.threshold]);
}
