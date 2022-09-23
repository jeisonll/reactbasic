import "../styles/TodoCounter.css"
import {useContext} from "react";
import {TodoContext} from "./todoContext";

interface Iprops{
    completedTodos:number;
    totalTodos:number;
}
export default function TodoCounter(){
    const {
        countCompletedTodos,
        item
    } =useContext(TodoContext)
    return (
        <>
            <h2 className="TodoCounter">Has completado {countCompletedTodos} de {item?.length} ToDo</h2>
        </>
    )
}