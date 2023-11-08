const { Router }  = require('express');

const router = Router();

const tasks = [
    {id: 1, isCompleted: false, description: 'Limpiar los vidrios'},
    {id: 2, isCompleted: false, description: 'Cocinar el almuerzo'},
    {id: 3, isCompleted: true, description: 'Regar las plantas'},
    {id: 4, isCompleted: false, description: 'Hacer ejercicio'},
];

router.get('/tasks', function (req, res) {
    res.json(tasks);
});   

router.get('/tasks/:id', function (req, res) {
    const task = tasks.find((item) => item.id === req.params.id)
    
    res.json(task);
});

router.get('/tasks/filter', function (req, res) {
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