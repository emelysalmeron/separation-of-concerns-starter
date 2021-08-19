import {todoInput} from '../components/selectors.js'
import {todoList} from '../components/selectors.js'

export const addTodo = (event)=> {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null
    }
    
    //Append to Actual LIST
    todoList.appendChild(todoDiv);
    //Clear todo input VALUE
    todoInput.value = ""
}

