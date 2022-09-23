import "../styles/TodoSearch.css"
import React, {useContext, useState} from "react";
import {Todo} from "./TodoItem";
import {TodoContext} from "./todoContext";

interface Iprops {
    search: string;
    setSearch: (text:string) => void;
}

export default function TodoSearch() {
    const {
        search,setSearch
    } =useContext(TodoContext)
    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    return (
        <>
            <input className="TodoSearch" placeholder={'search'} value={search} onChange={onSearchValueChange}/>
        </>
    )
}