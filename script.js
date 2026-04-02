/* =============================================================
   Sector-F Villa — Premium Real Estate Listing
   Main JavaScript
   ============================================================= */

'use strict';

/* ─── PAGE LOADER ─────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1650);
});

/* ─── SCROLL PROGRESS BAR ─────────────────────────────────── */
const progressBar = document.getElementById('scroll-progress');
function updateProgress() {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  if (total > 0) {
    progressBar.style.width = ((scrolled / total) * 100) + '%';
  }
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ─── NAVBAR ──────────────────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

function openNav() {
  hamburger.classList.add('open');
  navLinks.classList.add('open');
  navOverlay.classList.add('visible');
  navOverlay.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('visible');
  navOverlay.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeNav() : openNav();
});
navOverlay.addEventListener('click', closeNav);
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

/* ─── SMOOTH ACTIVE NAV LINK ──────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.classList.toggle('active-link', a.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => sectionObserver.observe(s));

/* ─── GALLERY DATA ────────────────────────────────────────── */
const allImages = [
  { src: 'WhatsApp Image 2026-04-02 at 1.48.49 PM.jpeg',      alt: 'Exterior — Front Facade' },
  { src: 'WhatsApp Image 2026-04-02 at 1.48.50 PM.jpeg',      alt: 'Exterior — Front View' },
  { src: 'WhatsApp Image 2026-04-02 at 1.48.50 PM (1).jpeg',  alt: 'Exterior — Entrance Approach' },
  { src: 'WhatsApp Image 2026-04-02 at 2.39.45 PM.jpeg',      alt: 'Garden — Aerial View' },
  { src: 'WhatsApp Image 2026-04-02 at 2.39.45 PM (1).jpeg',  alt: 'Garden — Natural Reserve Backdrop' },
  { src: 'WhatsApp Image 2026-04-02 at 2.39.45 PM (2).jpeg',  alt: 'Garden — Private Sitting Area' },
  { src: 'WhatsApp Image 2026-04-02 at 2.39.46 PM.jpeg',      alt: 'Kitchen — Modern Modular' },
  { src: 'WhatsApp Image 2026-04-02 at 1.52.13 PM.jpeg',      alt: 'Garden — Green Lawn & Patio' },
  { src: 'WhatsApp Image 2026-04-02 at 1.52.11 PM.jpeg',      alt: 'Outdoor Spaces' },
  { src: 'WhatsApp Image 2026-04-02 at 1.52.11 PM (1).jpeg',  alt: 'Outdoor Spaces' },
  { src: 'WhatsApp Image 2026-04-02 at 1.52.12 PM.jpeg',      alt: 'Garden Detail' },
  { src: 'WhatsApp Image 2026-04-02 at 1.52.12 PM (1).jpeg',  alt: 'Garden Detail' },
  { src: 'WhatsApp Image 2026-04-02 at 1.52.14 PM.jpeg',      alt: 'Outdoor Living' },
  { src: 'WhatsApp Image 2026-04-02 at 1.52.15 PM.jpeg',      alt: 'Outdoor Living' },
  { src: 'WhatsApp Image 2026-04-02 at 1.52.15 PM (1).jpeg',  alt: 'Outdoor Living' },
  { src: 'DSCN0186.JPG', alt: 'Interior — Grand Entrance Foyer' },
  { src: 'DSCN0187.JPG', alt: 'Interior View' },
  { src: 'DSCN0188.JPG', alt: 'Interior View' },
  { src: 'DSCN0189.JPG', alt: 'Interior View' },
  { src: 'DSCN0190.JPG', alt: 'Interior View' },
  { src: 'DSCN0191.JPG', alt: 'Interior View' },
  { src: 'DSCN0192.JPG', alt: 'Interior View' },
  { src: 'DSCN0193.JPG', alt: 'Interior View' },
  { src: 'DSCN0194.JPG', alt: 'Interior View' },
  { src: 'DSCN0195.JPG', alt: 'Interior View' },
  { src: 'DSCN0196.JPG', alt: 'Interior View' },
  { src: 'DSCN0197.JPG', alt: 'Interior View' },
  { src: 'DSCN0198.JPG', alt: 'Interior View' },
  { src: 'DSCN0199.JPG', alt: 'Interior View' },
  { src: 'DSCN0200.JPG', alt: 'Interior View' },
  { src: 'DSCN0201.JPG', alt: 'Interior View' },
  { src: 'DSCN0202.JPG', alt: 'Interior View' },
  { src: 'DSCN0203.JPG', alt: 'Interior View' },
  { src: 'DSCN0204.JPG', alt: 'Interior — Lounge with Arched Window & Ornate Ceiling' },
];

/** Encode a bare filename (spaces/parentheses only) for use in src attributes */
function encodeFilename(filename) {
  return filename
    .replace(/ /g,   '%20')
    .replace(/\(/g,  '%28')
    .replace(/\)/g,  '%29');
}

const INITIAL_COUNT = 12;
let showingAll = false;

/* Build gallery items into the grid */
function buildGallery(images) {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';

  images.forEach((imgData, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', imgData.alt);
    item.dataset.index = idx;

    item.innerHTML = `
      <img src="${encodeFilename(imgData.src)}" alt="${imgData.alt}" loading="lazy">
      <div class="gallery-item-overlay" aria-hidden="true">
        <i class="fas fa-expand-alt"></i>
      </div>
    `;

    // The real index in allImages for the initially displayed subset
    const realIndex = showingAll ? idx : idx;
    item.addEventListener('click',   () => openLightbox(realIndex));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(realIndex);
      }
    });

    grid.appendChild(item);
  });
}

function loadMoreImages() {
  showingAll = true;
  buildGallery(allImages);
  document.getElementById('gallery-load-more').style.display = 'none';
  // Re-run scroll animation on new items
  document.querySelectorAll('#gallery-grid .gallery-item').forEach(el => {
    el.style.animation = 'none';
  });
}

function initGallery() {
  buildGallery(allImages.slice(0, INITIAL_COUNT));
  const loadBtn = document.getElementById('gallery-load-more');
  if (allImages.length > INITIAL_COUNT) {
    loadBtn.style.display = 'block';
  } else {
    loadBtn.style.display = 'none';
  }
}

/* ─── LIGHTBOX ────────────────────────────────────────────── */
let currentIdx = 0;
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
const lbCounter = document.getElementById('lb-counter');

function openLightbox(index) {
  currentIdx = ((index % allImages.length) + allImages.length) % allImages.length;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderLightboxImage();
  lightbox.focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function renderLightboxImage() {
  const data = allImages[currentIdx];
  lbImg.src     = encodeFilename(data.src);
  lbImg.alt     = data.alt;
  lbCaption.textContent = data.alt;
  lbCounter.textContent = `${currentIdx + 1} / ${allImages.length}`;
}

function prevImage() {
  currentIdx = (currentIdx - 1 + allImages.length) % allImages.length;
  renderLightboxImage();
}
function nextImage() {
  currentIdx = (currentIdx + 1) % allImages.length;
  renderLightboxImage();
}

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', prevImage);
document.getElementById('lb-next').addEventListener('click', nextImage);

// Click backdrop to close
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   { e.preventDefault(); prevImage(); }
  if (e.key === 'ArrowRight')  { e.preventDefault(); nextImage(); }
});

// Touch/swipe support for lightbox
let touchStartX = 0;
lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
lightbox.addEventListener('touchend', (e) => {
  const diff = touchStartX - e.changedTouches[0].screenX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? nextImage() : prevImage();
  }
}, { passive: true });

/* ─── FLOOR PLAN TABS ─────────────────────────────────────── */
document.querySelectorAll('.ftab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ftab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.floor-panel').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const panel = document.getElementById('floor-' + tab.dataset.floor);
    if (panel) panel.classList.add('active');
  });
});

/* ─── SCROLL ANIMATIONS ───────────────────────────────────── */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el    = entry.target;
    const delay = parseInt(el.dataset.delay || '0', 10);
    setTimeout(() => el.classList.add('animated'), delay);
    animObserver.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

/* ─── STATS COUNTER ANIMATION ─────────────────────────────── */
function animateCounter(el) {
  const target   = parseInt(el.dataset.count, 10);
  const duration = 2000;
  const startTime = performance.now();

  function tick(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    counterObserver.unobserve(entry.target);
  });
}, { threshold: 0.6 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ─── CONTACT FORM ────────────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name  = contactForm.querySelector('#name').value.trim();
    const phone = contactForm.querySelector('#phone').value.trim();
    if (!name || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

    // Simulate submission (replace with real backend/email service as needed)
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Inquiry Sent!';
      submitBtn.style.background = 'linear-gradient(135deg,#2D7A3A,#3AAA50)';

      // Show success message
      let msg = contactForm.querySelector('.form-success-msg');
      if (!msg) {
        msg = document.createElement('p');
        msg.className = 'form-success-msg';
        contactForm.appendChild(msg);
      }
      msg.textContent = 'Thank you! We will be in touch shortly.';
      msg.style.display = 'block';

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Inquiry';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        msg.style.display = 'none';
        contactForm.reset();
      }, 4500);
    }, 1200);
  });
}

/* ─── HERO VIDEO FALLBACK ─────────────────────────────────── */
const heroVideo = document.querySelector('#hero video');
if (heroVideo) {
  heroVideo.play().catch(() => {
    // Autoplay blocked — video will show poster image; silence the rejection
  });
}

/* ─── INITIALISE ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initGallery();

  // Expose loadMoreImages globally for the inline onclick
  window.loadMoreImages = loadMoreImages;
});
