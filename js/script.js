// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Theme toggle removed — site uses blended dark/light layout
import { applyTranslations, applyBlockTranslation } from './translate.js';
// Translations are provided by `js/translate.js` and imported as a module

// Simple reveal animations using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  // --- language initialization (module-based) ---
  const langSelect = document.getElementById('langSelect');
  const savedLang = localStorage.getItem('siteLang') || 'id';
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', (e) => {
      const chosen = e.target.value;
      localStorage.setItem('siteLang', chosen);
      applyTranslations(chosen);
    });
  }
  applyTranslations(savedLang);

  // reveal hero immediately
  document.querySelector('.hero')?.classList.add('in-view');

  // observe sections
  const sections = document.querySelectorAll('.section');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.12 });
  sections.forEach(s => obs.observe(s));

  // If this is NOT the index page, trigger all reveals immediately
  if (!document.body.classList.contains('index-page')) {
    sections.forEach(s => s.classList.add('in-view'));
    // no need to observe on static pages
    obs.disconnect();
    // make navbar items visible immediately (no stagger)
    document.querySelectorAll('.nav-links li').forEach(li => {
      li.style.transition = '';
      li.style.transform = 'none';
      li.style.opacity = '1';
    });
  }

  // small stagger for nav items
  document.querySelectorAll('.nav-links li').forEach((li, i) => {
    li.style.transition = 'transform 600ms ease, opacity 600ms ease';
    li.style.transform = 'translateY(6px)';
    li.style.opacity = '0';
    setTimeout(() => { li.style.transform='none'; li.style.opacity='1'; }, 200 + i*80);
  });
});

/* simple hero blob parallax on pointer move for desktop */
(function(){
  const hero = document.querySelector('.hero');
  if (!hero) return;
  function onMove(e){
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width/2; const cy = rect.top + rect.height/2;
    const px = (e.clientX - cx) / (rect.width/2);
    const py = (e.clientY - cy) / (rect.height/2);
    hero.style.setProperty('--b1x', `${px * -10}px`);
    hero.style.setProperty('--b1y', `${py * -8}px`);
    hero.style.setProperty('--b2x', `${px * 10}px`);
    hero.style.setProperty('--b2y', `${py * 8}px`);
    hero.classList.add('parallax');
  }
  function reset(){ hero.style.removeProperty('--b1x'); hero.style.removeProperty('--b1y'); hero.style.removeProperty('--b2x'); hero.style.removeProperty('--b2y'); hero.classList.remove('parallax'); }
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerleave', reset);
})();

/* Micro-tilt effect for project cards */
(() => {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  cards.forEach(card => {
    // initialize CSS variables
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');

    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width/2;
      const cy = rect.top + rect.height/2;
      const px = (e.clientX - cx) / (rect.width/2); // -1 .. 1
      const py = (e.clientY - cy) / (rect.height/2);
      const ry = (px * 6).toFixed(2);
      const rx = (-py * 6).toFixed(2);
      card.style.setProperty('--rx', rx + 'deg');
      card.style.setProperty('--ry', ry + 'deg');
      card.classList.add('tilt');
    };

    const onLeave = () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
      card.classList.remove('tilt');
    };

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    card.addEventListener('touchstart', onLeave);
  });
})();

// Projects dropdown: support mobile toggle and outside click
(function(){
  const toggles = document.querySelectorAll('.dropdown-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e)=>{
      const parent = toggle.parentElement;
      if (window.innerWidth <= 900) {
        e.preventDefault();
        parent.classList.toggle('open');
        const expanded = parent.classList.contains('open');
        toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      }
    });
  });

  document.addEventListener('click', (e)=>{
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(t=>t.setAttribute('aria-expanded','false'));
    }
  });
})();