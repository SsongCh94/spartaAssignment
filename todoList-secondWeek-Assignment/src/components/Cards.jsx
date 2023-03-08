import React, { useState } from "react";
import ReviseFunction from "./ReviseFunction";
import Buttons from "./Buttons";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import { TodoBox, TodoButtonBox } from "./CardsStyle";

function Cards({ item }) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const id = item.id;

  const clickDeleteButtonHandler = () => {
    dispatch(deleteTodo(id));
  };
  const clickDoneButtonHandler = () => {
    dispatch(doneTodo(id));
  };

  return (
    <TodoBox key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <Link to={`/details/${item.id}`}>상세보기</Link>
      <TodoButtonBox>
        <Buttons
          text={"삭제"}
          styleName="todoDeleteButton"
          func={clickDeleteButtonHandler}
        />

        <Buttons
          text={item.done ? "취소" : "완료"}
          styleName="todoDoneButton"
          func={clickDoneButtonHandler}
        />

        <Buttons
          text="수정"
          styleName="todoReviseButton"
          func={() => {
            setVisible(!visible);
          }}
        />
      </TodoButtonBox>
      {visible && (
        <ReviseFunction item={item} visible={visible} setVisible={setVisible} />
      )}
    </TodoBox>
  );
}

export default Cards;
