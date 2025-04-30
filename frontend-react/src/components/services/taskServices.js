import axios from 'axios';

const API = 'http://localhost:5000/api/tasks';

export const getTasks = () => axios.get(API);                       // get all tasks 
export const addTask = (task) => axios.post(API, task);             // Add new task
export const updateTask = (id, task) => axios.put(`${id}`, task);   // update task using ID 
export const deleteTask = (id) => axios.delete(`${id}`);            // Delete task usinf ID