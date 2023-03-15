import React from "react";
import styled, { css } from "styled-components";

function Inputs({ size, value, placeholder, onChange, max, type }) {
  const sizeStyle = SIZES[size];

  return (
    <StInput
      max={max}
      sizeStyle={sizeStyle}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
}

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

export default Inputs;
