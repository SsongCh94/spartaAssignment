import React, { useState } from "react";
import ReviseFunction from "./ReviseFunction";
import Buttons from "./Buttons";

function Cards({ item, todos, setTodos}) {
  const [visible, setVisible] = useState(false);

const clickDeleteButtonHandler = () => {
    const newTodo = todos.filter((value) => {
      return value.id !== item.id;
    });
    setTodos(newTodo);
  };

  const clickDoneButtonHandler = () => {
    const doneThing = todos.map((value) => {
      if (value.id === item.id) {
        if (value.done === false) {
          value.done = true;
        } else value.done = false;
      }
      return value;
    });
    setTodos([...doneThing]);
  };

  return (
    <div className="todo" key={item.id}>
      <div className="todoTitle">{item.title}</div>
      <div className="whatTodo">{item.content}</div>

      <div className="todoButtonBox">
        <Buttons 
        text={'삭제'}
        styleName="todoDeleteButton" 
        func={clickDeleteButtonHandler} />

        <Buttons 
        text={item.done ? "취소" : "완료"} 
        styleName="todoDoneButton" 
        func={clickDoneButtonHandler} />

        <Buttons 
        text="수정" 
        styleName="todoReviseButton" 
        func={() => {setVisible(!visible);}}/>
        
      </div>
      {visible && (
        <ReviseFunction todos={todos} setTodos={setTodos} item={item} />
      )}
    </div>
  );
}

export default Cards;
