import { addTodo } from '../handlers/handler.js';

const todoButton = document.querySelector('.todo-button');
// event listeners
todoButton.addEventListener('click', addTodo);
