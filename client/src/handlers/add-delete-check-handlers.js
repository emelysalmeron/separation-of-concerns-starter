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

  // create a check mark button
  const completedButton = document.createElement('button');
  // add the icon to the button
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  // add class name to the check mark button
  completedButton.classList.add('complete_btn');
  // append the button to the todo div
  todoDiv.appendChild(completedButton);

  // create a delete button
  const deleteButton = document.createElement('button');
  // add the icon to the button
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  // add class name to the delete button
  deleteButton.classList.add('delete_btn');
  // append the button to the todo div
  todoDiv.appendChild(deleteButton);

  // Append to Actual LIST
  todoList.appendChild(todoDiv);
  // Clear todo input VALUE
  todoInput.value = '';
  return todoDiv; // added this line to avoid the lint error as the function expects to have a return statement
};

// DELETE & CHECK
/**
 * @param e
 */

export const deleteCheck = (e) => {
  const item = e.target;
  // DELETE ITEM
  if (item.classList[0] === 'delete_btn') {
    const todo = item.parentElement;
    // ANIMATION TRANSITION
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }
  // COMPLETE ITEM
  if (item.classList[0] === 'complete_btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completedItem');
  }
};
