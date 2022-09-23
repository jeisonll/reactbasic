import React, {createContext, useState} from "react";
import useLocalStorage from "./useLocalStorage";
import {Todo} from "../TodoItem";
import {TypesDefault} from "../../Home";
interface Iprops{
    children:React.ReactElement
}
interface IpropsContext{
    countCompletedTodos?:any;
    item?:Todo[];
    search?:string;
    setSearch?:(text:string)=>void;
    searchTodos?:Todo[];
    loading?:boolean;
    completedTodo:(text:string)=>void;
    deleteTodo:(text:string)=>void;
    saveItem?:(data:TypesDefault|TypesDefault[])=>void;
    modal?:boolean;
    setModal?:(data:boolean)=>void;
}
const TodoContext=createContext<any>({});

function TodoProvider({children}:Iprops){

    const {item, saveItem, loading} = useLocalStorage('Todos_V1', []);
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState('');
    const countCompletedTodos = item.filter((todo: Todo) => !!todo.completed).length;
    let searchTodos: Todo[] = [];

    if (search.length >= 1) {
        searchTodos = item.filter((todo: Todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
    } else {
        searchTodos = item;
    }

    const completedTodo = (text: string) => {
        const todoIndex = item.findIndex((todo: Todo) => todo.text === text);
        const newTodos = [...item];
        newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true;
        saveItem(newTodos);
        alert(`the todo ${text} ${item[todoIndex].completed ? ' is already' : ' is pending for hav'}`);
    }
    const deleteTodo = (text: string) => {
        const todoIndex = item.findIndex((todo: Todo) => todo.text === text);
        const newTodos = [...item];
        newTodos.splice(todoIndex, 1);
        saveItem(newTodos);
        alert(`the todo ${text} has remove`);
    }
    return(
        <TodoContext.Provider value={{
            saveItem,
            loading,
            item,
            setSearch,
            search,
            completedTodo,
            deleteTodo,
            modal,
            searchTodos,
            setModal,
            countCompletedTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export {TodoContext,TodoProvider};