(function () {
  'use strict';

  var overlay = document.getElementById('brandTransition');
  var video = document.getElementById('brandTransitionVideo');
  var skipBtn = document.getElementById('skipIntro');

  if (!overlay) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function hideOverlay() {
    overlay.classList.add('is-hidden');
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', hideOverlay);
  }

  if (reduceMotion) {
    setTimeout(hideOverlay, 350);
    return;
  }

  var fallbackTimer = setTimeout(hideOverlay, 4200);

  if (video) {
    video.addEventListener('ended', function () {
      clearTimeout(fallbackTimer);
      hideOverlay();
    });

    video.addEventListener('error', function () {
      clearTimeout(fallbackTimer);
      setTimeout(hideOverlay, 600);
    });

    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () {
        clearTimeout(fallbackTimer);
        setTimeout(hideOverlay, 700);
      });
    }
  }
})();
