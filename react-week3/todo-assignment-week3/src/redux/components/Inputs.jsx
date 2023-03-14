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

function Inputs({ size, value }) {
  const sizeStyle = SIZES[size];

  return <StInput sizeStyle={sizeStyle} value={value} />;
}

export default Inputs;
