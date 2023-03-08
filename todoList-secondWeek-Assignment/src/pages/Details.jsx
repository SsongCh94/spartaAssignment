import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Work() {
  const params = useParams();
  const todos = useSelector((state) => state.todos);

  // 어떤 todo 인지 찾아보기
  const foundTodos = todos.find((item) => {
    return item.id === parseInt(params.id);
  });

  return (
    <div>
      <div>
        ID : {foundTodos.id}
        <button>이전으로</button>
      </div>
      <h3>{foundTodos.title}</h3>
      <div>{foundTodos.content}</div>
    </div>
  );
}

export default Work;
