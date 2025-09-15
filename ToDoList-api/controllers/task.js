const {task} = require('../src/models');

const getTasks = async () => {
    const tasks = await task.find().lean();
    return tasks;
};

const postTask = async (playload) => {
    const newTask = new task(playload);
    await newTask.save();
    return newTask;
};

const updateTask = async (id, playload)=> {
    const task = await task.findByIdAndUpdate(id, playload, {new: true});
    return task;
};


const deleteTask = async (id) => {
    const task = await task.findByIdAndDelete(id);
    return task;
};

module.exports = {
    getTasks,
    postTask,
    updateTask,
    deleteTask
}