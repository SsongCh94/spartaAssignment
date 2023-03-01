import { useState } from "react";
import ReviseFunction from "./ReviseFunction";

const Todos = ({ item, todos, setTodos }) => {
  const [visible, setVisible] = useState(false);

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

  if (item.done === false) {
    return (
      <div className="todo" key={item.id}>
        <div className="todoTitle">{item.title}</div>
        <div className="whatTodo">{item.content}</div>

        <div className="todoButtonBox">
          <button
            className="todoDeleteButton"
            onClick={() => clickDeleteButtonHandler(item.id)}
          >
            삭제
          </button>
          <button
            className="todoDoneButton"
            onClick={() => clickDoneButtonHandler(item.id)}
          >
            완료
          </button>
          <button
            className="todoReviseButton"
            onClick={() => setVisible(!visible)}
          >
            {visible ? "취소" : "수정"}
          </button>
        </div>
        {visible && (
          <ReviseFunction todos={todos} setTodos={setTodos} item={item} />
        )}
      </div>
    );
  } else return;
};

export default Todos;
