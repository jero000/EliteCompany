// ============================================
// ELITE COMPANY — Slider de Testimonios
// ============================================

const track   = document.getElementById('testimonialsTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (track && prevBtn && nextBtn) {
  let current = 0;

  function getVisible() {
    const w = window.innerWidth;
    if (w < 680)  return 1;
    if (w < 1100) return 2;
    return 3;
  }

  function getTotal() {
    return track.children.length;
  }

  function goTo(index) {
    const visible  = getVisible();
    const maxIndex = Math.max(0, getTotal() - visible);
    current = Math.max(0, Math.min(index, maxIndex));

    const card     = track.children[0];
    if (!card) return;

    const gap     = 24;
    const cardW   = card.offsetWidth + gap;
    track.style.transform  = `translateX(-${current * cardW}px)`;
    track.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';

    prevBtn.style.opacity = current === 0 ? '0.4' : '1';
    nextBtn.style.opacity = current >= maxIndex ? '0.4' : '1';
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Autoplay
  let autoplay = setInterval(() => goTo(current + 1 > Math.max(0, getTotal() - getVisible()) ? 0 : current + 1), 5000);

  track.addEventListener('mouseenter', () => clearInterval(autoplay));
  track.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goTo(current + 1 > Math.max(0, getTotal() - getVisible()) ? 0 : current + 1), 5000);
  });

  // Touch / swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  });

  // Resize
  window.addEventListener('resize', () => goTo(current), { passive: true });

  // Init
  goTo(0);
}
