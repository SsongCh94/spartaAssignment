import React, { useState } from "react";
import Inputs from "./Inputs";

function ReviseFunction({ todos, setTodos, item }) {
  const [title, setTitle] = useState(todos.title);
  const [content, setContent] = useState(todos.content);

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
        <Inputs styleName={'reviseInput'} onChangeFunc={onChangeTitle} inPlaceholder={'타이틀'}/>
        <Inputs styleName={'reviseInput'} onChangeFunc={onChangeContent} inPlaceholder={'내용'}/>
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
