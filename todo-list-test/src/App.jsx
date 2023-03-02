import React, { useState } from "react";
import "./App.css";

function App2() {
  const [todos, setTodos] = useState([
    { id: 1, content: "todoList" },
    { id: 2, content: "todoList" },
  ]);
  const [content, setContent] = useState("");

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const clickSaveButton = () => {
    const newTodo = {
      id: todos.length + 1,
      content,
    };
    setTodos([...todos, newTodo]);
    setContent("");
  };
  return (
    <div>
      <header>
        <input type="text" value={content} onChange={contentChangeHandler} />
        <button onClick={clickSaveButton}>추가하기</button>
      </header>
        <div id="TodoList">
        <h1>Todo List</h1>
        </div>
        <div className="cardsBox">
          {todos.map((item) => {
            return (
              <div className="card">
                  <div>{item.content}</div>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default App2;
