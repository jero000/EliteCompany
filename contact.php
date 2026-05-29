<?php
// ============================================
// ELITE COMPANY — Contacto
// ============================================
?>
<section class="section" id="contacto">
  <div class="container">
    <div class="contact__grid">

      <!-- Información de contacto -->
      <div class="contact__info" data-aos>
        <div class="contact__info-label">Hablemos</div>

        <h2 class="contact__info-title">
          ¿Listo para dar el<br>
          <em>siguiente paso?</em>
        </h2>

        <p class="contact__info-text">
          Cuéntanos sobre tu proyecto y en menos de 24 horas te respondemos con una propuesta personalizada. Sin compromisos, sin costos ocultos.
        </p>

        <div class="contact__details">
          <div class="contact__detail">
            <div class="contact__detail-icon">📧</div>
            <div class="contact__detail-info">
              <strong>Email</strong>
              <span><?= SITE_EMAIL ?></span>
            </div>
          </div>

          <div class="contact__detail">
            <div class="contact__detail-icon">📱</div>
            <div class="contact__detail-info">
              <strong>WhatsApp</strong>
              <span><?= SITE_PHONE ?></span>
            </div>
          </div>

          <div class="contact__detail">
            <div class="contact__detail-icon">📍</div>
            <div class="contact__detail-info">
              <strong>Ubicación</strong>
              <span>Medellín, Antioquia — Colombia</span>
            </div>
          </div>

          <div class="contact__detail">
            <div class="contact__detail-icon">⏰</div>
            <div class="contact__detail-info">
              <strong>Horario</strong>
              <span>Lunes a Viernes · 8:00 am – 6:00 pm</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="contact__form" data-aos>
        <h3>Cuéntanos tu <em>proyecto</em></h3>

        <form id="contactForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" required />
            </div>
            <div class="form-group">
              <label for="empresa">Empresa</label>
              <input type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="correo@empresa.com" required />
            </div>
            <div class="form-group">
              <label for="telefono">Teléfono</label>
              <input type="tel" id="telefono" name="telefono" placeholder="+57 300 000 0000" />
            </div>
          </div>

          <div class="form-group">
            <label for="servicio">Servicio de interés</label>
            <select id="servicio" name="servicio">
              <option value="">— Selecciona un servicio —</option>
              <option>Diseño Web Profesional</option>
              <option>Tienda en Línea (E-Commerce)</option>
              <option>Community Manager</option>
              <option>SEO y Posicionamiento</option>
              <option>Branding e Identidad</option>
              <option>Analítica Digital</option>
              <option>Paquete completo</option>
            </select>
          </div>

          <div class="form-group">
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos sobre tu proyecto, objetivos y presupuesto aproximado..." required></textarea>
          </div>

          <button type="submit" class="btn btn--gold form-submit">
            Enviar mensaje
          </button>

          <div class="form-status" id="formStatus"></div>
        </form>
      </div>

    </div>
  </div>
</section>
