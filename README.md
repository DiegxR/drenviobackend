# Introducción

Este proyecto es una API sencilla construida con **Express.js** que sirve para manejar solicitudes HTTP y responder con datos JSON. El objetivo es proporcionar un backend simple para interactuar con la base de datos de mongoDB.

## Ejecutar localmente
1. clonar el repositorio `git clone https://github.com/DiegxR/drenviobackend.git`
2. instalar dependencias `npm install`.
3. ejecutar el comando para correr el proyecto `npm run dev`.
4. Instalar nodemon de forma global `npm i -g nodemon` para el entorno de desarrollo `npm run dev`.

## Justificación Tecnologías Utilizadas

- **Node.js**: Permite un desarrollo rápido con JavaScript en el backend.
- **Express.js**: Simplifica la creación de rutas y manejo de peticiones en la API.
- **Mongoose**: Facilita la conexión y manejo de datos en MongoDB.
- **Cors**: Permite que la API sea accesible desde otros dominios de forma segura.

## Arquitectura
Esta arquitectura se basa en rutas, controladores y modelos, dónde la ruta llama a las funciones del controlador y este afecta a las bases de datos apartir de un modelo.
## Estructura de Archivos

- **controllers/**: Contiene las funciones que alteran directamente la base de datos

  - `specialPricesController.ts`: Contiene las siguientes funciones:
    `getSpecialPrices`': busca el nombre de la colección con precios especiales por usuario.
    `addSpecialPrices`': que añade un nuevo producto con precio especial en una colección ya creada.
  - `usersController.ts`: Contiene las siguientes funcion:
  `requesUsers`: recibe un array de usuarios de la api de 'https://randomuser.me/api' y los procesa creando la colección de precios especiales guardando el nombre junto al usuario en la base de datos.
  `getUsers`: trae todos los usuarios creados anteriormente en la base de datos.
  `getUserByEmail`: busca un usuario por email y lo regresa.
    

- **models/**: Define las estructuras de datos y esquemas de la base de datos.

  - `users.ts`: Modelo para la entidad de usuarios.

- **routes/**: Gestiona las rutas de la API.

  - `productsRouter.ts`: Define las rutas relacionadas con productos.
  - `usersRouter.ts`: Define las rutas relacionadas con usuarios.

- **app.ts**: Punto de entrada de la aplicación y configuración del servidor Express.
- **database.ts**: Configuración y conexión a la base de datos.

## Requisitos

- Node.js
- TypeScript
- Nodemon (opcional para desarrollo)


