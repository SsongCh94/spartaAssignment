import React from "react";
import { useNavigate } from "react-router-dom";

function Todos() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      Todos 페이지임
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        누르면 홈으로 이동
      </button>
    </div>
  );
}

export default Todos;
