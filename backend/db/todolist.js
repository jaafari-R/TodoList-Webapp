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

    /** TODO
     * 
     * @param {String} title Task title
     * @param {String} description Task description
     *
     * @returns the Id of the new task 
    */
    addTask(title, description) {
        try {
            new taskModel({
                id: this.idAI,
                title: title,
                description: description
            }).save();
            return this.idAI++;
        }
        catch (err) {
            console.log("Failed to add Task\n", err);
            return undefined;
        }
    }
    
    /** TODO
     * 
     * @returns an array of Task objects
     */
    getTasks() {
        try {
            return taskModel.find({});
        }
        catch(err) {
            console.log("Failed to retrieve tasks from DB\n", err)
            return undefined;
        }
    }

    /** TODO
     * 
     * @param {Number} id
     * 
     * @returns a Task Object 
     */
    getTask(id) {

    }

    /** TODO
     * 
     * @param {Number} id Task Id
     * @param {String} title Task title
     * @param {String} description Task description
     * 
     * @returns true if the task was updated successfully / false otherwise
     */
    updateTask(id, title, description) {

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