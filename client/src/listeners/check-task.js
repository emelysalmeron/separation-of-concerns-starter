import { checkTask } from '../handlers/check-task.js';

const todoList = document.querySelector('.todo_list');
todoList.addEventListener('click', checkTask);
