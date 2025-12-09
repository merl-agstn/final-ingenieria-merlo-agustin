# App Gatitos Random

Esta es una app que consume The Cat API para obtener fotos de gatitos.

## Tecnología utilizada
- Node.js
- Docker

## Estructura principal
- `server.js` - servidor Express que sirve `public` y expone `/api/cat`
- `public/index.html` - interfaz que muestra las imágenes
- `package.json`
- `Dockerfile`

## Cómo levantar la app

1. Clonar el repositorio
2. Usando Docker:
	docker build -t gatitos .

	docker run --rm -p 8080:8080 gatitos
