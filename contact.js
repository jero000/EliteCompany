// ============================================
// ELITE COMPANY — Formulario de Contacto
// ============================================

const form       = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Validación básica
    const nombre  = form.querySelector('#nombre').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const mensaje = form.querySelector('#mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      showStatus('error', '⚠ Por favor completa todos los campos requeridos.');
      return;
    }

    if (!isValidEmail(email)) {
      showStatus('error', '⚠ Ingresa un correo electrónico válido.');
      return;
    }

    // Estado de carga
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Intentar envío real al backend PHP (si está disponible)
    try {
      const formData = new FormData(form);
      const resp = await fetch('php/send_mail.php', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (!resp.ok) throw new Error('network');
      const result = await resp.json();
      if (result && result.success) {
        showStatus('success', '✓ Mensaje enviado. Te contactaremos en menos de 24 horas.');
        form.reset();
      } else {
        showStatus('error', '✗ Hubo un error al enviar. Escríbenos a contacto@elitecompany.co');
      }
    } catch (err) {
      // Fallback demo si no hay backend
      await new Promise(resolve => setTimeout(resolve, 900));
      showStatus('success', '✓ ¡Mensaje recibido! (demo local)');
      form.reset();
    }

    // Restaurar botón
    submitBtn.textContent = originalText;
    submitBtn.disabled    = false;
    submitBtn.style.opacity = '1';
  });
}

function showStatus(type, message) {
  formStatus.className = 'form-status ' + type;
  formStatus.textContent = message;
  formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Ocultar después de 6s
  setTimeout(() => {
    formStatus.className = 'form-status';
    formStatus.textContent = '';
  }, 6000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Input focus effects
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
  const group = input.closest('.form-group');

  input.addEventListener('focus', () => {
    group.style.transform = 'translateY(-1px)';
    group.style.transition = 'transform 0.2s ease';
  });

  input.addEventListener('blur', () => {
    group.style.transform = '';
  });
});
