/**
 * APA — Mapa de Delegados Regionales
 * Lee /data/delegados.csv con PapaParse
 * Renderiza marcadores Leaflet + cards de contacto
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Init map centered on Argentina ──────────────────────────────
  const map = L.map('delegados-map', {
    center: [-38.5, -63.5],
    zoom: 4,
    zoomControl: true,
    scrollWheelZoom: false,   // evitar scroll accidental
  });

  // Light tile layer (CartoDB Voyager) — coherente con la identidad clara del sitio
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // ── 2. Custom marker icon ────────────────────────────────────────────
  function createIcon(hasPhoto) {
    return L.divIcon({
      className: '',
      html: `
        <div style="
          width: 28px; height: 28px;
          background: #E87838;
          border: 2px solid #FFFFFF;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(232,120,56,0.2), 0 4px 12px rgba(9,2,1,0.25);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.2s;
        ">
          <svg width="12" height="12" fill="#FFFFFF" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -18],
    });
  }

  // ── 3. Popup HTML ────────────────────────────────────────────────────
  function buildPopup(d) {
    const foto = d.foto_url
      ? `<img src="${d.foto_url}" alt="${d.nombre}"
             style="width:56px;height:56px;border-radius:50%;object-fit:cover;
                    border:2px solid rgba(232,120,56,0.35);flex-shrink:0;" />`
      : `<div style="width:56px;height:56px;border-radius:50%;background:#F1E9DA;
                     border:2px solid rgba(232,120,56,0.25);display:flex;
                     align-items:center;justify-content:center;font-size:1.4rem;
                     flex-shrink:0;">🔬</div>`;

    const email = d.email
      ? `<a href="mailto:${d.email}"
            style="font-size:0.75rem;color:#E87838;word-break:break-all;">${d.email}</a>`
      : '';

    return `
      <div style="min-width:220px; max-width:260px;">
        <div style="display:flex;gap:0.75rem;align-items:center;margin-bottom:0.75rem;">
          ${foto}
          <div>
            <div style="font-family:'PT Serif',serif;font-size:1rem;
                        font-weight:700;color:#090201;line-height:1.2;">${d.nombre}</div>
            <div style="font-size:0.72rem;color:#584D36;margin-top:0.2rem;">
              ${d.ciudad}, ${d.provincia}
            </div>
          </div>
        </div>
        <div style="font-size:0.78rem;color:#584D36;margin-bottom:0.4rem;
                    padding-top:0.5rem;border-top:1px solid #BBB7AC;">
          <strong style="color:#090201;">Institución:</strong><br/>
          ${d.institucion}
        </div>
        ${email ? `<div style="margin-top:0.5rem;">${email}</div>` : ''}
      </div>`;
  }

  // ── 4. Card HTML ─────────────────────────────────────────────────────
  function buildCard(d) {
    const foto = d.foto_url
      ? `<img src="${d.foto_url}" alt="${d.nombre}"
             style="width:48px;height:48px;border-radius:50%;object-fit:cover;
                    border:2px solid rgba(232,120,56,0.3);flex-shrink:0;" />`
      : `<div style="width:48px;height:48px;border-radius:50%;background:var(--bg-subtle);
                     border:2px solid var(--border);display:flex;align-items:center;
                     justify-content:center;font-size:1.2rem;flex-shrink:0;">🔬</div>`;

    const emailLink = d.email
      ? `<a href="mailto:${d.email}"
            style="font-size:0.78rem;color:var(--green);word-break:break-all;">${d.email}</a>`
      : '<span style="font-size:0.78rem;color:var(--text-dim);">Sin email registrado</span>';

    return `
      <div class="card">
        <div class="card-body">
          <div style="display:flex;gap:0.75rem;align-items:flex-start;margin-bottom:1rem;">
            ${foto}
            <div>
              <div class="card-title" style="font-size:1rem;margin-bottom:0.15rem;">${d.nombre}</div>
              <div style="font-family:var(--font-mono);font-size:0.65rem;color:var(--green);
                          letter-spacing:0.08em;text-transform:uppercase;">
                ${d.provincia}
              </div>
            </div>
          </div>
          <div style="font-size:0.82rem;color:var(--text-mid);margin-bottom:0.5rem;">
            <strong style="color:var(--text-dim);font-size:0.7rem;
                           text-transform:uppercase;letter-spacing:0.08em;">Institución</strong><br/>
            ${d.institucion}
          </div>
          <div style="font-size:0.82rem;color:var(--text-dim);margin-bottom:0.75rem;">📍 ${d.ciudad}</div>
          ${emailLink}
        </div>
      </div>`;
  }

  // ── 5. Load CSV ──────────────────────────────────────────────────────
  const csvPath = window.location.origin +
    (window.location.pathname.includes('/apa') ? '/apa' : '') +
    '/data/delegados.csv';

  Papa.parse(csvPath, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const delegados = results.data;
      const cardsContainer = document.getElementById('delegados-cards');
      cardsContainer.innerHTML = '';

      const markers = [];

      delegados.forEach((d) => {
        const lat = parseFloat(d.lat);
        const lon = parseFloat(d.lon);
        if (isNaN(lat) || isNaN(lon)) return;

        // Marker
        const marker = L.marker([lat, lon], { icon: createIcon(!!d.foto_url) })
          .addTo(map)
          .bindPopup(buildPopup(d), {
            maxWidth: 280,
            className: 'apa-popup',
          });

        markers.push(marker);

        // Card
        cardsContainer.innerHTML += buildCard(d);
      });

      // Fit bounds if we have markers
      if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.15));
      }
    },
    error: (err) => {
      console.error('Error cargando delegados.csv:', err);
      document.getElementById('delegados-cards').innerHTML =
        '<p style="color:var(--text-dim);font-size:0.88rem;">Error cargando los datos. Verificá que /data/delegados.csv existe.</p>';
    }
  });

  // ── 6. Popup styles injected ─────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .apa-popup .leaflet-popup-content-wrapper {
      background: #FFFFFF;
      border: 1px solid #BBB7AC;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(9,2,1,0.18);
      color: #090201;
      font-family: 'PT Sans', system-ui, sans-serif;
    }
    .apa-popup .leaflet-popup-tip {
      background: #FFFFFF;
    }
    .apa-popup .leaflet-popup-close-button {
      color: #584D36 !important;
      font-size: 1.1rem !important;
    }
    .leaflet-container {
      font-family: 'PT Sans', system-ui, sans-serif;
    }
  `;
  document.head.appendChild(style);

});
