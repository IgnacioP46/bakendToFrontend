const { getTasks, postTask, updateTask, deleteTask } = require('../controllers/controlador');

const taskRouter = require('express').Router();

taskRouter.get('/', getTasks);
taskRouter.post('/', postTask);
taskRouter.put('/:id', updateTask);
taskRouter.delete('/:id', deleteTask);

module.exports = taskRouter;