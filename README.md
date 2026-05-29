# Elite Company — Proyecto local

Instrucciones rápidas para ejecutar y probar el sitio localmente.

Abrir en el navegador (archivo estático):

- Doble clic en `index.html` para abrir en tu navegador favorito.

Usar MAMP (GUI):

1. Abre la app MAMP.
2. Preferences → Web Server → Document Root → selecciona la carpeta del proyecto.
3. Start Servers → abre `http://localhost:8888/index.html`.

Usar PHP embebido (CLI de MAMP):

```bash
/Applications/MAMP/bin/php/php8.5.0/bin/php -S 127.0.0.1:8000 -t "/Users/jeronimocastromoreno/Desktop/PROYECTOS-PERSONALES/ELITE COMPANY"
```

Form backend:

- Endpoint: `php/send_mail.php` (simple envío con `mail()` y fallback para entorno local).

Assets generados:

- `favicon.svg` — favicon simple.
- `assets/social-preview.svg` — imagen para Open Graph.
- `assets/logo-elite.webp` — logo optimizado para web.
- `assets/logo-192.png` y `assets/logo-512.png` — iconos PWA.
- `assets/apple-touch-icon.png` y `assets/favicon-64.png` — íconos para dispositivos y navegador.
- `site.webmanifest` — metadata de instalación web app.

Intro de marca:

- Se añadió una transición inicial usando `VideoTransicionEliteCompany.MP4` + logo.
- Incluye botón "Saltar intro".
- Por UX, la intro se muestra una sola vez por sesión de navegador.

Notas:

- Si usas MAMP en Windows/macOS y el `mail()` no está configurado localmente, el endpoint devolverá éxito para propósitos de demo. En producción debes integrar SMTP real.
# EliteCompany
