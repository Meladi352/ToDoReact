import React, { useState, useEffect } from "react";
import TodoItems from "../TodoItems/TodoItems.jsx";
import CreateTodoField from "../CreateTodoField/CreateTodoField.jsx";
import style from "./Home.module.css";

const LOCAL_STORAGE_KEY = "todos";

const Home = () => {
  const [todos, setTodos] = useState([]);


  const saveToLocalStorage = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  };

 
  const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return [];
  };

  const changeTodos = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodos = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  useEffect(() => {
    const dataFromLocalStorage = loadFromLocalStorage();
    if (dataFromLocalStorage.length > 0) {
      setTodos(dataFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    // Сохранение данных в Local Storage при изменении todos
    saveToLocalStorage(todos);
  }, [todos]);

  return (
    <div className={style.text}>
      <h1>ToDo</h1>
      {todos.map((todo) => (
        <TodoItems
          key={todo._id}
          todo={todo}
          changeTodos={changeTodos}
          removeTodos={removeTodos}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home;
