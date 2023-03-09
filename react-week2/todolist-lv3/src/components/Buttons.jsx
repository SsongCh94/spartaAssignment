import React from "react";
import styled, { css } from "styled-components";

const SIZES = {
  small: css`
    width: 100px;
    height: 30px;
  `,
  medium: css`
    width: 150px;
    height: 45px;
  `,
  large: css`
    width: 200px;
    height: 60px;
  `,
};

const BORDERS = {
  orange: css`
    background-color: white;
    border: 4px solid RGB(250, 177, 160);
    color: rgb(198, 100, 78);
  `,
  green: css`
    background-color: white;
    border: 4px solid RGB(85, 239, 196);
    color: black;
  `,
};

const StButton = styled.button`
  background-color: ${(props) => props.colors};
  border: none;
  font-weight: bold;
  font-size: 15px;
  ${(props) => props.sizeStyle}
  ${(props) => props.borderStyle}
  border-radius: 10px;
`;

function Buttons({ size, border, children, colors, onClickFunc }) {
  const sizeStyle = SIZES[size];
  const borderStyle = BORDERS[border];

  return (
    <StButton
      sizeStyle={sizeStyle}
      borderStyle={borderStyle}
      colors={colors}
      onClick={onClickFunc}
    >
      {children}
    </StButton>
  );
}

export default Buttons;
