import React, { useState } from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

function Header({ todos, setTodos }) {
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
    <div id="inputArea">
      <span className="inputTitle">제목</span>

      <Inputs
        styleName={"inputBox"}
        inValue={title}
        onChangeFunc={titleChangeHandler}
        inPlaceholder={"타이틀을 입력하세요"}
      />

      <span className="inputTitle">내용</span>

      <Inputs
        styleName={"inputBox"}
        inValue={content}
        onChangeFunc={contentChangeHandler}
        inPlaceholder={"내용을 입력하세요"}
      />

      <Buttons
        func={clickAddButton}
        styleName={"addButton"}
        text={"추가하기"}
      />
    </div>
  );
}

export default Header;
