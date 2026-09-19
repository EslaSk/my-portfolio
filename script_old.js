/* =============================================
   LOADER
   ============================================= */
const loaderEl = document.getElementById('loader');
const loaderPct = document.getElementById('loader-pct');
let count = 0;
const counter = setInterval(() => {
  count += Math.floor(Math.random() * 12) + 4;
  if (count >= 100) { count = 100; clearInterval(counter); }
  loaderPct.textContent = count + '%';
}, 70);
window.addEventListener('load', () => {
  setTimeout(() => loaderEl.classList.add('hidden'), 1600);
});

/* =============================================
   DARK MODE
   ============================================= */
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

// default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* =============================================
   CUSTOM CURSOR
   ============================================= */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card, .skill-card, .service-card, .filter-btn').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* =============================================
   HAMBURGER / MOBILE MENU
   ============================================= */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* =============================================
   NAV SCROLL SHRINK + BACK TO TOP
   ============================================= */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', scrollY > 60);
  backToTop.classList.toggle('visible', scrollY > 400);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =============================================
   SCROLL REVEAL
   ============================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =============================================
   LIGHTBOX
   ============================================= */
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(html) {
  lightboxContent.innerHTML = html;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  // stop video if playing
  const vid = lightboxContent.querySelector('video');
  if (vid) vid.pause();
  setTimeout(() => { lightboxContent.innerHTML = ''; }, 300);
}

document.querySelectorAll('.project-media').forEach(media => {
  media.addEventListener('click', () => {
    const video = media.querySelector('.project-video');
    const img = media.querySelector('.project-screenshot');
    if (video) {
      openLightbox(`<video src="${video.src}" controls autoplay muted loop playsinline></video>`);
    } else if (img) {
      openLightbox(`<img src="${img.src}" alt="${img.alt}"/>`);
    }
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* =============================================
   VIDEO HOVER PLAY
   ============================================= */
document.querySelectorAll('.project-media').forEach(media => {
  const video = media.querySelector('.project-video');
  if (!video) return;
  media.addEventListener('mouseenter', () => video.play());
  media.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});

/* =============================================
   PROJECT FILTER
   ============================================= */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

/* =============================================
   CONTACT FORM — Formspree
   ============================================= */
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const btnSending = submitBtn.querySelector('.btn-sending');
const formSuccess = document.getElementById('form-success');
const formErrorMsg = document.getElementById('form-error');

function validateField(input, errorId, message) {
  const errorEl = document.getElementById(errorId);
  if (!input.value.trim()) {
    input.classList.add('invalid');
    errorEl.textContent = message;
    return false;
  }
  if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    input.classList.add('invalid');
    errorEl.textContent = 'Please enter a valid email address.';
    return false;
  }
  input.classList.remove('invalid');
  errorEl.textContent = '';
  return true;
}

// Clear error on input
contactForm.querySelectorAll('input, textarea').forEach(field => {
  field.addEventListener('input', () => {
    field.classList.remove('invalid');
    const errId = 'err-' + field.id;
    const errEl = document.getElementById(errId);
    if (errEl) errEl.textContent = '';
  });
});

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const valid = [
    validateField(firstName, 'err-first-name', 'First name is required.'),
    validateField(lastName, 'err-last-name', 'Last name is required.'),
    validateField(email, 'err-email', 'Email address is required.'),
    validateField(message, 'err-message', 'Please write a message.'),
  ].every(Boolean);

  if (!valid) return;

  btnText.hidden = true;
  btnSending.hidden = false;
  submitBtn.disabled = true;
  formSuccess.hidden = true;
  formErrorMsg.hidden = true;

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      formSuccess.hidden = false;
      contactForm.reset();
    } else {
      formErrorMsg.hidden = false;
    }
  } catch {
    formErrorMsg.hidden = false;
  } finally {
    btnText.hidden = false;
    btnSending.hidden = true;
    submitBtn.disabled = false;
  }
});
