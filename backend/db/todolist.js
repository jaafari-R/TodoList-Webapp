taskModel = require('./models/task');

const TodoListModel = class {
    
    /**
     * 
     * @param {String} title Task title
     * @param {String} description Task description
     *
     * @returns The new task  / null on failure
    */
    addTask(title, description) {
        return new Promise((res, rej) => {
            new taskModel({
                title: title,
                description: description
            }).save()
                .then((task) => {
                    res(task);
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
     * @param {ObjectId} _id Task Id
     * 
     * @returns a Task Object / null on failure
     */
    getTask(_id) {
        return new Promise((res, rej) => {
            taskModel.find({_id})
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
     * @param {ObjectId} _id Task Id
     * @param {String} title Task title
     * @param {String} description Task description
     * 
     * @returns true if the task was updated successfully / null otherwise
     */
    async updateTask(_id, title, description) {
        return new Promise((res, rej) => {
            taskModel.updateOne({_id}, [ { $set: {title, description} } ])
                .then((db_res) => {
                    if(db_res.modifiedCount)
                        res(true);
                    else
                    {
                        console.log("document unchanged or Failed to update non-existing document in db\n");
                        rej(null);
                    }
                })
                .catch((err) => {
                    console.log("Failed to update task in DB\n", err, "\n");
                    rej(null);
                })
        });
    }

    /** TODO - add custom errors
     * 
     * @param {ObjectId} _id Task Id
     * 
     * @returns true if the task was deleted successfully / null otherwise
     */
    async deleteTask(_id) {
        return new Promise((res, rej) => {
            taskModel.deleteOne({_id})
                .then((db_res) => {
                    if(db_res.deletedCount)
                        res(true);
                    else
                    {
                        console.log("Failed to delete non-existing document from db\n");
                        rej(null);
                    }
                })
                .catch((err) => {
                    console.log("Failed to delete task from DB\n", err, "\n");
                    rej(null);
                })
    })
    }

    /** TODO - add custom errors
     * 
     * @param {ObjectId} _id Task Id
     * @param {Boolean} on mark task ==> true | un-mark task ===> false 
     * 
     * @returns true if the task was marked/unmarked successfully / null otherwise
     */
    markTask(_id, on) {
        return new Promise((res, rej) => {
            taskModel.updateOne({_id}, [ { $set: {marked: on} } ])
                .then((db_res) => {
                    if(db_res.modifiedCount)
                        res(true);
                    else
                    {
                        console.log("document unchanged or Failed to mark/unmark non-existing document in db\n");
                        rej(null);
                    }
                })
                .catch((err) => {
                    console.log("Failed to mark/unmark task in the DB\n", err, "\n");
                    rej(null);
                })
        })
    }

    /** TODO - add custom errors
     * 
     * @param {ObjectId} _id Task Id
     * @param {Boolean} on pin task ==> true | unpin task ===> false 
     */
    pinTask(_id, on) {
        return new Promise((res, rej) => {
            taskModel.updateOne({_id}, [ { $set: {pinned: on} } ])
                .then((db_res) => {
                    if(db_res.modifiedCount)
                        res(true);
                    else
                    {
                        console.log("document unchanged or Failed to pin/unpin non-existing document in db\n");
                        rej(null);
                    }
                })
                .catch((err) => {
                    console.log("Failed to pin/unpin task in the DB\n", err, "\n");
                    rej(null);
                })
        })
    }
};

module.exports = new TodoListModel();