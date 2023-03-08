import styled from "styled-components";

export const TodoBox = styled.div`
  width: 230px;

  font-weight: bold;

  margin: 20px 20px 0 0;
  padding: 7px 10px 7px 10px;

  border: 2px solid green;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;
`;

export const TodoButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 13px;
`;
