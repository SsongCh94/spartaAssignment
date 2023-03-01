import React from "react";

function Buttons({
  todos,
  setTodos,
  item,
  functions,
  visible,
  setVisible,
  types,
}) {

  let buttonFunction;
  let text = "";

  const clickDeleteButtonHandler = (id) => {
    const newTodo = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodo);
  };

  const clickDoneButtonHandler = (id) => {
    const doneThing = todos.map((item) => {
      if (item.id === id) {
        if (item.done === false) {
          item.done = true;
        } else item.done = false;
      }
      return item;
    });
    setTodos([...doneThing]);
  };

  switch (functions) {
    case "deleteFunction":
        text = "삭제";
      break;
    case "doneFunction":
        types === "isWorking" ? text = "완료" : text = "취소";
      break;
    case "reviseFunction":
      text = "수정";
      break;
  }
//   buttonFunction = clickDeleteButtonHandler(item.id);
//   buttonFunction = clickDoneButtonHandler(item.id);
//   buttonFunction = setVisible(!visible);

  return (
    <>
      <button
        className="todoDeleteButton"
        // onClick={() => buttonFunction}
        onClick={() => {
          switch (functions) {
            case "deleteFunction":
              return clickDeleteButtonHandler(item.id);
            case "doneFunction":
              return clickDoneButtonHandler(item.id);
            case "reviseFunction":
              return setVisible(!visible);
          }
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Buttons;
