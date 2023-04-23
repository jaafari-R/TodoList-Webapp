todoListModel = require('../db/todolist')

const TodoListController = class {
    async addTask (req, res) {
        const name = req.body.title;
        const description = req.body.description;

        const newTaskId = await todoListModel.addTask(name, description);
        if(newTaskId)
            res.status(201).json({success: "true", taskId: newTaskId});
        else
            res.status(500).json({success: "false", msg: "Failed to create task"});
    }

    // TODO
    async getTasks(req, res) {
        const tasks = await todoListModel.getTasks();
        if(tasks)
            res.json({success: "true", tasks});
        else
            res.status(500).json({success: "false", msg: "Failed to retrieve takss"})
    }

    // TODO
    getTask(req, res) {

    }

    // TODO
    updateTask(req, res) {

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