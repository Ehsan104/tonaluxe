// State to track current language
let currentLang = 'en';

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle');
const translatableElements = document.querySelectorAll('[data-en]');
const enSpan = document.querySelector('.lang-en');
const esSpan = document.querySelector('.lang-es');
const navbar = document.querySelector('.navbar');

// Toggle Language
langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  
  // Update toggle button styling
  if (currentLang === 'en') {
    enSpan.classList.add('active');
    esSpan.classList.remove('active');
  } else {
    esSpan.classList.add('active');
    enSpan.classList.remove('active');
  }
  
  // Update content with a slight fade effect
  translatableElements.forEach(el => {
    // Optional: add a tiny fade out/in effect
    el.style.opacity = 0;
    setTimeout(() => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
      el.style.opacity = 1;
    }, 200);
  });
});

// Add smooth transition to all translatable elements
translatableElements.forEach(el => {
  el.style.transition = 'opacity 0.2s ease';
});

// Sticky Navbar Background on Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: stop observing once it's visible
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section-fade').forEach(section => {
  observer.observe(section);
});
