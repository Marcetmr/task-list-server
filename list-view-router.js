

const tasks = require('./tasks-array');

const { Router }  = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json(tasks);
});   

router.get('/:id', (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find((task) => task.id == taskId);
    
    if (task) {
        res.status(200).json(task)
    } else {
        res.status(404).json({mensaje: 'no se encontro la tarea solicitada'})
    }
});

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


module.exports = router;