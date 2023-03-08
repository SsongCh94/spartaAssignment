import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Buttons from "../components/Buttons";

const Layout = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  height: 100%;
  max-height: 2000px;
  min-height: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailPage = styled.div`
  width: 500px;
  height: 400px;

  display: flex;
  flex-direction: column;
`;

const DetailPageHeader = styled.header`
  background-color: black;
  color: white;
  font-size: 22px;
  font-weight: bold;

  width: 100%;
  height: 120px;
  padding: 30px;

  border: 1px solid black;
  border-radius: 15px 15px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
`;

const DetailPageContent = styled.div`
  background-color: #c6c6c6;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border: 1px solid black;
  border-radius: 0 0 15px 15px;

  box-sizing: border-box;
`;

function Work() {
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector((state) => state.todos);

  const backToHome = () => {
    navigate("/");
  };

  // 어떤 todo 인지 찾아보기
  const foundTodos = todos.find((item) => {
    return item.id === parseInt(params.id);
  });

  return (
    <Layout>
      <DetailPage>
        <DetailPageHeader>
          ID : {foundTodos.id}
          <Buttons
            func={backToHome}
            text={"이전으로"}
            styleName={"backHomeButton"}
          />
        </DetailPageHeader>
        <DetailPageContent>
          <h3
            style={{
              textShadow:
                "-2px 0px white, 0px 2px white, 2px 0px white, 0px -2px white",
            }}
          >
            {foundTodos.title}
          </h3>
          <div>{foundTodos.content}</div>
        </DetailPageContent>
      </DetailPage>
    </Layout>
  );
}

export default Work;
