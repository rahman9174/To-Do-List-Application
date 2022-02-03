import React from 'react';
import {Todos} from "./Todos.js"


export const TodoItem = ({todo,onDelete}) => {
    return (<div>
        <h4>{todo.sno} : {todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    ); 
};       
