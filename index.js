

// Importaciones y set-up inicial

const express = require('express');

const listRoutes = require('./list-view-router');

const taskRoutes = require('./list-edit-router');

const authRoutes = require('./auth-router');

const app = express();

// Middleware para analizar el cuerpo de la solicitud en formato JSON

app.use(express.json());

// Middleware para gestionar métodos HTTP válidos

app.use((req, res, next) => {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  if(!validMethods.includes(req.method)) {
    return res.status(405).json({error: 'Método HTTP no permitido'});
  }

  next();
});

const PORT = 3000;

// Montaje de las rutas

app.use('/tasks', listRoutes);

app.use('/tasks', taskRoutes);

app.use('/login', authRoutes);

// Inicio del servidor

app.listen(PORT, () => {
    console.log(`La aplicación está escuchando en el puerto ${PORT}`);
  });