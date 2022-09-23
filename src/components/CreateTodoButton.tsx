import "../styles/CreateTodoButton.css"
import {useContext} from "react";
import {TodoContext} from "./todoContext";

interface Iprops{
    onClick:()=>void;
}
export default function CreateTodoButton(){
    const {
        setModal
    } =useContext(TodoContext)


    return (
        <>
            <button className="CreateTodoButton "
            onClick={()=>setModal(true)}
            >
                +
            </button>
        </>
    )
}