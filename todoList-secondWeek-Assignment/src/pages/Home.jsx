import React from "react";
import "../App.css";
import Todos from "../components/Todos";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 97%;
  max-width: 1200px;
  min-width: 800px;

  padding: 20px;
`;

function Home() {
  return (
    <TodoList>
      <Navbar />
      <Header />
      <Todos types={false} />
      <Todos types={true} />
    </TodoList>
  );
}

export default Home;
