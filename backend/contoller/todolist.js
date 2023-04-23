todoListModel = require('../db/todolist')

const TodoListController = class {
    async addTask (req, res) {
        const name = req.body.title;
        const description = req.body.description;

        const newTaskId = await todoListModel.addTask(name, description);
        if(newTaskId)
            res.json({success: "true", taskId: newTaskId});
        else
            res.json({success: "false"});
    }

    // TODO
    getTasks(req, res) {

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