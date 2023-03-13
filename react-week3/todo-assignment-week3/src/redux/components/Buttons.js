import React from "react";
import styled, { css } from "styled-components";

const SIZES = {
  home: css`
    width: 90%;
    height: 250px;
    font-size: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 40px;
  `,
};

const BORDERS = {};

const COLORS = {};

const StButton = styled.button`
  ${(props) => props.sizeStyle}
`;

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

export default Buttons;
