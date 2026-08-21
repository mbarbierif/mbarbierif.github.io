# Repo status

Generated: Fri Aug 21 15:08:55 -03 2026

## Tree
```
.
├── Gemfile
├── README.md
├── _config.yml
├── _includes
│   ├── footer.html
│   └── navbar.html
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts
│   ├── 2025-01-23-ecologia-parasitaria-2025.md
│   ├── 2025-04-09-x-cap-cronograma.md
│   └── 2026-06-01-jornada-sevicha.md
├── assets
│   ├── css
│   │   └── main.css
│   ├── img
│   │   └── favicon.svg
│   └── js
│       ├── main.js
│       └── map.js
├── data
│   └── delegados.csv
├── index.html
├── main.css
└── pages
    ├── actividades.html
    ├── asociacion.html
    ├── asociate.html
    ├── delegados.html
    ├── eventos.html
    └── revista.html

10 directories, 24 files
```

## Files

### `Gemfile`

```
source "https://rubygems.org"

gem "jekyll", "~> 3.9"
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
end

```

### `README.md`

```markdown
# Sitio Web — Asociación Parasitológica Argentina

Sitio estático generado con [Jekyll](https://jekyllrb.com/) y desplegado automáticamente en GitHub Pages.

---

## 🚀 Configuración inicial (una sola vez)

### 1. Crear el repositorio en GitHub

1. Entrá a [github.com](https://github.com) con la cuenta institucional de la APA
2. Clic en **"New repository"**
3. Nombre: `apargentina.github.io` (o el que corresponda)
4. Marcá **"Public"**
5. Clic en **"Create repository"**

### 2. Subir estos archivos

1. En el repositorio vacío, clic en **"uploading an existing file"**
2. Arrastrá todos los archivos de este proyecto
3. Clic en **"Commit changes"**

### 3. Activar GitHub Pages

1. Ir a **Settings** → **Pages**
2. En "Source" elegir **"Deploy from a branch"**
3. Branch: **`main`** / folder: **`/ (root)`**
4. Clic en **Save**

En 1-2 minutos el sitio estará en `https://apargentina.github.io`

### 4. Conectar el dominio propio

1. En **Settings** → **Pages** → **Custom domain**
2. Escribir: `apargentina.org.ar`
3. Clic en Save
4. En el panel DNS del dominio, agregar un registro CNAME:
   - Tipo: `CNAME`
   - Nombre: `www`
   - Valor: `apargentina.github.io`

---

## ✏️ Cómo agregar una novedad (sin terminal)

1. Ir al repositorio en GitHub.com
2. Navegar a la carpeta **`_posts/`**
3. Clic en **"Add file"** → **"Create new file"**
4. Nombrar el archivo así: `YYYY-MM-DD-titulo-breve.md`
   - Ejemplo: `2026-07-15-apertura-convocatoria-becas.md`
5. Pegar este encabezado y completarlo:

```yaml
---
layout: post
title: "Título de la novedad"
date: 2026-07-15
categoria: convocatoria
imagen: /assets/img/noticias/mi-imagen.jpg
excerpt: "Breve descripción que aparece en las tarjetas del listado."
---

Texto de la novedad en Markdown...

## Subtítulo opcional

Más contenido.
```

6. Clic en **"Commit changes"** → el sitio se actualiza solo en ~1 minuto

### Categorías disponibles

| Valor | Dónde aparece |
|-------|--------------|
| `convocatoria` | Página Eventos → sección Convocatorias abiertas |
| `congreso` | Página Eventos → sección Congresos |
| `curso` | Página Eventos → novedades generales |
| `charla` | Página Actividades → Parasitología en la Nube |
| `conversatorio` | Página Actividades → Conversatorios |
| `arte` | Página Actividades → Arte y Ciencia |

---

## 🗺️ Actualizar el mapa de delegados

El mapa lee el archivo **`data/delegados.csv`**.

### Editar desde GitHub web

1. Navegar a `data/delegados.csv`
2. Clic en el ícono ✏️ (Edit)
3. Agregar o modificar filas respetando el formato:

```
nombre,institucion,ciudad,provincia,lat,lon,email,foto_url
Dra. María García,CONICET - CENPAT,Puerto Madryn,Chubut,-42.7682,-65.0385,garcia@cenpat.edu.ar,
```

### Columnas

| Columna | Descripción | Obligatorio |
|---------|-------------|-------------|
| `nombre` | Nombre completo con título | ✅ |
| `institucion` | Nombre de la institución | ✅ |
| `ciudad` | Ciudad | ✅ |
| `provincia` | Provincia | ✅ |
| `lat` | Latitud (decimal, negativa para Argentina) | ✅ |
| `lon` | Longitud (decimal, negativa para Argentina) | ✅ |
| `email` | Email de contacto | Opcional |
| `foto_url` | Ruta a la foto (ej: `/assets/img/delegados/garcia.jpg`) | Opcional |

### Obtener coordenadas

Buscá la ciudad en [Google Maps](https://maps.google.com), clic derecho → "¿Qué hay aquí?" → copiar las coordenadas.

---

## 📁 Estructura de carpetas

```
apa-site/
│
├── _config.yml          ← Configuración global (título, email, nav)
├── _layouts/            ← Plantillas HTML base
├── _includes/           ← Componentes reutilizables (navbar, footer)
├── _posts/              ← ⭐ Novedades y noticias (formato YYYY-MM-DD-slug.md)
│
├── assets/
│   ├── css/main.css     ← Estilos (no modificar salvo cambios de diseño)
│   ├── js/main.js       ← JavaScript global
│   ├── js/map.js        ← Lógica del mapa de delegados
│   └── img/             ← Imágenes (noticias, delegados, hero)
│
├── data/
│   └── delegados.csv    ← ⭐ Datos del mapa (editar para actualizar)
│
├── pages/               ← Páginas estáticas
│   ├── asociacion.html
│   ├── revista.html
│   ├── actividades.html
│   ├── eventos.html
│   ├── delegados.html
│   └── asociate.html
│
└── index.html           ← Página de inicio
```

---

## 🖼️ Agregar imágenes a noticias

1. Subir la imagen a `assets/img/noticias/` (desde GitHub: Add file → Upload files)
2. Referenciarla en el post:

```yaml
imagen: /assets/img/noticias/nombre-archivo.jpg
```

Tamaño recomendado: **1200 × 630 px**, formato JPG o WebP.

---

## 🔧 Desarrollo local (opcional, para el equipo técnico)

```bash
# Instalar dependencias
bundle install

# Servidor local con recarga automática
bundle exec jekyll serve --livereload

# El sitio queda en http://localhost:4000
```

---

## 📞 Soporte

Ante dudas sobre el sitio, contactar al equipo técnico o abrir un **Issue** en el repositorio de GitHub.

```

### `_config.yml`

```yaml
title: "Asociación Parasitológica Argentina"
description: "Entidad científica sin fines de lucro dedicada a la promoción y difusión de la Parasitología en Argentina y el mundo."
url: "https://apargentina.org.ar"
baseurl: ""

# Build settings
markdown: kramdown
highlighter: rouge
permalink: /:categories/:year/:month/:day/:title/

# Collections
collections:
  posts:
    output: true

# Defaults
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
  - scope:
      path: ""
      type: "pages"
    values:
      layout: "page"

# Plugins (available natively in GitHub Pages)
plugins:
  - jekyll-feed
  - jekyll-sitemap

# Exclude from build
exclude:
  - README.md
  - Gemfile
  - Gemfile.lock
  - node_modules

# Site info
email: info@apargentina.org.ar
twitter: "@APA_Argentina"

# Navigation
nav:
  - title: "La Asociación"
    url: "/asociacion/"
  - title: "Revista"
    url: "/revista/"
  - title: "Actividades"
    url: "/actividades/"
  - title: "Eventos"
    url: "/eventos/"
  - title: "Delegados"
    url: "/delegados/"
  - title: "Asociate"
    url: "/asociate/"

```

### `_includes/footer.html`

```html
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-grid">

      <!-- Brand -->
      <div>
        <div class="footer-brand-title">Asociación Parasitológica Argentina</div>
        <p class="footer-brand-desc">
          Entidad científica sin fines de lucro dedicada a la promoción, difusión y asesoramiento
          en Parasitología con un enfoque multidisciplinario, desde Argentina para el mundo.
        </p>
        <div class="footer-badges">
          <span class="footer-badge">Pers. Jur. 2008</span>
          <span class="footer-badge">CUIT 30-71051474-3</span>
          <span class="footer-badge">Miembro WFP</span>
          <span class="footer-badge">Miembro FLAP</span>
        </div>
      </div>

      <!-- Links -->
      <div>
        <div class="footer-col-title">La Asociación</div>
        <ul class="footer-links">
          <li><a href="{{ '/asociacion/' | relative_url }}">Quiénes somos</a></li>
          <li><a href="{{ '/asociacion/#estatuto' | relative_url }}">Estatuto</a></li>
          <li><a href="{{ '/asociacion/#comision' | relative_url }}">Comisión Directiva</a></li>
          <li><a href="{{ '/delegados/' | relative_url }}">Delegados Regionales</a></li>
          <li><a href="{{ '/asociacion/#convenios' | relative_url }}">Convenios</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-col-title">Ciencia</div>
        <ul class="footer-links">
          <li><a href="{{ '/revista/' | relative_url }}">Revista Arg. de Parasitología</a></li>
          <li><a href="{{ '/actividades/' | relative_url }}">Parasitología en la Nube</a></li>
          <li><a href="{{ '/actividades/#conversatorios' | relative_url }}">Conversatorios</a></li>
          <li><a href="{{ '/actividades/#arte' | relative_url }}">Arte y Ciencia</a></li>
          <li><a href="{{ '/eventos/' | relative_url }}">Congresos</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-col-title">Socios</div>
        <ul class="footer-links">
          <li><a href="{{ '/asociate/' | relative_url }}">Asociate</a></li>
          <li><a href="{{ '/asociate/#aranceles' | relative_url }}">Aranceles</a></li>
          <li><a href="{{ '/eventos/#convocatorias' | relative_url }}">Convocatorias</a></li>
          <li><a href="{{ '/eventos/#becas' | relative_url }}">Becas y Concursos</a></li>
          <li><a href="{{ '/contacto/' | relative_url }}">Contacto</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p class="footer-copy">
        © {{ 'now' | date: "%Y" }} Asociación Parasitológica Argentina.
        Sitio generado con Jekyll y alojado en GitHub Pages.
      </p>
      <div class="footer-legal">
        <a href="{{ '/contacto/' | relative_url }}">Contacto</a>
        <a href="mailto:{{ site.email }}">{{ site.email }}</a>
      </div>
    </div>

  </div>
</footer>

```

### `_includes/navbar.html`

```html
<nav class="navbar">
  <div class="navbar-inner">

    <a href="{{ '/' | relative_url }}" class="navbar-brand">
      <span class="brand-acronym">APA</span>
      <span class="brand-name">Asociación Parasitológica Argentina</span>
    </a>

    <button class="navbar-toggle" id="nav-toggle" aria-label="Abrir menú">☰</button>

    <ul class="navbar-links" id="nav-links">
      {% for item in site.nav %}
        <li>
          <a href="{{ item.url | relative_url }}"
             {% if page.url == item.url %}class="active"{% endif %}>
            {{ item.title }}
          </a>
        </li>
      {% endfor %}
      <li>
        <a href="{{ '/asociate/' | relative_url }}" class="navbar-cta">Asociate</a>
      </li>
    </ul>

  </div>
</nav>

```

### `_layouts/default.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="{{ page.description | default: site.description }}" />
  <title>{% if page.title %}{{ page.title }} — {% endif %}{{ site.title }}</title>

  <!-- Canonical -->
  <link rel="canonical" href="{{ page.url | absolute_url }}" />

  <!-- Styles -->
  <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}" />

  <!-- Leaflet (only loaded if needed) -->
  {% if page.use_map %}
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  {% endif %}

  <!-- Favicon -->
  <link rel="icon" href="{{ '/assets/img/favicon.svg' | relative_url }}" type="image/svg+xml" />
</head>
<body>

  {% include navbar.html %}

  <main>
    {{ content }}
  </main>

  {% include footer.html %}

  <!-- Global JS -->
  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>

  <!-- Leaflet + PapaParse (map pages) -->
  {% if page.use_map %}
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="https://unpkg.com/papaparse@5.4.1/papaparse.min.js"></script>
  <script src="{{ '/assets/js/map.js' | relative_url }}"></script>
  {% endif %}

</body>
</html>

```

### `_layouts/page.html`

```html
---
layout: default
---

<div class="page-header">
  <div class="page-header-inner fade-up">
    {% if page.label %}<div class="section-label">{{ page.label }}</div>{% endif %}
    <h1 class="page-header-title">{{ page.title }}</h1>
    {% if page.description %}
    <p class="page-header-desc">{{ page.description }}</p>
    {% endif %}
  </div>
</div>

{{ content }}

```

### `_layouts/post.html`

```html
---
layout: default
---

<div class="page-header">
  <div class="page-header-inner">
    <div class="section-label">
      {% if page.categoria %}{{ page.categoria }}{% else %}Novedad{% endif %}
    </div>
    <h1 class="page-header-title">{{ page.title }}</h1>
    <p class="page-header-desc">
      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);">
        {{ page.date | date: "%d de %B de %Y" }}
      </span>
      {% if page.autor %}
        <span style="color: var(--text-dim); margin-left: 1rem;">por {{ page.autor }}</span>
      {% endif %}
    </p>
  </div>
</div>

<div class="section">
  <div class="section-inner">
    <div style="display: grid; grid-template-columns: 1fr 280px; gap: 4rem; align-items: start;">

      <!-- Content -->
      <article class="post-content">
        {% if page.imagen %}
        <img src="{{ page.imagen | relative_url }}" alt="{{ page.title }}" style="width:100%; border-radius: 12px; margin-bottom: 2rem;" />
        {% endif %}
        {{ content }}
      </article>

      <!-- Sidebar -->
      <aside style="position: sticky; top: 80px;">
        <div class="card">
          <div class="card-body">
            <div class="section-label" style="margin-bottom: 1rem;">En esta página</div>
            <nav id="toc" style="font-size: 0.85rem; color: var(--text-mid); line-height: 2;">
              <!-- auto-generated by JS -->
            </nav>
          </div>
        </div>

        <div class="card" style="margin-top: 1rem;">
          <div class="card-body">
            <div class="section-label" style="margin-bottom: 1rem;">Compartir</div>
            <div style="display: flex; gap: 0.5rem;">
              <a href="https://twitter.com/intent/tweet?url={{ page.url | absolute_url }}&text={{ page.title | uri_escape }}"
                 target="_blank"
                 style="font-size: 0.8rem; color: var(--text-dim); border: 1px solid var(--border); border-radius: 8px; padding: 0.4rem 0.75rem; transition: all 0.2s;"
                 onmouseover="this.style.borderColor='var(--green)'; this.style.color='var(--green)'"
                 onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text-dim)'">
                Twitter/X
              </a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url={{ page.url | absolute_url }}"
                 target="_blank"
                 style="font-size: 0.8rem; color: var(--text-dim); border: 1px solid var(--border); border-radius: 8px; padding: 0.4rem 0.75rem; transition: all 0.2s;"
                 onmouseover="this.style.borderColor='var(--green)'; this.style.color='var(--green)'"
                 onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text-dim)'">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <a href="{{ '/eventos/' | relative_url }}" class="btn btn-secondary" style="width: 100%; justify-content: center; margin-top: 1rem;">
          ← Volver a novedades
        </a>
      </aside>
    </div>
  </div>
</div>

<script>
  // Auto-generate table of contents
  document.addEventListener('DOMContentLoaded', () => {
    const toc = document.getElementById('toc');
    const headings = document.querySelectorAll('.post-content h2, .post-content h3');
    if (headings.length < 2) { toc.closest('.card').style.display = 'none'; return; }
    headings.forEach((h, i) => {
      const id = 'heading-' + i;
      h.id = id;
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent;
      a.style.cssText = `display:block; color:var(--text-dim); text-decoration:none; padding-left:${h.tagName==='H3'?'1rem':'0'}; font-size:${h.tagName==='H3'?'0.78rem':'0.85rem'};`;
      a.addEventListener('mouseenter', () => a.style.color = 'var(--green)');
      a.addEventListener('mouseleave', () => a.style.color = 'var(--text-dim)');
      toc.appendChild(a);
    });
  });
</script>

```

### `_posts/2025-01-23-ecologia-parasitaria-2025.md`

```markdown
---
layout: post
title: "Curso: Ecología Parasitaria Aplicada 2025"
date: 2025-01-23
categoria: curso
excerpt: "Inscripciones abiertas para el curso de posgrado Ecología Parasitaria Aplicada, edición 2025."
---

Se encuentran abiertas las inscripciones para el curso de posgrado **Ecología Parasitaria Aplicada**, edición 2025.

## Sobre el curso

El curso aborda los fundamentos teóricos y metodológicos de la ecología parasitaria, incluyendo el análisis de comunidades de parásitos, ecología de la transmisión, modelos epidemiológicos y herramientas estadísticas para el análisis de datos parasitológicos.

## Destinatarios

Estudiantes de posgrado, investigadores y profesionales interesados en la ecología de las interacciones hospedador-parásito.

## Carga horaria y modalidad

- **Duración:** 40 horas
- **Modalidad:** Presencial / virtual (híbrida)
- **Acreditación:** Posgrado reconocido por CONEAU

## Inscripciones

Los socios/as activos de la APA tienen prioridad de inscripción y aranceles reducidos. Para inscribirte escribí a [info@apargentina.org.ar](mailto:info@apargentina.org.ar).

```

### `_posts/2025-04-09-x-cap-cronograma.md`

```markdown
---
layout: post
title: "X Congreso Argentino de Parasitología — Cronograma definitivo"
date: 2025-04-09
categoria: congreso
imagen: /assets/img/noticias/x-cap.jpg
excerpt: "Ya está disponible el cronograma definitivo del X Congreso Argentino de Parasitología."
---

El **X Congreso Argentino de Parasitología (X CAP)** ya cuenta con su cronograma definitivo de actividades.

## Información general

El X CAP es el evento científico más importante de la parasitología argentina, con una convocatoria bienal que reúne a investigadores, docentes, estudiantes y profesionales de todo el país y de América Latina.

## Cronograma de actividades

El programa incluye conferencias plenarias, simposios temáticos, presentación de trabajos libres (orales y pósters), cursos pre-congreso y actividades sociales.

Para acceder al cronograma completo y al libro de resúmenes, consultá el sitio oficial del congreso.

## Inscripción y aranceles

Las inscripciones para socios activos de la APA tienen un descuento significativo. Para más información sobre aranceles y modalidades de pago, contactá a la secretaría de la APA.

```

### `_posts/2026-06-01-jornada-sevicha.md`

```markdown
---
layout: post
title: "II Jornada Federal SeVICha – Chagas congénito y en embarazadas"
date: 2026-06-01
categoria: convocatoria
imagen: /assets/img/noticias/sevicha-2026.jpg
excerpt: "La segunda edición de la Jornada Federal SeVICha aborda el Chagas congénito y en embarazadas con un enfoque integral y federal."
---

La **II Jornada Federal "SeVICha"** tiene como foco el abordaje integral del Chagas congénito y en embarazadas, reuniendo a profesionales de salud, investigadores y decisores de política sanitaria de todo el país.

## Sobre la jornada

Esta jornada propone un espacio de intercambio entre especialistas en enfermedad de Chagas, neonatólogos, obstetras, parasitólogos y trabajadores de la salud pública para abordar de manera integral la problemática del Chagas congénito en Argentina.

## Temario

- Situación epidemiológica actual del Chagas congénito en Argentina
- Protocolos de detección y seguimiento en embarazadas
- Tratamiento en niños y niñas con Chagas congénito
- Experiencias regionales y federales

## Inscripción

Las inscripciones son libres y gratuitas para socios/as de la APA. Para más información escribí a [info@apargentina.org.ar](mailto:info@apargentina.org.ar).

```

### `assets/css/main.css`

```css
/* =============================================
   APA — Asociación Parasitológica Argentina
   Design System: Scientific Dark + Organic
   Fonts: Cormorant Garamond (display) + DM Sans (body)
   ============================================= */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

/* ── Variables ── */
:root {
  --bg:         #0d1117;
  --bg-card:    #131920;
  --bg-subtle:  #1a2330;
  --border:     rgba(100, 160, 120, 0.15);
  --border-mid: rgba(100, 160, 120, 0.3);

  --green:      #6db88a;
  --green-light:#9dd4b2;
  --green-dim:  rgba(109, 184, 138, 0.12);
  --amber:      #c9a84c;
  --amber-dim:  rgba(201, 168, 76, 0.12);

  --text:       #e8ede9;
  --text-mid:   #9aab9e;
  --text-dim:   #5a6b60;

  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'DM Mono', monospace;

  --radius:   8px;
  --radius-lg: 16px;
  --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow:   0 4px 24px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 48px rgba(0,0,0,0.6);
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: var(--green); text-decoration: none; transition: color var(--transition); }
a:hover { color: var(--green-light); }

/* ── Noise texture overlay ── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
}

/* ── Navbar ── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13, 17, 23, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
}
.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}
.navbar-brand .brand-acronym {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--green);
  letter-spacing: 0.04em;
}
.navbar-brand .brand-name {
  font-size: 0.72rem;
  color: var(--text-mid);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.3;
  max-width: 160px;
}
.navbar-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
}
.navbar-links a {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-mid);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius);
  transition: all var(--transition);
}
.navbar-links a:hover,
.navbar-links a.active {
  color: var(--green-light);
  background: var(--green-dim);
}
.navbar-cta {
  font-size: 0.82rem !important;
  font-weight: 600 !important;
  color: var(--bg) !important;
  background: var(--green) !important;
  padding: 0.4rem 1rem !important;
  border-radius: 99px !important;
}
.navbar-cta:hover {
  background: var(--green-light) !important;
  color: var(--bg) !important;
}
.navbar-toggle {
  display: none;
  background: none;
  border: 1px solid var(--border-mid);
  color: var(--text);
  padding: 0.4rem 0.6rem;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1.1rem;
}

/* ── Hero ── */
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 6rem 2rem;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 70% 50%, rgba(109,184,138,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 50%),
    var(--bg);
}
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(109,184,138,0.12) 0%, transparent 70%);
  right: -100px; top: -100px;
  animation: orbFloat 12s ease-in-out infinite;
}
.hero-orb-2 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
  left: 10%; bottom: 10%;
  animation: orbFloat 16s ease-in-out infinite reverse;
}
@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -30px) scale(1.05); }
}
.hero-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.hero-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--green);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.hero-label::before {
  content: '';
  width: 24px; height: 1px;
  background: var(--green);
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 1.5rem;
}
.hero-title em {
  font-style: italic;
  color: var(--green-light);
}
.hero-subtitle {
  font-size: 1.05rem;
  color: var(--text-mid);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 480px;
}
.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 99px;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
  border: none;
  text-decoration: none;
}
.btn-primary {
  background: var(--green);
  color: var(--bg);
}
.btn-primary:hover {
  background: var(--green-light);
  color: var(--bg);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(109,184,138,0.3);
}
.btn-secondary {
  background: transparent;
  color: var(--text-mid);
  border: 1px solid var(--border-mid);
}
.btn-secondary:hover {
  border-color: var(--green);
  color: var(--green);
  background: var(--green-dim);
}
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-top: 3rem;
}
.hero-stat {
  background: var(--bg-card);
  padding: 1.5rem;
  text-align: center;
}
.hero-stat-num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 600;
  color: var(--green-light);
  line-height: 1;
}
.hero-stat-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.3rem;
}
.hero-visual {
  position: relative;
}
.hero-image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.75rem;
}
.hero-image-cell {
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-image-cell:first-child {
  grid-row: span 2;
  aspect-ratio: auto;
}
.hero-image-cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity var(--transition);
}
.hero-image-cell:hover img { opacity: 1; }
.hero-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-align: center;
  padding: 1rem;
  min-height: 120px;
}
.hero-image-placeholder svg {
  opacity: 0.4;
}

/* ── Section layout ── */
.section {
  padding: 5rem 2rem;
  position: relative;
}
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.section-header {
  margin-bottom: 3rem;
}
.section-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--green);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 300;
  color: var(--text);
  line-height: 1.2;
}
.section-title em { font-style: italic; color: var(--green-light); }
.section-divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 5rem auto;
  max-width: 1200px;
}

/* ── Cards ── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition);
}
.card:hover {
  border-color: var(--border-mid);
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}
.card-body { padding: 1.75rem; }
.card-tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--amber);
  background: var(--amber-dim);
  border: 1px solid rgba(201,168,76,0.2);
  border-radius: 99px;
  padding: 0.2rem 0.6rem;
  display: inline-block;
  margin-bottom: 0.75rem;
}
.card-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--text);
  line-height: 1.3;
  margin-bottom: 0.6rem;
}
.card-date {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-dim);
  margin-bottom: 0.75rem;
}
.card-excerpt {
  font-size: 0.88rem;
  color: var(--text-mid);
  line-height: 1.7;
}
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--green);
  margin-top: 1rem;
  transition: gap var(--transition);
}
.card-link:hover { gap: 0.7rem; color: var(--green-light); }

/* ── Grid layouts ── */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 1.5rem;
}

/* ── News section ── */
.news-featured {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.news-featured .card:first-child .card-title {
  font-size: 1.6rem;
}

/* ── Quick links ── */
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.quick-link {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: var(--text);
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.quick-link:hover {
  border-color: var(--green);
  background: var(--green-dim);
  color: var(--text);
  transform: translateY(-2px);
}
.quick-link-icon {
  width: 48px; height: 48px;
  background: var(--green-dim);
  border: 1px solid var(--border-mid);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  transition: all var(--transition);
}
.quick-link:hover .quick-link-icon {
  background: var(--green);
}
.quick-link-label {
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

/* ── Map page ── */
.map-container {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}
#delegados-map {
  height: 600px;
  width: 100%;
  background: var(--bg-subtle);
}

/* ── Page header ── */
.page-header {
  padding: 5rem 2rem 3rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
}
.page-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 100% at 80% 50%, rgba(109,184,138,0.05) 0%, transparent 60%);
  pointer-events: none;
}
.page-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.page-header-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 0.75rem;
}
.page-header-title em { font-style: italic; color: var(--green-light); }
.page-header-desc {
  font-size: 1rem;
  color: var(--text-mid);
  max-width: 600px;
  line-height: 1.7;
}

/* ── Post content ── */
.post-content {
  max-width: 720px;
}
.post-content h2 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--text);
  margin: 2.5rem 0 1rem;
}
.post-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--green-light);
  margin: 2rem 0 0.75rem;
}
.post-content p { margin-bottom: 1.25rem; color: var(--text-mid); }
.post-content ul, .post-content ol {
  margin: 0 0 1.25rem 1.5rem;
  color: var(--text-mid);
}
.post-content li { margin-bottom: 0.4rem; }
.post-content img {
  border-radius: var(--radius);
  border: 1px solid var(--border);
  margin: 2rem 0;
}
.post-content a { color: var(--green); text-decoration: underline; }
.post-content blockquote {
  border-left: 3px solid var(--green);
  padding-left: 1.5rem;
  margin: 2rem 0;
  color: var(--text-mid);
  font-style: italic;
}

/* ── Asociate page ── */
.membership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.membership-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: all var(--transition);
}
.membership-card.featured {
  border-color: var(--green);
  background: linear-gradient(135deg, var(--bg-card), rgba(109,184,138,0.05));
}
.membership-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}
.membership-type {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 0.75rem;
}
.membership-price {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1;
  margin-bottom: 0.3rem;
}
.membership-period {
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-bottom: 1.5rem;
}
.membership-features {
  list-style: none;
  margin-bottom: 1.75rem;
}
.membership-features li {
  font-size: 0.85rem;
  color: var(--text-mid);
  padding: 0.4rem 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
}
.membership-features li::before {
  content: '✓';
  color: var(--green);
  font-weight: 600;
  flex-shrink: 0;
}

/* ── Footer ── */
.footer {
  border-top: 1px solid var(--border);
  padding: 3rem 2rem 2rem;
  margin-top: 4rem;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}
.footer-brand-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--green-light);
  margin-bottom: 0.5rem;
}
.footer-brand-desc {
  font-size: 0.82rem;
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}
.footer-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.footer-badge {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
}
.footer-col-title {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-mid);
  margin-bottom: 1rem;
}
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-links a {
  font-size: 0.85rem;
  color: var(--text-dim);
  transition: color var(--transition);
}
.footer-links a:hover { color: var(--green); }
.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-copy {
  font-size: 0.78rem;
  color: var(--text-dim);
}
.footer-legal {
  display: flex;
  gap: 1.5rem;
}
.footer-legal a {
  font-size: 0.78rem;
  color: var(--text-dim);
}

/* ── Utilities ── */
.text-center { text-align: center; }
.text-green { color: var(--green); }
.text-amber { color: var(--amber); }
.mt-2 { margin-top: 2rem; }
.mt-3 { margin-top: 3rem; }

/* ── Animations ── */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp 0.6s ease forwards;
}
@keyframes fadeUp {
  to { opacity: 1; transform: none; }
}
.fade-up:nth-child(1) { animation-delay: 0.1s; }
.fade-up:nth-child(2) { animation-delay: 0.2s; }
.fade-up:nth-child(3) { animation-delay: 0.3s; }
.fade-up:nth-child(4) { animation-delay: 0.4s; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-content { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  .news-featured { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .navbar-links { display: none; }
  .navbar-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px; left: 0; right: 0;
    background: rgba(13,17,23,0.97);
    border-bottom: 1px solid var(--border);
    padding: 1rem;
    z-index: 99;
  }
  .navbar-toggle { display: block; }
  .navbar { position: relative; }
  .footer-grid { grid-template-columns: 1fr; }
  .hero { padding: 4rem 1.25rem; }
  .section { padding: 3.5rem 1.25rem; }
}

```

### `assets/img/favicon.svg`

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#0d1117"/>
  <text x="16" y="23" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#6db88a" text-anchor="middle">A</text>
</svg>

```

### `assets/js/main.js`

```javascript
// APA — main.js

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile navbar toggle ──────────────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  // ── Intersection Observer for fade-up animations ──────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // ── Active nav link ───────────────────────────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar-links a').forEach(a => {
    if (a.getAttribute('href') === currentPath) {
      a.classList.add('active');
    }
  });

});

```

### `assets/js/map.js`

```javascript
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

  // Dark tile layer (CartoDB Dark Matter)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
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
          background: #6db88a;
          border: 2px solid #9dd4b2;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(109,184,138,0.2), 0 4px 12px rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.2s;
        ">
          <svg width="12" height="12" fill="#0d1117" viewBox="0 0 24 24">
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
                    border:2px solid rgba(109,184,138,0.4);flex-shrink:0;" />`
      : `<div style="width:56px;height:56px;border-radius:50%;background:#1a2330;
                     border:2px solid rgba(109,184,138,0.2);display:flex;
                     align-items:center;justify-content:center;font-size:1.4rem;
                     flex-shrink:0;">🔬</div>`;

    const email = d.email
      ? `<a href="mailto:${d.email}"
            style="font-size:0.75rem;color:#6db88a;word-break:break-all;">${d.email}</a>`
      : '';

    return `
      <div style="min-width:220px; max-width:260px;">
        <div style="display:flex;gap:0.75rem;align-items:center;margin-bottom:0.75rem;">
          ${foto}
          <div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:1rem;
                        font-weight:600;color:#e8ede9;line-height:1.2;">${d.nombre}</div>
            <div style="font-size:0.72rem;color:#9aab9e;margin-top:0.2rem;">
              ${d.ciudad}, ${d.provincia}
            </div>
          </div>
        </div>
        <div style="font-size:0.78rem;color:#9aab9e;margin-bottom:0.4rem;
                    padding-top:0.5rem;border-top:1px solid rgba(100,160,120,0.15);">
          <strong style="color:#e8ede9;">Institución:</strong><br/>
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
                    border:2px solid rgba(109,184,138,0.3);flex-shrink:0;" />`
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
      background: #131920;
      border: 1px solid rgba(100,160,120,0.2);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.6);
      color: #e8ede9;
      font-family: 'DM Sans', system-ui, sans-serif;
    }
    .apa-popup .leaflet-popup-tip {
      background: #131920;
    }
    .apa-popup .leaflet-popup-close-button {
      color: #9aab9e !important;
      font-size: 1.1rem !important;
    }
    .leaflet-container {
      font-family: 'DM Sans', system-ui, sans-serif;
    }
  `;
  document.head.appendChild(style);

});

```

### `data/delegados.csv`

_Skipped: binary file_

### `index.html`

```html
---
layout: default
title: "Inicio"
description: "Asociación científica sin fines de lucro dedicada a la Parasitología en Argentina"
---

<!-- ═══════════════════════════════════════
     HERO
═══════════════════════════════════════ -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>

  <div class="hero-content">
    <div class="hero-text">
      <div class="hero-label fade-up">Desde 2008 · Ciencia Argentina</div>
      <h1 class="hero-title fade-up">
        Parasitología<br>
        <em>con enfoque</em><br>
        multidisciplinario
      </h1>
      <p class="hero-subtitle fade-up">
        La APA convoca a especialistas en parasitología y disciplinas afines
        para promover la investigación, difusión e intercambio científico
        a nivel nacional e internacional.
      </p>
      <div class="hero-actions fade-up">
        <a href="{{ '/asociate/' | relative_url }}" class="btn btn-primary">
          Asociate →
        </a>
        <a href="{{ '/revista/' | relative_url }}" class="btn btn-secondary">
          Revista Científica
        </a>
      </div>

      <div class="hero-stats fade-up">
        <div class="hero-stat">
          <div class="hero-stat-num">+500</div>
          <div class="hero-stat-label">Socios</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">10</div>
          <div class="hero-stat-label">Congresos</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">18</div>
          <div class="hero-stat-label">Provincias</div>
        </div>
      </div>
    </div>

    <div class="hero-visual fade-up">
      <div class="hero-image-grid">
        <div class="hero-image-cell">
          <!-- Reemplazar con imagen real: assets/img/hero-1.jpg -->
          <div class="hero-image-placeholder">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Imagen microscópica<br/>assets/img/hero-1.jpg
          </div>
        </div>
        <div class="hero-image-cell">
          <div class="hero-image-placeholder">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            assets/img/hero-2.jpg
          </div>
        </div>
        <div class="hero-image-cell">
          <div class="hero-image-placeholder">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            assets/img/hero-3.jpg
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════
     QUICK LINKS
═══════════════════════════════════════ -->
<section class="section" style="padding-top: 2rem; padding-bottom: 3rem;">
  <div class="section-inner">
    <div class="quick-links">
      <a href="{{ '/revista/' | relative_url }}" class="quick-link">
        <div class="quick-link-icon">📄</div>
        <div class="quick-link-label">Revista Arg. de Parasitología</div>
      </a>
      <a href="{{ '/eventos/#convocatorias' | relative_url }}" class="quick-link">
        <div class="quick-link-icon">🏆</div>
        <div class="quick-link-label">Convocatorias Abiertas</div>
      </a>
      <a href="{{ '/actividades/' | relative_url }}" class="quick-link">
        <div class="quick-link-icon">🎙️</div>
        <div class="quick-link-label">Parasitología en la Nube</div>
      </a>
      <a href="{{ '/delegados/' | relative_url }}" class="quick-link">
        <div class="quick-link-icon">🗺️</div>
        <div class="quick-link-label">Mapa de Delegados</div>
      </a>
      <a href="{{ '/asociate/' | relative_url }}" class="quick-link">
        <div class="quick-link-icon">🔬</div>
        <div class="quick-link-label">Asociate a la APA</div>
      </a>
    </div>
  </div>
</section>

<hr class="section-divider" />

<!-- ═══════════════════════════════════════
     ÚLTIMAS NOVEDADES
═══════════════════════════════════════ -->
<section class="section">
  <div class="section-inner">
    <div class="section-header" style="display:flex; justify-content:space-between; align-items:flex-end;">
      <div>
        <div class="section-label">Novedades</div>
        <h2 class="section-title">Últimas <em>publicaciones</em></h2>
      </div>
      <a href="{{ '/eventos/' | relative_url }}" class="btn btn-secondary" style="font-size:0.82rem;">Ver todas →</a>
    </div>

    <!-- Featured + side -->
    <div class="news-featured">
      {% assign latest = site.posts | first %}
      {% if latest %}
      <a href="{{ latest.url | relative_url }}" style="text-decoration:none;">
        <article class="card" style="height:100%;">
          {% if latest.imagen %}
          <img src="{{ latest.imagen | relative_url }}" alt="{{ latest.title }}" style="width:100%; height:220px; object-fit:cover;" />
          {% endif %}
          <div class="card-body">
            {% if latest.categoria %}<span class="card-tag">{{ latest.categoria }}</span>{% endif %}
            <h3 class="card-title" style="font-size:1.5rem;">{{ latest.title }}</h3>
            <div class="card-date">{{ latest.date | date: "%d %b %Y" }}</div>
            <p class="card-excerpt">{{ latest.excerpt | strip_html | truncatewords: 40 }}</p>
            <span class="card-link">Leer más →</span>
          </div>
        </article>
      </a>
      {% endif %}

      <div style="display:flex; flex-direction:column; gap:1rem;">
        {% for post in site.posts offset:1 limit:3 %}
        <a href="{{ post.url | relative_url }}" style="text-decoration:none;">
          <article class="card">
            <div class="card-body" style="padding:1.25rem;">
              {% if post.categoria %}<span class="card-tag">{{ post.categoria }}</span>{% endif %}
              <h3 class="card-title" style="font-size:1rem;">{{ post.title }}</h3>
              <div class="card-date">{{ post.date | date: "%d %b %Y" }}</div>
            </div>
          </article>
        </a>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<hr class="section-divider" />

<!-- ═══════════════════════════════════════
     SOBRE LA APA
═══════════════════════════════════════ -->
<section class="section">
  <div class="section-inner">
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center;">
      <div>
        <div class="section-label">Quiénes somos</div>
        <h2 class="section-title" style="margin-bottom:1.5rem;">
          Una comunidad <em>científica</em><br>de alcance nacional
        </h2>
        <p style="color:var(--text-mid); line-height:1.8; margin-bottom:1.25rem;">
          La Asociación Parasitológica Argentina surge como entidad científica sin fines de lucro con
          Personería Jurídica desde 2008. Convoca a especialistas en parasitología y disciplinas afines,
          expertos en diferentes grupos de hospedadores involucrados en la interacción parasitológica.
        </p>
        <p style="color:var(--text-mid); line-height:1.8; margin-bottom:2rem;">
          Somos miembros de la <strong style="color:var(--text)">World Federation of Parasitologists</strong>
          y de la <strong style="color:var(--text)">Federación Latinoamericana de Parasitología (FLAP)</strong>.
        </p>
        <a href="{{ '/asociacion/' | relative_url }}" class="btn btn-secondary">Conocer más →</a>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
        {% assign highlights = "Investigación,Difusión,Formación,Arte & Ciencia" | split: "," %}
        {% assign icons = "🔬,📡,🎓,🎨" | split: "," %}
        {% for item in highlights %}
        <div class="card fade-up">
          <div class="card-body" style="text-align:center;">
            <div style="font-size:2rem; margin-bottom:0.5rem;">{{ icons[forloop.index0] }}</div>
            <div style="font-weight:600; font-size:0.88rem; color:var(--text);">{{ item }}</div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

```

### `main.css`

```css
/* =============================================
   APA — Asociación Parasitológica Argentina
   Design System: Scientific Dark + Organic
   Fonts: Cormorant Garamond (display) + DM Sans (body)
   ============================================= */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

/* ── Variables ── */
:root {
  --bg:         #0d1117;
  --bg-card:    #131920;
  --bg-subtle:  #1a2330;
  --border:     rgba(100, 160, 120, 0.15);
  --border-mid: rgba(100, 160, 120, 0.3);

  --green:      #6db88a;
  --green-light:#9dd4b2;
  --green-dim:  rgba(109, 184, 138, 0.12);
  --amber:      #c9a84c;
  --amber-dim:  rgba(201, 168, 76, 0.12);

  --text:       #e8ede9;
  --text-mid:   #9aab9e;
  --text-dim:   #5a6b60;

  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'DM Mono', monospace;

  --radius:   8px;
  --radius-lg: 16px;
  --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow:   0 4px 24px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 48px rgba(0,0,0,0.6);
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: var(--green); text-decoration: none; transition: color var(--transition); }
a:hover { color: var(--green-light); }

/* ── Noise texture overlay ── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
}

/* ── Navbar ── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13, 17, 23, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
}
.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}
.navbar-brand .brand-acronym {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--green);
  letter-spacing: 0.04em;
}
.navbar-brand .brand-name {
  font-size: 0.72rem;
  color: var(--text-mid);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.3;
  max-width: 160px;
}
.navbar-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
}
.navbar-links a {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-mid);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius);
  transition: all var(--transition);
}
.navbar-links a:hover,
.navbar-links a.active {
  color: var(--green-light);
  background: var(--green-dim);
}
.navbar-cta {
  font-size: 0.82rem !important;
  font-weight: 600 !important;
  color: var(--bg) !important;
  background: var(--green) !important;
  padding: 0.4rem 1rem !important;
  border-radius: 99px !important;
}
.navbar-cta:hover {
  background: var(--green-light) !important;
  color: var(--bg) !important;
}
.navbar-toggle {
  display: none;
  background: none;
  border: 1px solid var(--border-mid);
  color: var(--text);
  padding: 0.4rem 0.6rem;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1.1rem;
}

/* ── Hero ── */
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 6rem 2rem;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 70% 50%, rgba(109,184,138,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 50%),
    var(--bg);
}
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(109,184,138,0.12) 0%, transparent 70%);
  right: -100px; top: -100px;
  animation: orbFloat 12s ease-in-out infinite;
}
.hero-orb-2 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
  left: 10%; bottom: 10%;
  animation: orbFloat 16s ease-in-out infinite reverse;
}
@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -30px) scale(1.05); }
}
.hero-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.hero-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--green);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.hero-label::before {
  content: '';
  width: 24px; height: 1px;
  background: var(--green);
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 1.5rem;
}
.hero-title em {
  font-style: italic;
  color: var(--green-light);
}
.hero-subtitle {
  font-size: 1.05rem;
  color: var(--text-mid);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 480px;
}
.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 99px;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
  border: none;
  text-decoration: none;
}
.btn-primary {
  background: var(--green);
  color: var(--bg);
}
.btn-primary:hover {
  background: var(--green-light);
  color: var(--bg);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(109,184,138,0.3);
}
.btn-secondary {
  background: transparent;
  color: var(--text-mid);
  border: 1px solid var(--border-mid);
}
.btn-secondary:hover {
  border-color: var(--green);
  color: var(--green);
  background: var(--green-dim);
}
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-top: 3rem;
}
.hero-stat {
  background: var(--bg-card);
  padding: 1.5rem;
  text-align: center;
}
.hero-stat-num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 600;
  color: var(--green-light);
  line-height: 1;
}
.hero-stat-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.3rem;
}
.hero-visual {
  position: relative;
}
.hero-image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.75rem;
}
.hero-image-cell {
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-image-cell:first-child {
  grid-row: span 2;
  aspect-ratio: auto;
}
.hero-image-cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity var(--transition);
}
.hero-image-cell:hover img { opacity: 1; }
.hero-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-align: center;
  padding: 1rem;
  min-height: 120px;
}
.hero-image-placeholder svg {
  opacity: 0.4;
}

/* ── Section layout ── */
.section {
  padding: 5rem 2rem;
  position: relative;
}
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.section-header {
  margin-bottom: 3rem;
}
.section-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--green);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 300;
  color: var(--text);
  line-height: 1.2;
}
.section-title em { font-style: italic; color: var(--green-light); }
.section-divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 5rem auto;
  max-width: 1200px;
}

/* ── Cards ── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition);
}
.card:hover {
  border-color: var(--border-mid);
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}
.card-body { padding: 1.75rem; }
.card-tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--amber);
  background: var(--amber-dim);
  border: 1px solid rgba(201,168,76,0.2);
  border-radius: 99px;
  padding: 0.2rem 0.6rem;
  display: inline-block;
  margin-bottom: 0.75rem;
}
.card-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--text);
  line-height: 1.3;
  margin-bottom: 0.6rem;
}
.card-date {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-dim);
  margin-bottom: 0.75rem;
}
.card-excerpt {
  font-size: 0.88rem;
  color: var(--text-mid);
  line-height: 1.7;
}
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--green);
  margin-top: 1rem;
  transition: gap var(--transition);
}
.card-link:hover { gap: 0.7rem; color: var(--green-light); }

/* ── Grid layouts ── */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 1.5rem;
}

/* ── News section ── */
.news-featured {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.news-featured .card:first-child .card-title {
  font-size: 1.6rem;
}

/* ── Quick links ── */
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.quick-link {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: var(--text);
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.quick-link:hover {
  border-color: var(--green);
  background: var(--green-dim);
  color: var(--text);
  transform: translateY(-2px);
}
.quick-link-icon {
  width: 48px; height: 48px;
  background: var(--green-dim);
  border: 1px solid var(--border-mid);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  transition: all var(--transition);
}
.quick-link:hover .quick-link-icon {
  background: var(--green);
}
.quick-link-label {
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

/* ── Map page ── */
.map-container {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}
#delegados-map {
  height: 600px;
  width: 100%;
  background: var(--bg-subtle);
}

/* ── Page header ── */
.page-header {
  padding: 5rem 2rem 3rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
}
.page-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 100% at 80% 50%, rgba(109,184,138,0.05) 0%, transparent 60%);
  pointer-events: none;
}
.page-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.page-header-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 0.75rem;
}
.page-header-title em { font-style: italic; color: var(--green-light); }
.page-header-desc {
  font-size: 1rem;
  color: var(--text-mid);
  max-width: 600px;
  line-height: 1.7;
}

/* ── Post content ── */
.post-content {
  max-width: 720px;
}
.post-content h2 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--text);
  margin: 2.5rem 0 1rem;
}
.post-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--green-light);
  margin: 2rem 0 0.75rem;
}
.post-content p { margin-bottom: 1.25rem; color: var(--text-mid); }
.post-content ul, .post-content ol {
  margin: 0 0 1.25rem 1.5rem;
  color: var(--text-mid);
}
.post-content li { margin-bottom: 0.4rem; }
.post-content img {
  border-radius: var(--radius);
  border: 1px solid var(--border);
  margin: 2rem 0;
}
.post-content a { color: var(--green); text-decoration: underline; }
.post-content blockquote {
  border-left: 3px solid var(--green);
  padding-left: 1.5rem;
  margin: 2rem 0;
  color: var(--text-mid);
  font-style: italic;
}

/* ── Asociate page ── */
.membership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.membership-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: all var(--transition);
}
.membership-card.featured {
  border-color: var(--green);
  background: linear-gradient(135deg, var(--bg-card), rgba(109,184,138,0.05));
}
.membership-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}
.membership-type {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 0.75rem;
}
.membership-price {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1;
  margin-bottom: 0.3rem;
}
.membership-period {
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-bottom: 1.5rem;
}
.membership-features {
  list-style: none;
  margin-bottom: 1.75rem;
}
.membership-features li {
  font-size: 0.85rem;
  color: var(--text-mid);
  padding: 0.4rem 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
}
.membership-features li::before {
  content: '✓';
  color: var(--green);
  font-weight: 600;
  flex-shrink: 0;
}

/* ── Footer ── */
.footer {
  border-top: 1px solid var(--border);
  padding: 3rem 2rem 2rem;
  margin-top: 4rem;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}
.footer-brand-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--green-light);
  margin-bottom: 0.5rem;
}
.footer-brand-desc {
  font-size: 0.82rem;
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}
.footer-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.footer-badge {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
}
.footer-col-title {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-mid);
  margin-bottom: 1rem;
}
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-links a {
  font-size: 0.85rem;
  color: var(--text-dim);
  transition: color var(--transition);
}
.footer-links a:hover { color: var(--green); }
.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-copy {
  font-size: 0.78rem;
  color: var(--text-dim);
}
.footer-legal {
  display: flex;
  gap: 1.5rem;
}
.footer-legal a {
  font-size: 0.78rem;
  color: var(--text-dim);
}

/* ── Utilities ── */
.text-center { text-align: center; }
.text-green { color: var(--green); }
.text-amber { color: var(--amber); }
.mt-2 { margin-top: 2rem; }
.mt-3 { margin-top: 3rem; }

/* ── Animations ── */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp 0.6s ease forwards;
}
@keyframes fadeUp {
  to { opacity: 1; transform: none; }
}
.fade-up:nth-child(1) { animation-delay: 0.1s; }
.fade-up:nth-child(2) { animation-delay: 0.2s; }
.fade-up:nth-child(3) { animation-delay: 0.3s; }
.fade-up:nth-child(4) { animation-delay: 0.4s; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-content { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  .news-featured { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .navbar-links { display: none; }
  .navbar-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px; left: 0; right: 0;
    background: rgba(13,17,23,0.97);
    border-bottom: 1px solid var(--border);
    padding: 1rem;
    z-index: 99;
  }
  .navbar-toggle { display: block; }
  .navbar { position: relative; }
  .footer-grid { grid-template-columns: 1fr; }
  .hero { padding: 4rem 1.25rem; }
  .section { padding: 3.5rem 1.25rem; }
}

```

### `pages/actividades.html`

```html
---
layout: page
permalink: /actividades/
title: "Actividades <em>Científicas</em>"
label: "Ciencia abierta"
description: "Charlas, conversatorios, arte y ciencia — el espacio de la APA para compartir conocimiento."

---

<section class="section" style="padding-top:0;">
  <div class="section-inner">

    <!-- Parasitología en la Nube -->
    <div id="nube" style="margin-bottom:4rem;">
      <div class="section-label" style="margin-bottom:0.5rem;">Charlas en línea</div>
      <h2 class="section-title" style="margin-bottom:1rem;">Parasitología <em>en la Nube</em></h2>
      <p style="color:var(--text-mid); max-width:640px; margin-bottom:2rem; line-height:1.8;">
        Ciclo de charlas virtuales abiertas a toda la comunidad parasitológica. Investigadores e investigadoras
        de Argentina y el mundo presentan sus líneas de trabajo con acceso libre y gratuito.
      </p>
      <div class="grid-3">
        {% assign charlas = site.posts | where: "categoria", "charla" %}
        {% if charlas.size > 0 %}
          {% for post in charlas limit:6 %}
          <a href="{{ post.url | relative_url }}" style="text-decoration:none;">
            <article class="card fade-up">
              <div class="card-body">
                <span class="card-tag">Charla</span>
                <h3 class="card-title" style="font-size:1rem;">{{ post.title }}</h3>
                <div class="card-date">{{ post.date | date: "%d %b %Y" }}</div>
                {% if post.orador %}<div style="font-size:0.82rem;color:var(--text-dim);">{{ post.orador }}</div>{% endif %}
                <span class="card-link" style="margin-top:0.75rem;">Ver más →</span>
              </div>
            </article>
          </a>
          {% endfor %}
        {% else %}
          <div class="card"><div class="card-body" style="color:var(--text-dim); font-size:0.85rem;">
            Agregá entradas con <code>categoria: charla</code> en <code>_posts/</code> para que aparezcan aquí.
          </div></div>
        {% endif %}
      </div>
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <!-- Conversatorios -->
    <div id="conversatorios" style="margin-bottom:4rem;">
      <div class="section-label" style="margin-bottom:0.5rem;">Debates disciplinares</div>
      <h2 class="section-title" style="margin-bottom:1rem;"><em>Conversatorios</em> Disciplinares</h2>
      <p style="color:var(--text-mid); max-width:640px; margin-bottom:2rem; line-height:1.8;">
        Espacios de debate y discusión profunda sobre problemáticas específicas de la parasitología,
        con un formato dialógico que invita a múltiples voces y perspectivas.
      </p>
      <div class="grid-3">
        {% assign conversatorios = site.posts | where: "categoria", "conversatorio" %}
        {% if conversatorios.size > 0 %}
          {% for post in conversatorios limit:6 %}
          <a href="{{ post.url | relative_url }}" style="text-decoration:none;">
            <article class="card fade-up">
              <div class="card-body">
                <span class="card-tag">Conversatorio</span>
                <h3 class="card-title" style="font-size:1rem;">{{ post.title }}</h3>
                <div class="card-date">{{ post.date | date: "%d %b %Y" }}</div>
                <span class="card-link" style="margin-top:0.75rem;">Ver más →</span>
              </div>
            </article>
          </a>
          {% endfor %}
        {% else %}
          <div class="card"><div class="card-body" style="color:var(--text-dim); font-size:0.85rem;">
            Agregá entradas con <code>categoria: conversatorio</code> en <code>_posts/</code>
          </div></div>
        {% endif %}
      </div>
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <!-- Arte y Ciencia -->
    <div id="arte" style="margin-bottom:2rem;">
      <div class="section-label" style="margin-bottom:0.5rem;">Comisión de Arte y Ciencia</div>
      <h2 class="section-title" style="margin-bottom:1rem;"><em>Arte</em> y Ciencia</h2>
      <p style="color:var(--text-mid); max-width:640px; margin-bottom:2rem; line-height:1.8;">
        La APA explora la intersección entre la práctica científica y la expresión artística.
        El programa incluye calendarios ilustrados, talleres y exposiciones que muestran la belleza
        del mundo parasitológico bajo una mirada creativa.
      </p>
      <div class="grid-3">
        {% assign arte = site.posts | where: "categoria", "arte" %}
        {% if arte.size > 0 %}
          {% for post in arte limit:6 %}
          <a href="{{ post.url | relative_url }}" style="text-decoration:none;">
            <article class="card fade-up">
              {% if post.imagen %}
              <img src="{{ post.imagen | relative_url }}" alt="{{ post.title }}" style="width:100%;height:180px;object-fit:cover;" />
              {% endif %}
              <div class="card-body">
                <span class="card-tag" style="color:var(--amber);background:var(--amber-dim);">Arte y Ciencia</span>
                <h3 class="card-title" style="font-size:1rem;">{{ post.title }}</h3>
                <div class="card-date">{{ post.date | date: "%d %b %Y" }}</div>
                <span class="card-link" style="margin-top:0.75rem;">Ver más →</span>
              </div>
            </article>
          </a>
          {% endfor %}
        {% else %}
          <div class="card"><div class="card-body" style="color:var(--text-dim); font-size:0.85rem;">
            Agregá entradas con <code>categoria: arte</code> en <code>_posts/</code>
          </div></div>
        {% endif %}
      </div>
    </div>

  </div>
</section>

```

### `pages/asociacion.html`

```html
---
layout: page
permalink: /asociacion/
title: "La <em>Asociación</em>"
label: "Quiénes somos"
description: "Entidad científica sin fines de lucro con Personería Jurídica desde 2008."

---

<section class="section" style="padding-top: 0;">
  <div class="section-inner">

    <!-- About -->
    <div style="display:grid; grid-template-columns:2fr 1fr; gap:3rem; margin-bottom:4rem;">
      <div class="post-content" style="max-width:100%;">
        <p>
          La <strong>Asociación Parasitológica Argentina (APA)</strong> surge como una entidad científica
          sin fines de lucro con Personería Jurídica. Convoca a distintos especialistas en parasitología
          y disciplinas afines, expertos en diferentes grupos de hospedadores involucrados en la
          interacción parasitológica.
        </p>
        <p>
          Procura generar un espacio en donde se den a conocer los avances de las diferentes líneas de
          investigación a nivel nacional e internacional y se propicien los intercambios de experiencias
          de trabajo y desarrollo.
        </p>
        <p>
          De este modo contribuye a la promoción, difusión y asesoramiento referida a aspectos de su
          competencia: <strong>la Parasitología con un enfoque multidisciplinario</strong>.
        </p>
      </div>
      <div>
        <div class="card">
          <div class="card-body">
            <div class="section-label" style="margin-bottom:1rem;">Datos institucionales</div>
            <dl style="font-size:0.85rem; display:flex; flex-direction:column; gap:0.75rem;">
              <div>
                <dt style="color:var(--text-dim); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em;">Personería Jurídica</dt>
                <dd style="color:var(--text);">08/02/2008 — Folio 24264</dd>
              </div>
              <div>
                <dt style="color:var(--text-dim); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em;">Resolución DPPJ</dt>
                <dd style="color:var(--text);">0113 — 07/02/2008</dd>
              </div>
              <div>
                <dt style="color:var(--text-dim); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em;">CUIT</dt>
                <dd style="color:var(--text);">30-71051474-3</dd>
              </div>
              <div>
                <dt style="color:var(--text-dim); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em;">Federaciones</dt>
                <dd><a href="http://www.wfpnet.org" target="_blank">World Federation of Parasitologists</a></dd>
                <dd style="margin-top:0.25rem;"><a href="#">Federación Latinoamericana de Parasitología</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <!-- Comisión Directiva -->
    <div id="comision">
      <div class="section-label" style="margin-bottom:0.5rem;">Autoridades</div>
      <h2 class="section-title" style="margin-bottom:2rem;">Comisión <em>Directiva</em></h2>
      <div class="grid-3">
        <!-- Reemplazar con datos reales -->
        {% assign cargos = "Presidenta,Vicepresidente,Secretaria,Tesorero,Vocal Titular 1,Vocal Titular 2" | split: "," %}
        {% for cargo in cargos %}
        <div class="card fade-up">
          <div class="card-body" style="display:flex; gap:1rem; align-items:center;">
            <div style="width:48px;height:48px;border-radius:50%;background:var(--bg-subtle);
                        border:1px solid var(--border);display:flex;align-items:center;
                        justify-content:center;font-size:1.3rem;flex-shrink:0;">👤</div>
            <div>
              <div style="font-size:0.7rem;color:var(--green);text-transform:uppercase;
                          letter-spacing:0.08em;font-family:var(--font-mono);">{{ cargo }}</div>
              <div style="font-size:0.92rem;color:var(--text);font-family:var(--font-display);">
                Nombre Apellido
              </div>
              <div style="font-size:0.78rem;color:var(--text-dim);">Institución</div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
      <p style="font-size:0.82rem; color:var(--text-dim); margin-top:1.5rem;">
        ✏️ <em>Para actualizar estos datos, editá <code>pages/asociacion.html</code> con los nombres y cargos reales.</em>
      </p>
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <!-- Estatuto -->
    <div id="estatuto">
      <div class="section-label" style="margin-bottom:0.5rem;">Documentos</div>
      <h2 class="section-title" style="margin-bottom:1.5rem;"><em>Estatuto</em></h2>
      <p style="color:var(--text-mid); max-width:640px; margin-bottom:1.5rem;">
        El estatuto de la APA regula el funcionamiento de la asociación, los derechos y obligaciones de
        los socios, y el funcionamiento de la Comisión Directiva.
      </p>
      <a href="{{ '/assets/docs/estatuto-apa.pdf' | relative_url }}" class="btn btn-secondary" target="_blank">
        📄 Descargar Estatuto (PDF)
      </a>
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <!-- Convenios -->
    <div id="convenios">
      <div class="section-label" style="margin-bottom:0.5rem;">Alianzas</div>
      <h2 class="section-title" style="margin-bottom:1.5rem;">Convenios de <em>Cooperación</em></h2>
      <p style="color:var(--text-mid); max-width:640px; margin-bottom:2rem;">
        La APA ha firmado convenios de cooperación con instituciones nacionales e internacionales
        para fortalecer la investigación y formación en parasitología.
      </p>
      <!-- Agregar convenios aquí -->
      <div class="grid-3">
        <div class="card"><div class="card-body" style="color:var(--text-dim); font-size:0.85rem;">
          Agregar convenios en <code>pages/asociacion.html</code>
        </div></div>
      </div>
    </div>

  </div>
</section>

```

### `pages/asociate.html`

```html
---
layout: page
permalink: /asociate/
title: "Asociate a la <em>APA</em>"
label: "Membresía"
description: "Formá parte de la comunidad parasitológica argentina y accedé a todos los beneficios."

---

<section class="section" style="padding-top:0;">
  <div class="section-inner">

    <!-- Benefits intro -->
    <div style="text-align:center; max-width:600px; margin:0 auto 3rem;">
      <p style="color:var(--text-mid); font-size:1.05rem; line-height:1.8;">
        Ser socio/a de la APA te conecta con la comunidad parasitológica de todo el país,
        te da acceso a la Revista Argentina de Parasitología y te abre las puertas a
        financiamiento, formación y participación científica.
      </p>
    </div>

    <!-- Membership tiers -->
    <div id="aranceles" class="membership-grid" style="max-width:900px; margin:0 auto 4rem;">

      <div class="membership-card fade-up">
        <div class="membership-type">Estudiante de grado</div>
        <div class="membership-price">$<span id="arancel-grado">—</span></div>
        <div class="membership-period">por año</div>
        <ul class="membership-features">
          <li>Acceso a la Revista APA</li>
          <li>Descuento en congresos</li>
          <li>Convocatorias a becas</li>
          <li>Lista de socios/as</li>
        </ul>
        <a href="#como-asociarse" class="btn btn-secondary" style="width:100%;justify-content:center;">Asociarme →</a>
      </div>

      <div class="membership-card featured fade-up">
        <div class="membership-type">Estudiante posgrado / Postdoc</div>
        <div class="membership-price">$<span id="arancel-posgrado">—</span></div>
        <div class="membership-period">por año</div>
        <ul class="membership-features">
          <li>Todo lo anterior</li>
          <li>Apoyo económico a cursos</li>
          <li>Apoyo económico a campo</li>
          <li>Apoyo a proyectos de investigación</li>
        </ul>
        <a href="#como-asociarse" class="btn btn-primary" style="width:100%;justify-content:center;">Asociarme →</a>
      </div>

      <div class="membership-card fade-up">
        <div class="membership-type">Profesional / Investigador</div>
        <div class="membership-price">$<span id="arancel-profesional">—</span></div>
        <div class="membership-period">por año</div>
        <ul class="membership-features">
          <li>Todo lo anterior</li>
          <li>Voto en asambleas</li>
          <li>Elegible para Comisión Directiva</li>
          <li>Publicación en RAP sin cargo</li>
        </ul>
        <a href="#como-asociarse" class="btn btn-secondary" style="width:100%;justify-content:center;">Asociarme →</a>
      </div>

    </div>

    <p style="text-align:center; font-size:0.82rem; color:var(--text-dim); margin-top:-2rem; margin-bottom:3rem;">
      ✏️ <em>Actualizá los aranceles editando <code>pages/asociate.html</code> o conectando con la tabla de <code>data/aranceles.csv</code></em>
    </p>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <!-- Cómo asociarse -->
    <div id="como-asociarse">
      <div class="section-label" style="margin-bottom:0.5rem;">Pasos para asociarse</div>
      <h2 class="section-title" style="margin-bottom:2rem;">¿Cómo <em>asociarse</em>?</h2>

      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:1.5rem; margin-bottom:3rem;">
        {% assign pasos = "Completar el formulario,Realizar el pago,Enviar comprobante,¡Bienvenido/a a la APA!" | split: "," %}
        {% assign nums = "01,02,03,04" | split: "," %}
        {% for paso in pasos %}
        <div class="card fade-up">
          <div class="card-body">
            <div style="font-family:var(--font-mono); font-size:1.8rem; color:var(--green); opacity:0.4; margin-bottom:0.5rem;">{{ nums[forloop.index0] }}</div>
            <div style="font-size:0.95rem; color:var(--text); font-weight:500;">{{ paso }}</div>
          </div>
        </div>
        {% endfor %}
      </div>

      <div class="card" style="max-width:640px;">
        <div class="card-body">
          <div class="section-label" style="margin-bottom:1rem;">Datos bancarios para transferencia</div>
          <dl style="font-size:0.88rem; display:flex; flex-direction:column; gap:0.6rem;">
            <div>
              <dt style="color:var(--text-dim); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em;">Titular</dt>
              <dd style="color:var(--text);">Asociación Parasitológica Argentina</dd>
            </div>
            <div>
              <dt style="color:var(--text-dim); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em;">CUIT</dt>
              <dd style="color:var(--text);">30-71051474-3</dd>
            </div>
            <div>
              <dt style="color:var(--text-dim); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em;">Banco / CBU</dt>
              <dd style="color:var(--text);">Completar con datos bancarios actuales</dd>
            </div>
          </dl>
          <div style="margin-top:1.5rem;">
            <a href="mailto:{{ site.email }}?subject=Solicitud%20de%20asociación%20APA"
               class="btn btn-primary">
              Enviar comprobante por email →
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

```

### `pages/delegados.html`

```html
---
layout: default
permalink: /delegados/
title: "Delegados Regionales"
description: "Red de delegadas y delegados de la APA en todo el país."
label: "Red Nacional"
use_map: true
---

<div class="page-header">
  <div class="page-header-inner fade-up">
    <div class="section-label">Red Nacional</div>
    <h1 class="page-header-title">Delegados <em>Regionales</em></h1>
    <p class="page-header-desc">
      La APA tiene representación en todo el país. Hacé clic en un marcador para
      ver información del delegado o delegada y su institución.
    </p>
  </div>
</div>

<section class="section" style="padding-top: 0;">
  <div class="section-inner">

    <!-- Map -->
    <div class="map-container fade-up" style="margin-bottom: 2rem;">
      <div id="delegados-map"></div>
    </div>

    <!-- Legend / instructions -->
    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 3rem;">
      <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.82rem; color:var(--text-dim);">
        <span style="width:12px;height:12px;border-radius:50%;background:var(--green);display:inline-block;"></span>
        Delegado/a activo/a
      </div>
      <div style="font-size:0.82rem; color:var(--text-dim);">
        💡 Hacé clic en un marcador para ver los datos del contacto regional
      </div>
    </div>

    <!-- Cards grid (populated by JS) -->
    <div class="section-label" style="margin-bottom: 1.5rem;">Todos los delegados</div>
    <div class="grid-3" id="delegados-cards">
      <!-- JS fills this -->
      <div style="color:var(--text-dim); font-size:0.88rem; padding:1rem;">Cargando delegados…</div>
    </div>

  </div>
</section>

```

### `pages/eventos.html`

```html
---
layout: page
permalink: /eventos/
title: "Eventos y <em>Convocatorias</em>"
label: "Agenda científica"
description: "Congresos, cursos, becas y convocatorias abiertas de la APA."

---

<section class="section" style="padding-top:0;">
  <div class="section-inner">

    <!-- Convocatorias abiertas -->
    <div id="convocatorias" style="margin-bottom:4rem;">
      <div class="section-label" style="margin-bottom:0.5rem;">En curso</div>
      <h2 class="section-title" style="margin-bottom:2rem;">Convocatorias <em>abiertas</em></h2>
      <div class="grid-3">
        {% assign convocatorias = site.posts | where: "categoria", "convocatoria" | limit: 6 %}
        {% if convocatorias.size > 0 %}
          {% for post in convocatorias %}
          <a href="{{ post.url | relative_url }}" style="text-decoration:none;">
            <article class="card fade-up">
              <div class="card-body">
                <span class="card-tag">Convocatoria</span>
                <h3 class="card-title">{{ post.title }}</h3>
                <div class="card-date">{{ post.date | date: "%d %b %Y" }}</div>
                <p class="card-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
                <span class="card-link">Ver detalle →</span>
              </div>
            </article>
          </a>
          {% endfor %}
        {% else %}
          <div class="card"><div class="card-body" style="color:var(--text-dim); font-size:0.88rem;">
            No hay convocatorias abiertas en este momento.<br/>
            Agregá entradas con <code>categoria: convocatoria</code> en <code>_posts/</code>
          </div></div>
        {% endif %}
      </div>
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <!-- Becas y apoyo económico -->
    <div id="becas" style="margin-bottom:4rem;">
      <div class="section-label" style="margin-bottom:0.5rem;">Financiamiento</div>
      <h2 class="section-title" style="margin-bottom:2rem;">Apoyos <em>económicos</em></h2>
      <div class="grid-3">
        <div class="card fade-up">
          <div class="card-body">
            <span class="card-tag">Postgrado</span>
            <h3 class="card-title">Apoyo para cursos de posgrado</h3>
            <p class="card-excerpt">Financiamiento para socios/as estudiantes que asisten a cursos de posgrado en Argentina.</p>
            <a href="{{ '/assets/docs/apoyo-postgrado.pdf' | relative_url }}" class="card-link">Ver bases →</a>
          </div>
        </div>
        <div class="card fade-up">
          <div class="card-body">
            <span class="card-tag">Salidas de campo</span>
            <h3 class="card-title">Apoyo para salidas de campo</h3>
            <p class="card-excerpt">Para socios/as estudiantes de posgrado y posdoctorales que realizan trabajo de campo.</p>
            <a href="{{ '/assets/docs/apoyo-campo.pdf' | relative_url }}" class="card-link">Ver bases →</a>
          </div>
        </div>
        <div class="card fade-up">
          <div class="card-body">
            <span class="card-tag">Investigación</span>
            <h3 class="card-title">Apoyo a proyectos de investigación</h3>
            <p class="card-excerpt">Para socios/as estudiantes y posdoctorales con proyectos de investigación en parasitología.</p>
            <a href="{{ '/assets/docs/apoyo-investigacion.pdf' | relative_url }}" class="card-link">Ver bases →</a>
          </div>
        </div>
      </div>
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <!-- Congresos -->
    <div id="congresos" style="margin-bottom:4rem;">
      <div class="section-label" style="margin-bottom:0.5rem;">Congreso bienal</div>
      <h2 class="section-title" style="margin-bottom:2rem;">Congreso Argentino de <em>Parasitología</em></h2>
      {% assign congreso_posts = site.posts | where: "categoria", "congreso" %}
      {% if congreso_posts.size > 0 %}
        <div class="grid-2">
          {% for post in congreso_posts limit:4 %}
          <a href="{{ post.url | relative_url }}" style="text-decoration:none;">
            <article class="card fade-up">
              {% if post.imagen %}
              <img src="{{ post.imagen | relative_url }}" alt="{{ post.title }}" style="width:100%;height:180px;object-fit:cover;" />
              {% endif %}
              <div class="card-body">
                <span class="card-tag">Congreso</span>
                <h3 class="card-title">{{ post.title }}</h3>
                <div class="card-date">{{ post.date | date: "%d %b %Y" }}</div>
                <p class="card-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
                <span class="card-link">Más información →</span>
              </div>
            </article>
          </a>
          {% endfor %}
        </div>
      {% else %}
        <div class="card"><div class="card-body" style="color:var(--text-dim); font-size:0.88rem;">
          Agregá entradas con <code>categoria: congreso</code> en <code>_posts/</code>
        </div></div>
      {% endif %}
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <!-- Todas las novedades -->
    <div id="noticias">
      <div class="section-label" style="margin-bottom:0.5rem;">Archivo</div>
      <h2 class="section-title" style="margin-bottom:2rem;">Todas las <em>novedades</em></h2>
      <div class="grid-3">
        {% for post in site.posts limit:12 %}
        <a href="{{ post.url | relative_url }}" style="text-decoration:none;">
          <article class="card fade-up">
            <div class="card-body">
              {% if post.categoria %}<span class="card-tag">{{ post.categoria }}</span>{% endif %}
              <h3 class="card-title" style="font-size:1rem;">{{ post.title }}</h3>
              <div class="card-date">{{ post.date | date: "%d %b %Y" }}</div>
              <p class="card-excerpt" style="font-size:0.82rem;">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            </div>
          </article>
        </a>
        {% endfor %}
      </div>
    </div>

  </div>
</section>

```

### `pages/revista.html`

```html
---
layout: page
permalink: /revista/
title: "Revista Argentina de <em>Parasitología</em>"
label: "Publicación científica"
description: "Órgano oficial de difusión científica de la APA, con alcance nacional e internacional."

---

<section class="section" style="padding-top:0;">
  <div class="section-inner">

    <div style="display:grid; grid-template-columns:2fr 1fr; gap:3rem; align-items:start; margin-bottom:4rem;">

      <div>
        <div class="post-content" style="max-width:100%;">
          <p>
            La <strong>Revista Argentina de Parasitología</strong> es editada por la Asociación Parasitológica
            Argentina (APA), con el objetivo de difundir trabajos científicos relacionados con la Parasitología
            en todas sus áreas.
          </p>
          <p>
            Genera un espacio donde se dan a conocer los avances de las diferentes líneas de investigación
            a nivel nacional e internacional y se propician los intercambios de experiencias de trabajo y
            desarrollo — con la Parasitología con enfoque multidisciplinario desde Argentina para el mundo.
          </p>
          <p>
            Se reciben artículos científicos en todos los campos teóricos y aplicados de la Parasitología.
            Los trabajos deben ser originales y pueden ser:
          </p>
          <ul>
            <li>Comunicaciones cortas</li>
            <li>Relatos de casos</li>
            <li>Artículos científicos completos</li>
          </ul>
        </div>

        <div style="display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap;">
          <a href="http://www.revargparasitologia.com.ar/ojs/index.php/rap/about"
             target="_blank" class="btn btn-primary">
            Acceder a la Revista →
          </a>
          <a href="http://www.revargparasitologia.com.ar/N_especial.html"
             target="_blank" class="btn btn-secondary">
            Números Especiales
          </a>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:1rem;">
        <div class="card">
          <div class="card-body">
            <div class="section-label" style="margin-bottom:1rem;">Información para autores</div>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; font-size:0.85rem; color:var(--text-mid);">
              <li>✅ Acceso abierto (Open Access)</li>
              <li>✅ Revisión por pares</li>
              <li>✅ Idiomas: español e inglés</li>
              <li>✅ Sin costo para autores socios APA</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="section-label" style="margin-bottom:1rem;">Plataforma</div>
            <p style="font-size:0.85rem; color:var(--text-mid);">
              La revista utiliza el sistema OJS (Open Journal Systems).
              Los envíos y revisiones se gestionan en línea.
            </p>
            <a href="http://www.revargparasitologia.com.ar/ojs/index.php/rap"
               target="_blank"
               style="font-size:0.82rem; color:var(--green); margin-top:0.75rem; display:inline-block;">
              Ir al portal OJS →
            </a>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

```

