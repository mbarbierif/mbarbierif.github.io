# Tablas editables del sitio

Estos archivos CSV alimentan secciones de la página "La Asociación".
Se pueden editar directamente en GitHub (lápiz ✏️ → editar → "Commit changes").
Cada fila es una persona o un ítem; la primera fila son los nombres de las columnas y **no se cambia**.
Si un dato tiene coma, va entre comillas: `"Hola, mundo"`. Las celdas vacías están permitidas.

| Archivo | Qué alimenta | Columnas |
|---|---|---|
| `comisiones.csv` | Comisión Directiva y demás comisiones | `comision`, `cargo`, `nombre`, `foto` |
| `delegados.csv` | Mapa y tarjetas de delegados/as | `nombre`, `institucion`, `ciudad`, `provincia`, `delegacion`, `lat`, `lon`, `email`, `foto` |
| `delegaciones.csv` | Descripción de cada delegación | `delegacion`, `descripcion` |
| `convenios.csv` | Badges de convenios | `nombre`, `url` |

**Comisiones:** las comisiones aparecen en el orden en que figuran en el archivo. Para crear una nueva,
basta escribir un nombre nuevo en la columna `comision`. Si `cargo` tiene texto, se muestra como píldora
(se usa en la Comisión Directiva); si está vacío, no se muestra.

**Delegados:** la columna `delegacion` agrupa las tarjetas bajo "Delegación X". Si querés una descripción
para esa delegación, agregá una fila en `delegaciones.csv` con el mismo nombre exacto.

**Fotos:** subí la imagen a `assets/img/personas/` y escribí solo el nombre del archivo (ej. `espinoza.jpg`).
También se acepta una URL completa. Sin foto, se muestra un ícono genérico. Recomendado: cuadradas, ~400×400 px.

**Convenios:** `url` puede ser una URL completa o un PDF subido a `assets/docs/` (ej. `/assets/docs/convenio-unlp.pdf`).
Si queda vacía, el badge se ve pero sin link.