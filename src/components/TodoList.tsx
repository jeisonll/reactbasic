import React from "react";
import "../styles/TodoList.css"

interface Iprops {
    children: React.ReactElement
}

export default function TodoList({children}: Iprops) {

    return (
        <section>
             <ul className="list-group list-group-flush">
                {children}
             </ul>
        </section>
    )
}