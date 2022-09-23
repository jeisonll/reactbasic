import React, {useState} from 'react';
import './App.css';
import HomeUI from "./components/HomeUI";
import {TodoProvider} from "./components/todoContext";

export type TypesDefault = string | number | boolean | object


function Home() {

    return (
        <TodoProvider>
            <HomeUI />
        </TodoProvider>

    );
}

export default Home;
