import React from "react";
import { SiAzuredataexplorer } from "react-icons/si";
import styled from "styled-components";
import Buttons from "../redux/components/Buttons";

const HomeArea = styled.div`
  background-color: aqua;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 100px;
`;

function Home() {
  return (
    <HomeArea>
      <h1>TodoList</h1>
      <Buttons size={"home"} emoticon={<SiAzuredataexplorer />}>
        할일 기록하기
      </Buttons>
      <Buttons size={"home"} emoticon={<SiAzuredataexplorer />}>
        TODO LIST
      </Buttons>
    </HomeArea>
  );
}

export default Home;
