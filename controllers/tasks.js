const getAllTasks = (req, res) => {
    res.send('get all tasks');
}
const createTask = (req, res) => {
    res.json(req.body);
    //res.send("s");
}
const getTask = (req, res) => {
    res.json({id:req.params.id});
}
const updateTask = (req, res) => {
    res.send('update task');
}
const deleteTask = (req, res) => {
    res.send('create task');
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}