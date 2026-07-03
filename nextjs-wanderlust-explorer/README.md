# Wanderlust Explorer

Aplicacion multipagina en Next.js para descubrir, buscar, filtrar y guardar experiencias de viaje sin recarga completa entre rutas.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Estado de favoritos en React useState compartido por provider

## Paginas

- /: Home con hero y CTA al explorador
- /experiences: listado completo con busqueda y filtros por URL
- /experiences/[id]: detalle por ID desde dataset local
- /favorites: experiencias favoritas del usuario
- /profile: perfil simulado con contador de favoritos

## Dataset

El archivo src/data/experiences.ts contiene 100 experiencias con los campos:

- id
- title
- description
- category
- destination
- price
- rating
- imageUrl

Categorias disponibles:

- Adventure
- Culture
- Food
- Wellness
- Nature

## Busqueda y filtros en URL

En /experiences, los valores de search, category y destination se sincronizan con query params para compartir vistas filtradas.

Ejemplo:

/experiences?search=vela&category=Adventure&destination=Dubrovnik,%20Croatia

Los inputs se prerrellenan al abrir una URL con query params existentes.

## Favoritos

Cada tarjeta incluye un corazon para agregar o quitar de favoritos.

- Estado gestionado con useState compartido en la aplicacion
- No hay persistencia entre recargas (segun alcance del proyecto)

## Design References

Estas interfaces inspiraron el look and feel del explorador:

- Airbnb Experiences (cards limpias + jerarquia visual): https://www.airbnb.com/experiences
- GetYourGuide (filtros, tarjetas e info densa bien estructurada): https://www.getyourguide.com/
- KAYAK Explore (descubrimiento visual de destinos): https://www.kayak.com/explore

## Ejecutar

Instalar dependencias:

npm install

Desarrollo:

npm run dev

Verificacion:

npm run lint
npm run build
