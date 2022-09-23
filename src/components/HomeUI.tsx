import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import Loading from "./Loading";
import TodoItem, {Todo} from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import ModalGeneric from "./ModalGeneric";
import FormsNewTodo from "./Forms/FormsNewTodo";
import React, {useContext} from "react";
import {TypesDefault} from "../Home";
import {TodoContext} from "./todoContext";

interface Iprops{
    countCompletedTodos?:any;
    item?:Todo[];
    search?:string;
    setSearch?:(text:string)=>void;
    searchTodos?:Todo[];
    loading?:boolean;
    completedTodo?:(text:string)=>void;
    deleteTodo?:(text:string)=>void;
    saveItem?:(data:TypesDefault|TypesDefault[])=>void;
    modal?:boolean;
    setModal?:(data:boolean)=>void;
}

export default function HomeUI(){
        const {
            loading,
            searchTodos,
            completedTodo,
            deleteTodo
        } =useContext(TodoContext)
    return(
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {()=>(
                        <TodoList>
                            <>
                                {loading && <Loading/>}
                                {
                                    searchTodos?.map((todo: Todo, index:number) => (
                                        <TodoItem key={index} todo={todo} onCompleted={completedTodo}
                                                  deleteTodo={() => deleteTodo(todo.text)}/>
                                    ))
                                }
                            </>
                        </TodoList>
                    )
                }
            </TodoContext.Consumer>

            <CreateTodoButton />
            <ModalGeneric className={""}
                          idFrom={'formNewTodo'}>
                <FormsNewTodo />
            </ModalGeneric>
        </>
    )
}