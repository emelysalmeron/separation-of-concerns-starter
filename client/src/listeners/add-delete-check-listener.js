import { addTodo, deleteCheck } from '../handlers/add-delete-check-handlers.js';

const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo_list');
// event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
