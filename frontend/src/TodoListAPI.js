import axios from 'axios';

const API_URL = "http://localhost:5000/api/v1/todolist"

const TodoListAPI = class {
    /** TODO return new task id or error
     * 
     * @param {String} taskTitle 
     * @param {String} taskDescription 
     */
    createTask(taskTitle, taskDescription) {
        axios.post(API_URL + "/add",
            {
                title: taskTitle,
                description: taskDescription
            }
        )
            .then(() => {

            })
            .catch((err) => console.log(err));
    }
}

export const todoListAPI = new TodoListAPI();