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
