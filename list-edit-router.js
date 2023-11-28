

// Importaciones y set-up inicial

const tasks = require('./tasks-array');

const { Router } = require('express');

const router = Router();

// Middleware para manejar errores de solicitudes POST

router.use((req, res, next) => {
    // Cuerpo vacío
    if (req.method === 'POST' && Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Cuerpo de la solicitud vacío' });
    }
    // Descripción vacía
    if (req.method === 'POST' && !req.body.description) {
        return res.status(400).json({ error: 'La tarea requiere una descripción'});
    }
    next();
});

// Middleware para manejar errores de solicitudes PUT

router.use((req, res, next) => {
    //Cuerpo vacío
    if (req.method === 'PUT' && Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Cuerpo de la solicitud vacío'});
    }
    // Descripción vacía
    if (req.method === 'PUT' && !req.body.description) {
        return res.status(400).json({error: 'La tarea requiere una descripción'});
    }
    next();
});

// Servicio para agregar tareas

router.post('/', (req, res) => {
    const nuevoObjeto = {id: tasks.length + 1, isCompleted: false, description: req.body.description};
    
    tasks.push(nuevoObjeto);
    
    res.json(nuevoObjeto);
});

// Servicio para borrar tareas

router.delete('/:id', (req, res) => {
    const indice = tasks.findIndex(item => item.id == req.params.id);

    if (indice !== -1) {
        tasks.splice(indice, 1);
        res.json({ mensaje: 'Tarea eliminada' });
    } else {
        res.status(404).json({ mensaje: 'Tarea no encontrada '});
    }
    
});

// Servicio para actualizar tareas

router.put('/update/:id', (req, res) => {
    const task = tasks.find(item => item.id == req.params.id);

    if (task) {
        task.isCompleted = req.body.isCompleted;
        task.description = req.body.description;
        res.json(task);
    } else {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }
    
});


// Exportación del router

module.exports = router;