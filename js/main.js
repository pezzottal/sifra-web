/* =========================================================
   SIFRA INSTALLAZIONI — Main JS
   Minimal: mobile menu + accordion
   ========================================================= */

(function () {
  'use strict';

  // ── Mobile menu ──────────────────────────────────────────
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // ── Accordion ────────────────────────────────────────────
  document.querySelectorAll('.accordion-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // close all in same accordion
      const accordion = item.closest('.accordion');
      accordion.querySelectorAll('.accordion-item.open').forEach((el) => {
        el.classList.remove('open');
        el.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Active nav link ──────────────────────────────────────
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && path.endsWith(href) && href !== '/') {
      link.classList.add('active');
    }
  });

  // ── Smooth form feedback ─────────────────────────────────
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // basic front-end validation only — real form needs backend
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach((field) => {
        if (!field.value.trim()) {
          field.style.borderColor = '#dc2626';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) {
        e.preventDefault();
      }
    });
  }
})();
