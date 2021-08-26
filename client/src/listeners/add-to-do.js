import { addTodo } from '../handlers/add-to-do.js';

const todoButton = document.querySelector('.todo_button');
todoButton.addEventListener('click', addTodo);
