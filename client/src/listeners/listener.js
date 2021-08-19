import {todoButton} from '../components/selectors.js'
import {addTodo} from "../handlers/handler.js"
//event listeners
todoButton.addEventListener("click", addTodo)

