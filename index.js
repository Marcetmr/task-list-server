

const express = require('express');

const listRoutes = require('./list-view-router');

const taskRoutes = require('./list-edit-router');

const app = express();

app.use('/tasks', listRoutes);

app.use('/tasks', taskRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`La aplicación está escuchando en el puerto ${PORT}`);
  });