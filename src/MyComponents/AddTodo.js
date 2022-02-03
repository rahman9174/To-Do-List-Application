import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and description can not be blank");
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("") ;
        }
        
    }
    return (
        <div className='container my-3'>
            <h3>Add a To-Do</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">To-Do Titile</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"  placeholder="Enter your todo title" />
                         
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc } onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Todo Description" />
                </div>
               
                <button type="submit" className="btn btn-primary btn-sm btn-success">Add To-Do</button>
            </form>

        </div>
    )
};
