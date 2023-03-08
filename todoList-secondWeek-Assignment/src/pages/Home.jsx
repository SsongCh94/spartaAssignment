import React from "react";
import "../App.css";
import Todos from "../components/Todos";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 1200px;
  min-width: 800px;

  padding: 20px;
`;

function Home() {
  return (
    <Layout>
      <TodoList>
        <Navbar />
        <Header />
        <Todos types={false} />
        <Todos types={true} />
      </TodoList>
    </Layout>
  );
}

export default Home;
