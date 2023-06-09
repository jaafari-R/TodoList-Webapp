const todolist = require('../db/todolist');

todoListModel = require('../db/todolist')

const TodoListController = class {
    async addTask (req, res) {
        const title = req.body.title;

        await todoListModel.addTask(title)
            .then((newTask) => {
                res.status(201).json({success: true, newTask});
            })
            .catch(() => {
                res.status(500).json({success: false, msg: "Failed to create task"});
            })
    }

    getTasks(req, res) {
        todoListModel.getTasks()
            .then((tasks) => {
                res.status(200).json({success: true, tasks});
            })
            .catch(() => {
                res.status(500).json({success: false, msg: "Failed to retrieve tasks"});
            })
    }

    // TODO- add custom errors
    getTask(req, res) {
        const taskId = req.params._id;

        todoListModel.getTask(taskId)
            .then((task) => 
            {
                res.status(200).json({success: true, task});
            })
            .catch(() => {
                res.status(500).json({success: false, msg: "Failt to retrieve task"});
            })
    }

    // TODO- add custom errors
    updateTask(req, res) {
        const taskId = req.params._id;
        const title = req.body.title;

        todoListModel.updateTask(taskId, title)
            .then(() => {
                res.status(200).json({success: true});
            })
            .catch(() => {
                res.status(500).json({success: false, msg: "Failed to edit task"});
            })
    }

    // TODO - add custom errors
    deleteTask(req, res) {
        const taskId = req.params._id;

        todoListModel.deleteTask(taskId)
            .then(() => {
                res.status(200).json({success: true});
            })
            .catch(() => {
                res.status(500).json({success: false, msg: "Failed to delete task"});
            })
    }

    // TODO - add custom errors
    markTask(req, res) {
        const taskId = req.params._id;
        const mark = Boolean(req.body.mark); // true indicates mark / false indicates un-mark

        todoListModel.markTask(taskId, mark)
            .then(() => {
                res.status(200).json({success: true});
            })
            .catch(() => {
                res.status(500).json({success: false, msg: "Failed to mark task"});
            })
    }

    // TODO
    pinTask(req, res) {
        const taskId = req.params._id;
        const pin = Boolean(req.body.pin); // true indicates pin / false indicates un-pin

        todoListModel.pinTask(taskId, pin)
            .then(() => {
                res.status(200).json({success: true});
            })
            .catch(() => {
                res.status(500).json({success: false, msg: "Failed to pin task"});
            })
    }
}

module.exports = new TodoListController();