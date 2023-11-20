

// Importaciones y set-up inicial

const tasks = require('./tasks-array');

const { Router }  = require('express');

const router = Router();

// Middleware de validación de parámetros

router.use((req, res, next) => {
    const taskId = req.params.id;
    const filtered = req.query.completed;

    if (taskId && (!Number.isInteger(Number(taskId)) || Number(taskId) <= 0)) {
        return res.status(400).json({ mensaje: 'El ID de la tarea debe ser un número entero positivo' });
    }

    if (filtered !== undefined && filtered !== 'true' && filtered !== 'false') {
        return res.status(400).json({ mensaje: 'El parámetro debe ser true o false'});
    }

    next();
});

// Servicio para ver las tareas

router.get('/', (req, res) => {
    res.json(tasks);
});   

// Servicio para filtrar tareas por ID

router.get('/:id', (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find((task) => task.id == taskId);
    
    if (task) {
        res.status(200).json(task)
    } else {
        res.status(404).json({mensaje: 'no se encontro la tarea solicitada'})
    }
});

// Servicio para filtrar tareas completadas/no completadas

router.get('/filter', function (req, res) {
    const filtered = req.query.completed;

    if (filtered) {
        const completedTasks = tasks.filter((item) => item.isCompleted === true);
        res.json(completedTasks);
    } else {
        const incompleteTasks = tasks.filter((item) => item.isCompleted === false);
        res.json(incompleteTasks);
    }
})

// Exportación del router

module.exports = router;