import React, { useState } from "react";
import style from "./CreateTodoField.module.css"

const CreateTodoField =({setTodos})=>{

    const [title, setTitle] =useState('')
    

    const addTodos = title =>{
        setTodos(prev =>[{
            _id:new Date(),
            title,
            isCompleted:false},...prev,])
        setTitle('')}

    return(
        <div className={style.field}>
            <input className={style.input}type="text" placeholder="Add a task" onChange = {e => setTitle(e.target.value)}
            value={title}
            onKeyDown={e =>e.key==='Enter' && addTodos(title)}
            />
        </div>
    )
}

export default CreateTodoField