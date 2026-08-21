# Cambios — Migración a identidad final aprobada

## Cómo aplicar

Reemplazá estos archivos en tu repo por los de este paquete (misma ruta):

- `assets/css/main.css`
- `_includes/navbar.html`
- `_config.yml`
- `assets/js/map.js`
- `assets/img/favicon.svg`

## Antes de commitear, dos pasos manuales

1. **Agregá el logo real.** `navbar.html` referencia `assets/img/logo.png`, pero ese
   archivo no existe todavía en el repo — necesitás descargar el PNG que subiste a
   ImgBB (https://i.ibb.co/Q3Fz7jL3/logo-APA.png) y guardarlo en
   `assets/img/logo.png`. No lo dejes apuntando al link de ImgBB en producción:
   es un host de terceros pensado para compartir imágenes, no para alojar
   assets de un sitio en vivo (puede caerse o cambiar la URL sin aviso).

2. **Borrá el `main.css` duplicado en la raíz del repo.** No está referenciado
   en ningún lado (el sitio usa `assets/css/main.css`) — es un archivo suelto
   de una versión anterior. `rm main.css` en la raíz.

## Qué cambió

- **Paleta:** de "Científico Nocturno" (fondo `#0d1117`, verde `#6db88a`) a la
  identidad final aprobada — Seashell `#FFF5EE`, naranja `#E87838`, textos en
  `#090201` / `#584D36`.
- **Tipografía:** de Cormorant Garamond + DM Sans → PT Serif + PT Sans.
- **Logo:** navbar ahora usa el lockup horizontal (logo + wordmark en una sola
  línea de texto, mismo estilo en las tres palabras — ya no hay tratamiento
  distinto para "Argentina").
- **Botones:** ahora todos con ancho fijo (200px en desktop, 100% en mobile),
  ya no se adaptan al largo del texto. (Ya eran píldora — eso no cambió.)
- **Mapa de delegados:** tiles de Leaflet pasaron de "Dark Matter" a
  "Voyager" (claro), y los marcadores/popups se recolorearon para no quedar
  oscuros flotando sobre un sitio claro.
- **Nombres de variables CSS sin cambios** (`--green`, `--amber`,
  `--font-mono`, etc.) — solo cambiaron los *valores*. Esto es intencional:
  evita tener que tocar los estilos inline que ya usan `var(--green)` en
  `pages/eventos.html`, `pages/revista.html`, `_layouts/post.html`, etc. Si
  en algún momento el equipo técnico quiere renombrarlas a algo más honesto
  (`--accent` en vez de `--green`), es un find-and-replace seguro, pero no es
  urgente.

## Lo que NO toqué (pendiente, más grande)

La Opción B de navegación (5 secciones) todavía no está reflejada en el
contenido de las páginas — solo en `_config.yml`:

- `pages/actividades.html` (Parasitología en la Nube / Conversatorios / Arte
  y Ciencia) todavía existe como página separada — según lo aprobado, este
  contenido debería fusionarse dentro de `pages/eventos.html` como un archivo
  filtrable por año/tipo.
- No existe todavía `pages/formacion-convocatorias.html` — la nueva sección
  que junta cursos/talleres (hoy en ningún lado) con becas y apoyos
  económicos (hoy dentro de `eventos.html`).
- `footer.html` e `index.html` tienen links a `/actividades/` y a las
  anclas viejas de `/eventos/#becas` que van a quedar rotos una vez se haga
  la fusión — hay que actualizarlos en el mismo paso.

Puedo armar ese segundo paquete cuando quieras — es un cambio de contenido
más grande que este (que fue puramente visual/branding).
