// always import your css file into the js file
// import React from "react";
import styles from "./index.module.css";
import {useState} from "react";

function CreateTodo() {


    const [todo, setTodo] = useState("");

    const saveTodos = async () => {
        // Post todo to the todo api
        const response = await fetch('http://localhost:4000/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: todo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        
        // wipe the input box
        setTodo("");
    }


    return (
        // when giving your element a class name, put styles.
        <section className={styles.createTodoSection}>
            <input 
            value={todo}
            onKeyDown={event => event.key == "Enter" && saveTodos()}
            onChange={event => setTodo(event.target.value)} 
            className={styles.createTodoInput} 
            placeholder="Start typing..."/>
            <button 
            className="btn btn-dark"
            onClick={() => saveTodos()}>Create
            </button>
        </section>
    );
}

export default CreateTodo;