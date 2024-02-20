import {useState, useEffect} from "react";
import {useLocalStorage} from "usehooks-ts";
import TodoItem from "../todo-item";

function TodoList() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);

    return (
            <ul className="list-group">
                {todos.map(function(todo, index) {
                    return <TodoItem Todo={todo} Index={index} />;
             } )}    
            </ul>
    );
}

export default TodoList;