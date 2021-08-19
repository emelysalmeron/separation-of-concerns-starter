const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo_list');

export const addTodo = (event) => {
  event.preventDefault();
  // create todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create todo LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo_item');
  todoDiv.appendChild(newTodo);
  if (todoInput.value === '') {
    return null;
  }

  // Append to Actual LIST
  todoList.appendChild(todoDiv);
  // Clear todo input VALUE
  todoInput.value = '';
  return todoDiv; // added this line to avoid the lint error as the function expects to have a return statement
};
