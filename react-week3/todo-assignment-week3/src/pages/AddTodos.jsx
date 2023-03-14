import React from "react";
import styled from "styled-components";
import Inputs from "../redux/components/Inputs";

const StForm = styled.form`
  background-color: aqua;
  width: 100%;
  height: 100vh;

  padding: 50px;
`;

function AddTodos() {
  return (
    <StForm>
      <h2>작성자</h2>
      <Inputs type="text" size={"medium"} value={"작성자 이름 (5자 이내)"} />
      <h2>제목</h2>
      <Inputs type="text" size={"medium"} value={"제목 (50자 이내)"} />
      <h2>내용</h2>
      <Inputs type="text" size={"large"} value={"내용 (200자 이내)"} />
    </StForm>
  );
}

export default AddTodos;
