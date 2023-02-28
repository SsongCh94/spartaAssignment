import { useState } from "react";
import ReviseFunction from "./ReviseFunction";

const Todos = ({ item, removeFunction, doneFunction, todos, setTodos }) => {
  const [visible, setVisible] = useState(false);

  if (item.done === false) {
    return (
      <div className="todo" key={item.id}>
        <div className="todoTitle">{item.title}</div>
        <div className="whatTodo">{item.content}</div>

        <div className="todoButtonBox">
          <button
            className="todoDeleteButton"
            onClick={() => removeFunction(item.id)}
          >
            삭제
          </button>
          <button
            className="todoDoneButton"
            onClick={() => doneFunction(item.id)}
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
