# Sitio Web — Asociación Parasitológica Argentina

Sitio estático generado con [Jekyll](https://jekyllrb.com/), desplegado en GitHub Pages.
Reconstruido desde cero con la identidad final aprobada (Seashell + PT Serif/PT Sans +
logo lockup + botones píldora de ancho fijo) y la Opción B de navegación (5 secciones).

## Este paquete reemplaza el repo entero

A diferencia de la entrega anterior (que parcheaba colores sobre el sitio viejo), este
es un proyecto completo. Si lo vas a usar, **borrá el contenido actual del repo y
reemplazalo por este**, o creá el repo de cero y subí esto.

Páginas que **ya no existen** (fusionadas o renombradas):
- `pages/actividades.html` → su contenido ahora vive en `pages/eventos.html` (archivo filtrable)
- `pages/revista.html` → ya no es una página propia; es un link externo (`site.revista_url` en `_config.yml`) desde Inicio, el nav y el footer
- `pages/delegados.html` → el mapa ahora vive dentro de `pages/asociacion.html#delegados`

Página nueva:
- `pages/formacion-convocatorias.html` → cursos/talleres + becas + convocatorias, todo junto

## Antes de publicar: un paso manual

El header y el footer referencian `assets/img/logo.png`, que **no está incluido** en
este paquete (solo tengo el link de ImgBB que subiste, no el archivo). Descargalo de
https://i.ibb.co/Q3Fz7jL3/logo-APA.png y guardalo en `assets/img/logo.png` antes de
hacer commit. No lo dejes apuntando a ImgBB en producción — es un host pensado para
compartir imágenes, no para servir assets de un sitio en vivo.

## Estructura

```
_config.yml          ← nav, título, revista_url
_layouts/             ← default / page / post
_includes/
  header.html          ← logo lockup + menú hamburguesa funcional + nav desktop
  footer.html
_posts/               ← novedades (YYYY-MM-DD-slug.md)
assets/
  css/main.css         ← todo el diseño, mobile-first (breakpoints en 700px y 1100px)
  js/main.js           ← menú, fade-up, filtros de la Eventos
  js/map.js            ← mapa de delegados (Leaflet, modo claro)
  img/logo.png         ← ⚠️ falta, ver arriba
data/delegados.csv     ← datos del mapa
pages/
  asociacion.html       ← institucional + delegados + mapa
  eventos.html           ← congreso + Parasitología en la Nube + conversatorios + arte (filtrable)
  formacion-convocatorias.html  ← cursos/talleres + becas + convocatorias
  asociate.html
index.html             ← home
```

## Categorías de `_posts/`

| `categoria` | Aparece en |
|---|---|
| `congreso` | Eventos |
| `charla` | Eventos (Parasitología en la Nube) |
| `conversatorio` | Eventos (Conversatorios) |
| `arte` | Eventos (Arte y Ciencia) |
| `curso` | Formación y Convocatorias |
| `convocatoria` | Formación y Convocatorias |

Encabezado de un post nuevo:

```yaml
---
layout: post
title: "Título"
date: 2026-07-15
categoria: convocatoria
imagen: /assets/img/noticias/mi-imagen.jpg   # opcional
excerpt: "Resumen breve para las tarjetas."
---
Contenido en Markdown...
```

## Actualizar el mapa de delegados

Editá `data/delegados.csv` (columnas: `nombre,institucion,ciudad,provincia,lat,lon,email,foto_url`).
Coordenadas: buscá la ciudad en Google Maps → clic derecho → "¿Qué hay aquí?".

## Desarrollo local

```bash
bundle install
bundle exec jekyll serve --livereload
# http://localhost:4000
```

## Activar GitHub Pages

Settings → Pages → Source: Deploy from a branch → `main` / `(root)`.
Para el dominio propio (`apargentina.org.ar`), ver Settings → Pages → Custom domain,
y agregar el registro DNS correspondiente en NIC Argentina.
