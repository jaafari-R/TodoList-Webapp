import axios from 'axios';

const TodoListAPI = class {
    constructor() {
        this.axios = axios.create({
            baseURL: "http://localhost:5000/api/v1/todolist"
        });
    }

    /**
     * 
     * @param {String} taskTitle 
     * @param {String} taskDescription
     * @returns a Promise depending on the api call response:
     *              - on success - data in the format: 
     *                  { success: true,
     *                    newTask: {_id, title, description, checked, pinned, __v} }
     *              - on failure - error in the format: { success: false, msg: {String} }
     *              - on no-response - undefined
     */
    createTask(taskTitle, taskDescription) {
        return new Promise((res, rej) => {
            this.axios.post("/add",
                {
                    title: taskTitle,
                    description: taskDescription
                }
            )
                .then((response) => {
                    res(response.data);
                })
                .catch((err) => 
                {
                    if(err.response)
                        rej(err.response.data)
                    else
                        rej(undefined)
                });
        })
    }
    
    /**
     * 
     * @returns a Promise depending on the api call response:
     *              - on success - data in the format: 
     *                  { success: true,
     *                    tasks: [ {_id, title, description, checked, pinned, __v}, ...] }
     *              - on failure - error in the format: { success: false, msg: {String} }
     *              - on no-response - undefined
     */
    getAllTasks() {
        return new Promise((res, rej) => {
            this.axios.get("/get")
            .then((response) => {
                res(response.data);
            })
            .catch((err) => 
            {
                if(err.response)
                    rej(err.response.data)
                else
                    rej(undefined)
            });
        });
    }

    /**
     * 
     * @param {Number} taskId 
     * @returns a Promise depending on the api call response:
     *              - on success - data in the format: 
     *                  { success: true,
     *                    task: {_id, title, description, checked, pinned, __v} }
     *              - on failure - error in the format: { success: false, msg: {String} }
     *              - on no-response - undefined
     */
    getTask(taskId) {
        return new Promise((res, rej) => {
            this.axios.get("/get/" + taskId)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => 
            {
                if(err.response)
                    rej(err.response.data)
                else
                    rej(undefined)
            });
        })
    }

    /**
     * 
     * @param {Number} taskId 
     * @returns a Promise depending on the api call response:
     *              - on success - success in the format: { success: true }
     *              - on failure - error in the format: { success: false, msg: {String} }
     *              - on no-response - undefined
     */
    deleteTask(taskId) {
        return new Promise((res, rej) => {
            this.axios.delete("/delete/" + taskId)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => 
            {
                if(err.response)
                    rej(err.response.data)
                else
                    rej(undefined)
            });
        })
    }

    /**
     * 
     * @param {Number} taskId 
     * @param {String} taskTitle 
     * @param {String} taskDescription 
     * @returns a Promise depending on the api call response:
     *              - on success - success in the format: { success: true }
     *              - on failure - error in the format: { success: false, msg: {String} }
     *              - on no-response - undefined
     */
    editTask(taskId, taskTitle, taskDescription) {
        return new Promise((res, rej) => {
            this.axios.put("/update/" + taskId,
                {
                    title: taskTitle,
                    description: taskDescription
                }
            )
            .then((response) => {
                console.log(response)
                res(response.data);
            })
            .catch((err) => 
            {
                if(err.response)
                    rej(err.response.data)
                else
                    rej(undefined)
            });
        })
    }

    /**
     * 
     * @param {Number} taskId 
     * @param {Boolean} mark 
     * @returns a Promise depending on the api call response:
     *              - on success - success in the format: { success: true }
     *              - on failure - error in the format: { success: false, msg: {String} }
     *              - on no-response - undefined
     */
    markTask(taskId, mark) {
        return new Promise((res, rej) => 
        {
            this.axios.put(`/check/${taskId}`,
            {
                check: mark
            })
            .then((response) => {
                res(response.data);
            })
            .catch((err) => 
            {
                if(err.response)
                    rej(err.response.data)
                else
                    rej(undefined)
            });
        })
    }

    /**
     * 
     * @param {Number} taskId 
     * @param {Boolean} pin 
     * @returns a Promise depending on the api call response:
     *              - on success - success in the format: { success: true }
     *              - on failure - error in the format: { success: false, msg: {String} }
     *              - on no-response - undefined
     */
        pinTask(taskId, pin) {
            return new Promise((res, rej) => 
            {
                this.axios.put(`/pin/${taskId}`,
                {
                    pin: pin
                })
                .then((response) => {
                    res(response.data);
                })
                .catch((err) => 
                {
                    if(err.response)
                        rej(err.response.data)
                    else
                        rej(undefined)
                });
            })
        }
}

export const todoListAPI = new TodoListAPI();