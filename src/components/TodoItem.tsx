import "../styles/TodoItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

interface Iprops {
    todo: Todo;
    onCompleted:(text:string)=>void;
    deleteTodo:()=>void;
}

export type Todo = {
    text: string;
    completed: boolean;

}

export default function TodoItem({todo, onCompleted,deleteTodo}: Iprops) {
    


    return (
        <li className="TodoItem">
            <span className={todo.completed?"text-success":"text-danger"} onClick={()=>onCompleted(todo.text)}><FontAwesomeIcon icon={faCheck}/></span>
            <p className={`TodoItem-p ${todo.completed && "TodoItem-p--complete"}`}>{todo.text}</p>
            <span className="Icon-delete" onClick={deleteTodo}><FontAwesomeIcon icon={faTrash} color="red"/></span>
        </li>
    )
}