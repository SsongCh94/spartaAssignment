import React from "react";
import styled from "styled-components";
import Inputs from "../redux/components/Inputs";
import Buttons from "../redux/components/Buttons";

const StForm = styled.form`
  background-color: aqua;
  width: 100%;
  height: 100vh;

  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function AddTodos() {
  return (
    <StForm>
      <h2>작성자</h2>
      <Inputs
        type="text"
        size={"medium"}
        placeholder={"작성자 이름 (5자 이내)"}
      />
      <h2>URL</h2>
      <Inputs type="text" size={"medium"} placeholder={"URL"} />
      <h2>제목</h2>
      <Inputs type="text" size={"medium"} placeholder={"제목 (50자 이내)"} />
      <h2>별점</h2>
      <Inputs type="text" size={"medium"} placeholder={"select로 바꾸기"} />
      <h2>감상평</h2>
      <Inputs type="text" size={"large"} placeholder={"내용 (200자 이내)"} />
      <Buttons>기록하기</Buttons>
    </StForm>
  );
}

export default AddTodos;
