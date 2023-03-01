import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Done from "./components/Done";

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

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const clickAddButton = () => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      title,
      content,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };



  return (
    <div id="todoList">
      <div id="inputArea">
        <span className="inputTitle">제목</span>
        <input
          className="inputBox"
          value={title}
          onChange={titleChangeHandler}
        />
        <span className="inputTitle">내용</span>
        <input
          className="inputBox"
          value={content}
          onChange={contentChangeHandler}
        />
        <button className="addButton" onClick={clickAddButton}>
          추가하기
        </button>
      </div>

      <div id="working">Working..🔥</div>
      <div id="workingArea">
        {todos.map((item) => {
          return (
            <Todos
              key={item.id}
              item={item}
              todos={todos}
              setTodos={setTodos}

            />
          );
        })}
      </div>

      <div id="working">Done..🎉</div>
      <div id="workingArea">
        {todos.map((item) => {
          return (
            <Done
              key={item.id}
              item={item}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
