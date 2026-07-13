document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const navToggle = document.getElementById('navToggle');
  const tocList = document.getElementById('tocList');
  const sections = document.querySelectorAll('.paper-section');
  const progressFill = document.getElementById('progressFill');
  const progressPct = document.getElementById('progressPct');
  const buildTimeElement = document.getElementById('buildTime');
  const typedElements = document.querySelectorAll('[data-typed]');
  const mainContent = document.querySelector('main');

  // Set build time
  if (buildTimeElement) {
    const now = new Date();
    buildTimeElement.textContent = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  // Mobile Nav Toggle
  if (navToggle && sidebar) {
    navToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', sidebar.classList.contains('active'));
    });
  }

  // Smooth scroll for TOC links
  if (tocList) {
    tocList.addEventListener('click', (event) => {
      let targetElement = event.target.closest('li');
      if (targetElement && targetElement.dataset.target) {
        event.preventDefault();
        const targetId = targetElement.dataset.target;
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          // Close sidebar on mobile after clicking a link
          if (sidebar && navToggle && window.innerWidth <= 1024) {
            sidebar.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  }

  // ScrollSpy and Progress Bar
  const updateScrollProgress = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }
    if (progressPct) {
      progressPct.textContent = `${Math.round(progress)}%`;
    }

    // Highlight TOC item
    let currentActive = null;
    sections.forEach(section => {
      const sectionTop = section.offsetTop - mainContent.offsetTop; // Adjust for main's offset
      const sectionHeight = section.clientHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentActive = section.id;
      }
    });

    document.querySelectorAll('.toc li').forEach(item => {
      if (item.dataset.target === currentActive) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress(); // Initial call

  // Intersection Observer for reveal effect
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optionally, stop observing once it's active
        // observer.unobserve(entry.target);
      } else {
        // Optional: remove 'active' if out of view
        // entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
  });

  // Typing effect for hero console
  typedElements.forEach(element => {
    const text = element.dataset.text;
    let i = 0;
    element.textContent = ''; // Clear content
    const speed = 30; // Typing speed in ms

    function typeWriter() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        element.classList.add('typed'); // Mark as typed
      }
    }
    typeWriter();
  });
});
