// APA — main.js

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile / tablet nav overlay ────────────────────────────────────
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('nav-overlay');

  if (toggle && overlay) {
    const closeMenu = () => {
      overlay.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    };
    const openMenu = () => {
      overlay.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
    };

    toggle.addEventListener('click', () => {
      const isOpen = overlay.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });

    overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // If the viewport grows past the desktop breakpoint while open, reset it
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1100) closeMenu();
    });
  }

  // ── Fade-up on scroll ───────────────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // ── Simple category/year filter (used on the Eventos archive) ─────
  const filterBar = document.querySelector('[data-filters]');
  if (filterBar) {
    const buttons = filterBar.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('[data-archive-item]');

    const applyFilter = (value) => {
      items.forEach(item => {
        const matches = value === 'all' || item.dataset.archiveItem === value;
        item.classList.toggle('is-visible', matches);
      });
    };

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        applyFilter(btn.dataset.filter);
      });
    });

    applyFilter('all');
  }

});
