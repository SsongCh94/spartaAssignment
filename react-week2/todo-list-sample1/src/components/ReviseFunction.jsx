import React, { useState } from "react";

function ReviseFunction({ todos, setTodos, item }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const clickSaveButton = (id) => {
    let changeTodo = todos.filter((item) => {
      return item.id === id;
    });
    const originalTodo = todos.filter((item) => {
      return item.id !== id;
    });

    changeTodo = {
      id: todos[todos.length - 1].id + 1,
      title,
      content,
      done: false,
    };

    setTodos([...originalTodo, changeTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          className="reviseInput"
          onChange={onChangeTitle}
          placeholder="타이틀"
        />
        <input
          type="text"
          className="reviseInput"
          onChange={onChangeContent}
          placeholder="내용"
        />
      </div>
      <button
        onClick={() => clickSaveButton(item.id)}
        className="reviseSaveButton"
      >
        저장하기
      </button>
    </>
  );
}

export default ReviseFunction;
