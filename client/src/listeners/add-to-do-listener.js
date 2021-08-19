import { addTodo } from '../handlers/add-to-do.js';

const todoButton = document.querySelector('.todo-button');
// event listeners
todoButton.addEventListener('click', addTodo);
