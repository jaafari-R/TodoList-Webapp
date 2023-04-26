todoListModel = require('../db/todolist')

const TodoListController = class {
    async addTask (req, res) {
        const name = req.body.title;
        const description = req.body.description;

        await todoListModel.addTask(name, description)
            .then((taskId) => {
                res.status(201).json({success: "true", taskId});
            })
            .catch(() => {
                res.status(500).json({success: "false", msg: "Failed to create task"});
            })
    }

    async getTasks(req, res) {
        todoListModel.getTasks()
            .then((tasks) => {
                res.status(200).json({success: "true", tasks});
            })
            .catch(() => {
                res.status(500).json({success: "false", msg: "Failed to retrieve tasks"});
            })
    }

    // TODO
    getTask(req, res) {
        const taskId = Number(req.params.id)

        todoListModel.getTask(taskId)
            .then((task) => 
            {
                res.status(200).json({success: "true", task});
            })
            .catch(() => {
                res.status(500).json({success: "false", msg: "Failt to retrieve task"});
            })
    }

    // TODO
    updateTask(req, res) {
        const taskId = req.params.id;
        const title = req.body.title;
        const description = req.body.description;

        todoListModel.updateTask(taskId, title, description)
            .then(() => {
                res.status(200).json({success: "true"});
            })
            .catch(() => {
                res.status(500).json({success: "false", msg: "Failed to edit task"});
            })
    }

    // TODO
    deleteTask(req, res) {

    }

    // TODO
    checkTask(req, res) {

    }

    // TODO
    unCheckTask(req, res) {

    }

    // TODO
    pinTask(req, res) {

    }

    // TODO
    unPinTask(req, res) {

    }
}

module.exports = new TodoListController();