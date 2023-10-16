import React from "react";
import Check from "../Check/Check";
import style from "./TodoItems.module.css";
import {BsTrash} from 'react-icons/bs'

function TodoItems({ todo, changeTodos, removeTodos }) {
  return (
    <div className={style.item}>
    <button className={style.item} onClick={() => changeTodos(todo._id)}>
     <Check isCompleted={todo.isCompleted} />
      <span
        className={`${style.text} ${todo.isCompleted ? style.completed : ""}`}
        onClick={() => changeTodos(todo._id)}
      >
        {todo.title}
      </span>
      </button>
      <button  className={style.delete} onClick={()=> removeTodos(todo._id)}>
      <BsTrash/>
    </button>
    </div>
  );
}

export default TodoItems;
