// APA — main.js

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile navbar toggle ──────────────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  // ── Intersection Observer for fade-up animations ──────────────────────
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

  // ── Active nav link ───────────────────────────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar-links a').forEach(a => {
    if (a.getAttribute('href') === currentPath) {
      a.classList.add('active');
    }
  });

});
