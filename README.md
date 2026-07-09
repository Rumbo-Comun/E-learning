# AulaPro LMS Demo

Demo ligera de plataforma LMS para presentar login, centro de mando, opciones laterales,
prioridades operativas, accesos rapidos y seguimiento institucional.

## Ejecutar localmente

```bash
npm start
```

Luego abre `http://localhost:3000`.

Acceso demo:

- Usuario: `admin@lms.local`
- Contrasena: `demo1234`

## Desplegar en Railway

1. Sube este repositorio a GitHub.
2. En Railway, crea un nuevo proyecto desde el repositorio.
3. Railway detectara `package.json` y ejecutara `npm start`.
4. No requiere variables de entorno para esta demo.

## Estructura

- `server.js`: servidor Node HTTP sin dependencias.
- `public/index.html`: login y centro de mando.
- `public/styles.css`: estilos responsivos.
- `public/app.js`: datos demo e interacciones.
- `public/assets/lms-hero.png`: asset visual de la pantalla principal.
