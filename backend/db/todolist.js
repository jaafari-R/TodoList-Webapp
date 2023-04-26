taskModel = require('./models/task');

const TodoListModel = class {
    
    constructor() {
        // Id Auto Increment
        taskModel.findOne({}, {}, {sort: {'id': -1 } })
            .then((lastDocument) => {
                this.idAI = lastDocument.id + 1;
            })
            .catch((err) => {
                this.idAI = 1
            });
    }

    /**
     * 
     * @param {String} title Task title
     * @param {String} description Task description
     *
     * @returns the Id of the new task  / null on failure
    */
    addTask(title, description) {
        return new Promise((res, rej) => {
            new taskModel({
                id: this.idAI,
                title: title,
                description: description
            }).save()
                .then((task) => {
                    res(this.idAI++);
                })
                .catch((err) => {
                    console.log("Failed to add Task\n", err, "\n");
                    rej(null);    
                });
        })
    }
    
    /**
     * 
     * @returns an array of Task objects / null on failure
     */
    getTasks() {
        return new Promise((res, rej) => {
            taskModel.find({})
                .then((tasks) => {
                    res(tasks);
                })
                .catch((err) => {
                    console.log("Failed to retrieve tasks from DB\n", err, "\n");
                    rej(null);
                })
            })
        }

    /** TODO create custom errors
     * 
     * @param {Number} id
     * 
     * @returns a Task Object / null on failure
     */
    getTask(id) {
        return new Promise((res, rej) => {
            taskModel.find({"id": id})
                .then((task) => {
                    if(task.length != 0)
                        res(task[0]);
                    else
                        rej(null) // "Task Does not exist"
                })
                .catch((err) => {
                    console.log("Failed to retrieve task from DB\n", err, "\n");
                    rej(null);
                })
        })
    }

    /** TODO - add custom errors
     * 
     * @param {Number} id Task Id
     * @param {String} title Task title
     * @param {String} description Task description
     * 
     * @returns true if the task was updated successfully / null otherwise
     */
    async updateTask(id, title, description) {
        let taskExists = false;

        await this.getTask(id)
            .then(() => {
                taskExists = true;
            })
        
        return new Promise((res, rej) => {
            if(taskExists)
                taskModel.updateOne({id: id}, [ {$set: {title, description} } ])
                    .then(() => {
                        res(true);
                    })
                    .catch((err) => {
                        console.log("Failed to update task in DB\n", err, "\n");
                        rej(null);
                    })
            else
                rej(null) // task does not exist
        });
    }

    /** TODO
     * 
     * @param {Number} id Task Id
     * 
     * @returns true if the task was deleted successfully / false otherwise
     */
    deleteTask(id) {

    }

    /** TODO
     * 
     * @param {Number} id Task Id
     */
    checkTask(id) {

    }

    /** TODO
     * 
     * @param {Number} id Task Id
     */
    unCheckTask(id) {

    }

    /** TODO
     * 
     * @param {Number} id Task Id
     */
    pinTask(id) {

    }

    /** TODO
     * 
     * @param {Number} id Task Id
     */
    unPinTask(id) {
        
    }
};

module.exports = new TodoListModel();