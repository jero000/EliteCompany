<?php
// ============================================
// ELITE COMPANY — Footer
// ============================================

$currentYear = date('Y');
?>
<footer class="footer">
  <div class="container">

    <div class="footer__top">

      <!-- Marca -->
      <div class="footer__brand">
        <div class="footer__brand-name">Elite <em>Company</em></div>
        <span class="footer__brand-tag">Soluciones Web & Community Manager</span>
        <p class="footer__brand-desc">
          Transformamos negocios colombianos con estrategia digital de primer nivel. Tu éxito es nuestra razón de existir.
        </p>
        <div class="footer__social">
          <a href="#" class="social-link" aria-label="Instagram">📷</a>
          <a href="#" class="social-link" aria-label="Facebook">📘</a>
          <a href="#" class="social-link" aria-label="TikTok">🎵</a>
          <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
          <a href="#" class="social-link" aria-label="WhatsApp">💬</a>
        </div>
      </div>

      <!-- Servicios -->
      <div class="footer__col">
        <span class="footer__col-title">Servicios</span>
        <ul class="footer__links">
          <li><a href="#servicios">Diseño Web</a></li>
          <li><a href="#servicios">E-Commerce</a></li>
          <li><a href="#servicios">Community Manager</a></li>
          <li><a href="#servicios">SEO & SEM</a></li>
          <li><a href="#servicios">Branding</a></li>
        </ul>
      </div>

      <!-- Empresa -->
      <div class="footer__col">
        <span class="footer__col-title">Empresa</span>
        <ul class="footer__links">
          <li><a href="#nosotros">Quiénes somos</a></li>
          <li><a href="#portafolio">Portafolio</a></li>
          <li><a href="#clientes">Testimonios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div class="footer__col">
        <span class="footer__col-title">Contacto</span>
        <ul class="footer__links">
          <li><a href="mailto:<?= SITE_EMAIL ?>"><?= SITE_EMAIL ?></a></li>
          <li><a href="tel:<?= SITE_PHONE ?>"><?= SITE_PHONE ?></a></li>
          <li><a href="#">Medellín, Colombia</a></li>
          <li><a href="#">Lun–Vie: 8am–6pm</a></li>
        </ul>
      </div>

    </div>

    <!-- Bottom -->
    <div class="footer__bottom">
      <span class="footer__copy">
        © <?= $currentYear ?> <em><?= SITE_NAME ?></em>. Todos los derechos reservados.
      </span>
      <div class="footer__legal">
        <a href="#">Política de privacidad</a>
        <a href="#">Términos de uso</a>
      </div>
    </div>

  </div>
</footer>
