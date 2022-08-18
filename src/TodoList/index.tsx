import React from "react";
import './TodoList.css'

function TodoList(props: any) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }