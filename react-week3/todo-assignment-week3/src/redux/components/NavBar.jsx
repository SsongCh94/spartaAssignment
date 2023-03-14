import React from "react";
import { Si1Password } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Buttons from "./Buttons";

const NavigationBar = styled.nav`
  background-color: black;
  color: white;
  width: 100%;
  height: 100px;

  box-sizing: border-box;
  padding: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function NavBar() {
  const navigate = useNavigate();

  return (
    <NavigationBar>
      <Buttons size={"nav"} border={"none"} Func={() => navigate("/")}>
        <Si1Password />
      </Buttons>
      <h2>DdodoList</h2>
    </NavigationBar>
  );
}

export default NavBar;
