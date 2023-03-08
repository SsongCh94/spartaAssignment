import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

const HeaderArea = styled.form`
  background-color: rgba(194, 194, 194, 0.514);

  width: 100%;
  height: 80px;
  margin: 10px auto 0 auto;

  border-radius: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderInput = styled.label`
  font-weight: bold;
  margin: 0 7px 0 20px;
`;

function Header() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const id = todos[todos.length - 1].id + 1;

  // FIXME: 스테이트 리덕스로 옮기기?? 여기밖에 안쓰는데??
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // FIXME: /////////////

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const clickAddButton = () => {
    dispatch(addTodo({ id, title, content, done: false }));
    setTitle("");
    setContent("");
  };

  //TODO: required 메세지 표시되고, 저장됨 - form action 없어서?? 알아보기

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
