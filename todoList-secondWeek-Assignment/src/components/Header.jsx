import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { HeaderArea, HeaderInput } from "./HeadersStyle";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

function Header() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const id = todos[todos.length - 1].id + 1;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // TODO: ReviseFunction 컴포넌트에서도 똑같은 느낌으로 쓰임. 모듈화
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const clickAddButton = () => {
    title && content
      ? dispatch(addTodo({ id, title, content, done: false }))
      : alert("제목과 내용을 모두 입력해주쇼");
    setTitle("");
    setContent("");
  };

  return (
    <HeaderArea>
      <HeaderInput>
        제목 &nbsp;
        <Inputs
          styleName={"inputBox"}
          inValue={title}
          onChangeFunc={titleChangeHandler}
          inPlaceholder={"타이틀을 입력하세요"}
        />
      </HeaderInput>

      <HeaderInput>
        내용 &nbsp;
        <Inputs
          styleName={"inputBox"}
          inValue={content}
          onChangeFunc={contentChangeHandler}
          inPlaceholder={"내용을 입력하세요"}
        />
      </HeaderInput>

      <Buttons
        func={clickAddButton}
        styleName={"addButton"}
        text={"추가하기"}
      />
    </HeaderArea>
  );
}

export default Header;
