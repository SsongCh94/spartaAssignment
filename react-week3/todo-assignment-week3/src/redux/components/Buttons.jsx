import React from "react";
import styled, { css } from "styled-components";

function Buttons({ size, color, border, children, Func, emoticon }) {
  const sizeStyle = SIZES[size];
  const borderStyle = BORDERS[border];
  const colorStyle = COLORS[color];

  return (
    <StButton
      sizeStyle={sizeStyle}
      borderStyle={borderStyle}
      colorStyle={colorStyle}
      onClick={Func}
    >
      {children}
      {emoticon}
    </StButton>
  );
}

const SIZES = {
  home: css`
    width: 90%;
    height: 150px;
    font-size: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 40px;

    border: 2px solid black;
    border-radius: 20px;
  `,
  nav: css`
    background-color: black;
    color: white;
    font-size: 50px;
  `,
  delete: css`
    align-self: flex-end;
  `,
};

const BORDERS = {
  none: css`
    border: none;
  `,
};

const COLORS = {};

const StButton = styled.button`
  ${(props) => props.sizeStyle}
  ${(props) => props.borderStyle}
`;

export default Buttons;
