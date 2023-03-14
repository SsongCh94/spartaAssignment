import React from "react";
import styled, { css } from "styled-components";

const SIZES = {
  small: css``,
  medium: css`
    width: 90%;
    height: 40px;
  `,
  large: css`
    width: 90%;
    height: 200px;
  `,
};

const StInput = styled.input`
  ${(props) => props.sizeStyle}
`;

function Inputs({ size, value, placeholder }) {
  const sizeStyle = SIZES[size];

  return (
    <StInput sizeStyle={sizeStyle} value={value} placeholder={placeholder} />
  );
}

export default Inputs;
