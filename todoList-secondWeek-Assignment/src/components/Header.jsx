import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

function Header() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // FIXME: 스테이트 리덕스로 옮기기?? 여기밖에 안쓰는데??
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // FIXME: /////////////

  const id = todos[todos.length - 1].id + 1;

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const clickAddButton = () => {
    dispatch(addTodo({ id, title, content, done: false }));
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
