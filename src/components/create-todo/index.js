// always import your css file into the js file
// import React from "react";
import styles from "./index.module.css";
import {useLocalStorage} from "usehooks-ts";
import {useState} from "react";

function CreateTodo() {
    // const [todo, setTodo] = React.useState("");

    const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);

    const [todo, setTodo] = useState("");


    return (
        // when giving your element a class name, put styles.
        <section className={styles.createTodoSection}>
            <input 
            onChange={event => setTodo(event.target.value)} 
            className={styles.createTodoInput} 
            placeholder="Start typing..."/>
            <button 
            className="btn btn-dark"
            onClick={() => setTodos([...todos,todo])}>Create
            </button>
        </section>
    );
}

export default CreateTodo;