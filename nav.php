<?php
// ============================================
// ELITE COMPANY — Navegación
// ============================================
?>
<nav class="nav" id="mainNav">
  <div class="nav__inner">

    <!-- Logo -->
    <a href="#" class="nav__logo">
      <div class="nav__logo-mark"><span>E</span></div>
      <div class="nav__logo-text">
        <span class="nav__logo-name">Elite</span>
        <span class="nav__logo-sub">Company</span>
      </div>
    </a>

    <!-- Links desktop -->
    <ul class="nav__links">
      <li><a href="#nosotros">Nosotros</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#portafolio">Portafolio</a></li>
      <li><a href="#clientes">Clientes</a></li>
    </ul>

    <!-- CTA -->
    <a href="#contacto" class="nav__cta">Cotizar proyecto</a>

    <!-- Hamburger mobile -->
    <button class="nav__hamburger" id="hamburger" aria-label="Menú">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

<!-- Menú móvil -->
<div class="nav__mobile" id="mobileMenu">
  <a href="#nosotros"  onclick="closeMobileMenu()">Nosotros</a>
  <a href="#servicios" onclick="closeMobileMenu()">Servicios</a>
  <a href="#portafolio" onclick="closeMobileMenu()">Portafolio</a>
  <a href="#clientes"  onclick="closeMobileMenu()">Clientes</a>
  <a href="#contacto"  onclick="closeMobileMenu()">Contacto</a>
</div>
