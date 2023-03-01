import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Navbar from "./Navbar";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      done: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      done: false,
    },
    {
      id: 3,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      done: false,
    },
  ]);




  return (
    <div id="todoList">
      <Navbar />
      <Header todos={todos} setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos} types={'isWorking'} />
      <Todos todos={todos} setTodos={setTodos} types={'isDone'} />
    </div>
  );
}

export default App;
