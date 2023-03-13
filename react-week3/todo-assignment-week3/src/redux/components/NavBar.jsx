import React from "react";
import { Si1Password } from "react-icons/si";
import styled from "styled-components";

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
  return (
    <NavigationBar>
      <h1>
        <Si1Password />
      </h1>
      <h2>DdodoList</h2>
    </NavigationBar>
  );
}

export default NavBar;
