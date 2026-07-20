// Basic Typewriter Effect for Hero Console
document.addEventListener('DOMContentLoaded', () => {
  const consoleLines = document.querySelectorAll('.hero-console .console-line[data-typed]');
  let delay = 0;

  consoleLines.forEach(line => {
    const text = line.getAttribute('data-text');
    let i = 0;
    line.textContent = ''; // Clear content to type it out

    setTimeout(() => {
      const typing = setInterval(() => {
        if (i < text.length) {
          line.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 50); // Typing speed
    }, delay); // Delay for each line

    delay += text.length * 50 + 500; // Accumulate delay + pause
  });

  // Scroll Progress Bar
  const progressFill = document.getElementById('progressFill');
  window.addEventListener('scroll', () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressFill.style.width = `${progress}%`;

    // Update sidebar progress percentage
    const progressPct = document.getElementById('progressPct');
    if (progressPct) {
      progressPct.textContent = `${Math.round(progress)}%`;
    }
  });

  // Scrollspy for Sidebar (Table of Contents)
  const tocList = document.getElementById('tocList');
  const sections = document.querySelectorAll('.paper-section');
  const navToggle = document.getElementById('navToggle');
  const sidebar = document.getElementById('sidebar');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50% 0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const targetId = entry.target.id;
      const correspondingLink = tocList.querySelector(`li[data-target="${targetId}"]`);

      if (correspondingLink) {
        if (entry.isIntersecting) {
          correspondingLink.classList.add('active');
        } else {
          correspondingLink.classList.remove('active');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Smooth scroll for TOC links
  tocList.addEventListener('click', (event) => {
    const targetLi = event.target.closest('li[data-target]');
    if (targetLi) {
      event.preventDefault();
      const targetId = targetLi.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
        // Close sidebar on mobile after clicking a link
        if (sidebar.classList.contains('is-open')) {
          sidebar.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });

  // Mobile Nav Toggle
  if (navToggle && sidebar) {
    navToggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Set Build Time (simple example)
  const buildTimeElement = document.getElementById('buildTime');
  if (buildTimeElement) {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    buildTimeElement.textContent = now.toLocaleDateString('en-US', options);
  }

  // Reveal elements on scroll (Intersection Observer for .reveal class)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Adjust threshold as needed

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

});