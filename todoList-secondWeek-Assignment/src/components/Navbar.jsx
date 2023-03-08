import React from "react";
import styled from "styled-components";

const NavigationBar = styled.nav`
  background-color: rgba(194, 194, 194, 0.514);

  width: 100%;
  max-width: 1200px;
  height: 50px;

  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavSpan = styled.div`
  margin: 0 20px 0 20px;
`;

function Navbar() {
  return (
    <NavigationBar>
      <NavSpan>My Todo List</NavSpan>
      <NavSpan>React</NavSpan>
    </NavigationBar>
  );
}

export default Navbar;
