/**
 * APA — Mapa de Delegados Regionales
 * Los datos vienen de _data/delegados.csv (la página los inserta como JSON en
 * <script id="delegados-data">). Las tarjetas se generan en la página con Liquid.
 *
 * - Hover sobre un marcador: el pin se reemplaza por la foto y aparece, debajo,
 *   la institución y el correo.
 * - Clic (o toque en celulares): popup con todos los datos de contacto.
 */

document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('delegados-map');
  const dataEl = document.getElementById('delegados-data');
  if (!mapEl || !dataEl || typeof L === 'undefined') return;

  let delegados = [];
  try { delegados = JSON.parse(dataEl.textContent || '[]'); }
  catch (e) { console.error('No se pudo leer delegados.csv:', e); }

  const fotosBase = mapEl.dataset.fotos || '/assets/img/personas/';
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const fotoUrl = (f) => {
    if (!f) return '';
    return /^(https?:)?\/\//.test(f) || f.charAt(0) === '/' ? f : fotosBase + f;
  };

  const PIN_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>';
  const PERSON_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';

  // ── 1. Mapa centrado en Argentina ──────────────────────────────────
  const map = L.map('delegados-map', {
    center: [-38.5, -63.5],
    zoom: 4,
    zoomControl: true,
    scrollWheelZoom: false,   // evitar scroll accidental
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // ── 2. Ícono: pin + foto (el cambio al pasar el mouse es solo CSS) ──
  function createIcon(d) {
    const foto = fotoUrl(d.foto);
    const photo = foto ? `<img src="${esc(foto)}" alt="">` : PERSON_SVG;
    return L.divIcon({
      className: 'apa-marker',
      html: `<span class="apa-marker-pin">${PIN_SVG}</span><span class="apa-marker-photo">${photo}</span>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -18],
      tooltipAnchor: [0, 0],
    });
  }

  // ── 3. Tooltip (hover): institución + correo ───────────────────────
  function buildTooltip(d) {
    return `<strong>${esc(d.institucion)}</strong>${d.email ? `<span>${esc(d.email)}</span>` : ''}`;
  }

  // ── 4. Popup (clic / toque) ────────────────────────────────────────
  function buildPopup(d) {
    const foto = fotoUrl(d.foto);
    const avatar = foto
      ? `<img src="${esc(foto)}" alt="" style="width:56px;height:56px;border-radius:50%;object-fit:cover;
             border:2px solid rgba(232,120,56,0.35);flex-shrink:0;" />`
      : `<div style="width:56px;height:56px;border-radius:50%;background:#F1E9DA;color:#B1B0B5;
             border:2px solid rgba(232,120,56,0.25);display:flex;align-items:center;
             justify-content:center;flex-shrink:0;"><span style="width:26px;height:26px;display:block;">${PERSON_SVG.replace('<svg ', '<svg style="fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;" ')}</span></div>`;
    const lugar = [d.ciudad, d.provincia].filter(Boolean).map(esc).join(', ');
    const email = d.email
      ? `<div style="margin-top:0.5rem;"><a href="mailto:${esc(d.email)}"
            style="font-size:0.75rem;color:#E87838;word-break:break-all;">${esc(d.email)}</a></div>`
      : '';

    return `
      <div style="min-width:220px; max-width:260px;">
        <div style="display:flex;gap:0.75rem;align-items:center;margin-bottom:0.75rem;">
          ${avatar}
          <div>
            <div style="font-family:'PT Serif',serif;font-size:1rem;font-weight:700;color:#090201;line-height:1.2;">${esc(d.nombre)}</div>
            <div style="font-size:0.72rem;color:#584D36;margin-top:0.2rem;">${lugar}</div>
          </div>
        </div>
        <div style="font-size:0.78rem;color:#584D36;margin-bottom:0.4rem;padding-top:0.5rem;border-top:1px solid #BBB7AC;">
          <strong style="color:#090201;">Institución:</strong><br/>${esc(d.institucion)}
        </div>
        ${email}
      </div>`;
  }

  // ── 5. Marcadores ──────────────────────────────────────────────────
  const markers = [];
  delegados.forEach((d) => {
    const lat = parseFloat(d.lat);
    const lon = parseFloat(d.lon);
    if (isNaN(lat) || isNaN(lon)) return;

    const marker = L.marker([lat, lon], { icon: createIcon(d), keyboard: true, title: d.nombre || '' })
      .addTo(map)
      .bindTooltip(buildTooltip(d), { direction: 'bottom', offset: [0, 32], className: 'apa-tooltip', opacity: 1 })
      .bindPopup(buildPopup(d), { maxWidth: 280, className: 'apa-popup' });

    // El marcador con la foto abierta pasa por encima de los vecinos
    marker.on('mouseover', () => marker.setZIndexOffset(1000));
    marker.on('mouseout', () => marker.setZIndexOffset(0));
    markers.push(marker);
  });

  if (markers.length > 0) {
    map.fitBounds(L.featureGroup(markers).getBounds().pad(0.15));
  }

  // ── 6. Estilos del popup ───────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .apa-popup .leaflet-popup-content-wrapper {
      background: #FFFFFF; border: 1px solid #BBB7AC; border-radius: 12px;
      box-shadow: 0 8px 32px rgba(9,2,1,0.18); color: #090201;
      font-family: 'PT Sans', system-ui, sans-serif;
    }
    .apa-popup .leaflet-popup-tip { background: #FFFFFF; }
    .apa-popup .leaflet-popup-close-button { color: #584D36 !important; font-size: 1.1rem !important; }
    .leaflet-container { font-family: 'PT Sans', system-ui, sans-serif; }
  `;
  document.head.appendChild(style);
});