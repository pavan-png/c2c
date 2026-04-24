import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? 'home');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const visibleSections = new Map();
    let rafId = 0;

    const updateFromVisibleSections = () => {
      rafId = 0;
      if (!visibleSections.size) return;

      let bestId = sectionIds[0] ?? 'home';
      let bestScore = -1;

      visibleSections.forEach((ratio, id) => {
        if (ratio > bestScore) {
          bestScore = ratio;
          bestId = id;
        }
      });

      setActiveSection((current) => (current === bestId ? current : bestId));
    };

    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateFromVisibleSections);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });
        scheduleUpdate();
      },
      {
        root: null,
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5, 0.7, 0.9],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [sectionIds]);

  return activeSection;
};
