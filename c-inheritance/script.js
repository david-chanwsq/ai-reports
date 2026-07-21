/* ============================================================================
   IT RESEARCH REPORT TEMPLATE — BEHAVIOR
   ============================================================================
   This file is intentionally dependency-free and works off CSS classes /
   data-attributes already present in index.html, so it never needs editing
   just because report CONTENT changed. You only need to touch this file if
   you change the STRUCTURE (e.g. rename data-target, add a new interactive
   widget).

   WHAT'S IN HERE
   1. Scroll progress bar (top rail + sidebar %)
   2. Scrollspy — highlights the active sidebar item as the reader scrolls
   3. Reveal-on-scroll — fades/slides in any element with class="reveal"
   4. Terminal boot-sequence typing effect for the hero console lines
   5. Mobile sidebar toggle
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initScrollspy();
  initRevealOnScroll();
  initTypingEffect();
  initMobileNav();
  initBuildTime();
});

/* ---------------------------- 1. progress bar ---------------------------- */
function initProgressBar() {
  const fill = document.getElementById('progressFill');
  const pct = document.getElementById('progressPct');
  if (!fill) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    fill.style.width = (ratio * 100).toFixed(1) + '%';
    if (pct) pct.textContent = Math.round(ratio * 100) + '%';
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ------------------------------ 2. scrollspy ------------------------------ */
function initScrollspy() {
  const tocItems = Array.from(document.querySelectorAll('#tocList li[data-target]'));
  if (!tocItems.length) return;

  const sections = tocItems
    .map(item => ({ item, el: document.getElementById(item.dataset.target) }))
    .filter(entry => entry.el);

  // clicking a TOC item scrolls to its section
  sections.forEach(({ item, el }) => {
    item.addEventListener('click', () => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileNav();
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const match = sections.find(s => s.el === entry.target);
      if (!match) return;
      if (entry.isIntersecting) {
        tocItems.forEach(i => i.classList.remove('active'));
        match.item.classList.add('active');
        markPreviousAsDone(sections, match.item);
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

  sections.forEach(({ el }) => observer.observe(el));
}

function markPreviousAsDone(sections, activeItem) {
  const activeIndex = sections.findIndex(s => s.item === activeItem);
  sections.forEach((s, i) => {
    s.item.classList.toggle('done', i < activeIndex);
  });
}

/* --------------------------- 3. reveal on scroll --------------------------- */
function initRevealOnScroll() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
}

/* ------------------------- 4. terminal typing effect ------------------------- */
function initTypingEffect() {
  const lines = document.querySelectorAll('[data-typed]');
  if (!lines.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  lines.forEach((line, index) => {
    const text = line.dataset.text || line.textContent;
    if (prefersReducedMotion) {
      line.textContent = text;
      return;
    }
    line.textContent = '';
    const startDelay = index * 550;
    setTimeout(() => typeLine(line, text), startDelay);
  });
}

function typeLine(el, text, i = 0) {
  if (i <= text.length) {
    el.textContent = text.slice(0, i);
    setTimeout(() => typeLine(el, text, i + 1), 22);
  }
}

/* ----------------------------- 5. mobile nav ----------------------------- */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function closeMobileNav() {
  const toggle = document.getElementById('navToggle');
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth <= 900 && sidebar && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }
}

/* ------------------------------- build time ------------------------------- */
function initBuildTime() {
  const el = document.getElementById('buildTime');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toISOString().slice(0, 16).replace('T', ' ');
}