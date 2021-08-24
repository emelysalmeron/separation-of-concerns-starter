import { deleteTask } from '../handlers/delete-task.js';

const todoList = document.querySelector('.todo_list');
todoList.addEventListener('click', deleteTask);
