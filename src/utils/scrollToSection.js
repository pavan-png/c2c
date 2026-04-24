const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

let activeRaf = 0;

const emitTransition = (name, detail) => {
  window.dispatchEvent(new CustomEvent(name, { detail }));
};

const spotlightSection = (section) => {
  document.querySelectorAll('[data-nav-spotlight="true"]').forEach((node) => {
    node.removeAttribute('data-nav-spotlight');
  });
  section.setAttribute('data-nav-spotlight', 'true');
  window.setTimeout(() => {
    section.removeAttribute('data-nav-spotlight');
  }, 1250);
};

export const scrollToSection = (id, offset = 84) => {
  const section = document.getElementById(id);
  if (!section) return;

  if (activeRaf) {
    window.cancelAnimationFrame(activeRaf);
    activeRaf = 0;
  }

  const start = window.scrollY;
  const target = section.getBoundingClientRect().top + start - offset;
  const distance = Math.abs(target - start);
  const duration = Math.min(1280, Math.max(620, distance * 0.42));
  const startTime = performance.now();

  emitTransition('section:navigate-start', { target: id });
  spotlightSection(section);

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    window.scrollTo({ top: start + (target - start) * eased, left: 0, behavior: 'auto' });

    if (progress < 1) {
      activeRaf = window.requestAnimationFrame(animate);
    } else {
      activeRaf = 0;
      window.history.replaceState(null, '', `#${id}`);
      emitTransition('section:navigate-end', { target: id });
    }
  };

  activeRaf = window.requestAnimationFrame(animate);
};
