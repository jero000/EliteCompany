// ============================================
// ELITE COMPANY — Animaciones (AOS + Contadores)
// ============================================

// ---- Scroll Reveal (AOS personalizado) ----
const aosElements = document.querySelectorAll('[data-aos]');

const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger entre hermanos del mismo grid
      const siblings = Array.from(entry.target.parentElement.children).filter(el => el.hasAttribute('data-aos'));
      const idx = siblings.indexOf(entry.target);
      const delay = idx * 80;

      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, delay);

      aosObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
});

aosElements.forEach(el => aosObserver.observe(el));


// ---- Contadores animados ----
const statNums = document.querySelectorAll('[data-count]');

function animateCount(el) {
  const target  = parseInt(el.getAttribute('data-count'));
  const suffix  = el.querySelector('.stat-suffix')?.textContent || '';
  const duration = 1800;
  const start   = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased   = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    el.childNodes[0].textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => counterObserver.observe(el));


// ---- Cursor personalizado (desktop) ----
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor     = document.createElement('div');
  const cursorDot  = document.createElement('div');

  cursor.id    = 'cursor';
  cursorDot.id = 'cursor-dot';

  Object.assign(cursor.style, {
    position: 'fixed',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '1px solid rgba(201, 168, 76, 0.6)',
    pointerEvents: 'none',
    zIndex: '9999',
    transition: 'transform 0.15s ease, opacity 0.3s ease',
    transform: 'translate(-50%, -50%)',
    top: '0',
    left: '0',
  });

  Object.assign(cursorDot.style, {
    position: 'fixed',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: 'var(--gold)',
    pointerEvents: 'none',
    zIndex: '9999',
    transform: 'translate(-50%, -50%)',
    top: '0',
    left: '0',
  });

  document.body.appendChild(cursor);
  document.body.appendChild(cursorDot);

  let mx = 0, my = 0;
  let cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top  = my + 'px';
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function updateCursor() {
    cx = lerp(cx, mx, 0.12);
    cy = lerp(cy, my, 0.12);
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  // Hover sobre elementos interactivos
  document.querySelectorAll('a, button, .service-card, .portfolio-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
      cursor.style.borderColor = 'rgba(201, 168, 76, 0.9)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'rgba(201, 168, 76, 0.6)';
    });
  });
}
