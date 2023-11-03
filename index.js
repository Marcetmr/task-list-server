

const express = require('express');

const app = express();

const PORT = 3000;

const tasks = [
    {id: 1, isCompleted: false, description: 'Limpiar los vidrios'},
    {id: 2, isCompleted: false, description: 'Cocinar el almuerzo'},
    {id: 3, isCompleted: true, description: 'Regar las plantas'},
    {id: 4, isCompleted: false, description: 'Hacer ejercicio'},
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`La aplicación está escuchando en el puerto ${PORT}`);
  });