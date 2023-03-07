import React, { useState } from "react";
import ReviseFunction from "./ReviseFunction";
import Buttons from "./Buttons";
import { useDispatch} from "react-redux";
import { deleteTodo, doneTodo } from "../redux/modules/todos";

function Cards({ item }) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const id = item.id;

  //TODO: setTodos 를 dispatch로 바꾸기.
  //TODO: reducer 만들기.
  //FIXME: 아래 버튼핸들러 reducer 로 만들기

  const clickDeleteButtonHandler = () => {
    dispatch(deleteTodo(id));
  };
  const clickDoneButtonHandler = () => {
    dispatch(doneTodo(id))
  };

  return (
    <div className="todo" key={item.id}>
      <div className="todoTitle">{item.title}</div>
      <div className="whatTodo">{item.content}</div>

      <div className="todoButtonBox">
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
      </div>
      {visible && (
        <ReviseFunction item={item} visible={visible} setVisible={setVisible}/>
      )}
    </div>
  );
}

export default Cards;
