const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo_list');

/**
 * Entry point for users adding a task to the list.
 * It is called each time the user clicks the "add" icon button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

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
  if (todoInput.value.length >= 99) {
    // eslint-disable-next-line no-alert
    return alert('your text is longer than 99 characters');
  }

  const completedButton = document.createElement('button');
  // add the icon to the button
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete_btn');
  todoDiv.appendChild(completedButton);

  const deleteButton = document.createElement('button');
  // add the icon to the button
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete_btn');
  todoDiv.appendChild(deleteButton);

  // Append to actual list
  todoList.appendChild(todoDiv);
  // Clear todo input value
  todoInput.value = '';
  return todoDiv; // added this line to avoid the lint error as the function expects to have a return statement
};
