// always import your css file into the js file
// import React from "react";
import styles from "./index.module.css";
import {useLocalStorage} from "usehooks-ts";
import {useState} from "react";

function CreateTodo() {

    const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);

    const [todo, setTodo] = useState("");

    const saveTodos = () => {
        // save all todos
        setTodos([...todos,todo]);
        // wipe the input box
        setTodo("");
    }


    return (
        // when giving your element a class name, put styles.
        <section className={styles.createTodoSection}>
            <input 
            value={todo}
            onKeyDown={event => event.key == "Enter" && saveTodos([...todos,todo])}
            onChange={event => setTodo(event.target.value)} 
            className={styles.createTodoInput} 
            placeholder="Start typing..."/>
            <button 
            className="btn btn-dark"
            onClick={() => saveTodos([...todos,todo])}>Create
            </button>
        </section>
    );
}

export default CreateTodo;