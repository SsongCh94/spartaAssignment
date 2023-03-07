import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { reviseTodo } from '../redux/modules/todos';
import Inputs from "./Inputs";

function ReviseFunction({ item, visible, setVisible }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(todos.title);
  const [content, setContent] = useState(todos.content);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const clickSaveButton = (id) => {
    dispatch(reviseTodo({
      id,
      title,
      content,
      done: item.done
    }))
    setVisible(!visible)
  };

  return (
    <>
      <div>
        <Inputs
          styleName={"reviseInput"}
          onChangeFunc={onChangeTitle}
          inPlaceholder={"타이틀"}
        />
        <Inputs
          styleName={"reviseInput"}
          onChangeFunc={onChangeContent}
          inPlaceholder={"내용"}
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
