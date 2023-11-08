

const tasks = require('./tasks-array');

const { Router } = require('express');

const router = Router();

router.post('/new/:description', (req, res) => {
    const nuevoObjeto = {id: tasks.length + 1, isCompleted: false, description: req.params.description};
    
    tasks.push(nuevoObjeto);
    
    res.send('Tarea agregada');
});

router.delete('/:id', (req, res) => {
    const indice = tasks.findIndex(item => item.id == req.params.id);

    if (indice !== -1) {
        tasks.splice(indice, 1);
        res.send('Tarea eliminada');
    } else {
        res.status(404).send('Tarea no encontrada');
    }
    
});

router.put('/update/:id', (req, res) => {
    const task = tasks.find(item => item.id == req.params.id);

    if (task) {
        task.isCompleted = true;
        res.send('Tarea completada');
    } else {
        res.status(404).send('Tarea no encontrada');
    }
    
});

module.exports = router;