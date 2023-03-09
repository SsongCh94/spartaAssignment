import React from "react";
import styled, { css } from "styled-components";
import Buttons from "./Buttons";

const ModalContainer = styled.div`
  background-color: #6f6f6fd1;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalWindow = styled.div`
  background-color: rgb(246, 245, 245);
  ${(props) => props.sizeStyle}

  padding: 10px;

  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid black;
  border-radius: 10px;
`;

const ButtonArea = styled.div`
  width: 250px;
  height: 30px;

  position: absolute;
  right: 20px;
  bottom: 20px;

  display: flex;
  justify-content: flex-end;
`;

const SIZE = {
  large: css`
    width: 400px;
    height: 300px;
  `,
  small: css`
    width: 300px;
    height: 200px;
  `,
};

function Modal({ setModalOpen, size, children, modalOnClickFunc, type }) {
  const sizeStyle = SIZE[size];
  const modalCloseHandler = () => {
    setModalOpen(false);
  };
  if (type) {
    return (
      <>
        <ModalContainer onClick={modalOnClickFunc} />
        <ModalWindow sizeStyle={sizeStyle}>
          {children}

          <ButtonArea>
            <Buttons
              colors={"RGB(250, 177, 160)"}
              size={"small"}
              onClickFunc={modalCloseHandler}
            >
              닫기
            </Buttons>
            <Buttons colors={"RGB(85, 239, 196)"} size={"small"}>
              확인
            </Buttons>
          </ButtonArea>
        </ModalWindow>
      </>
    );
  } else {
    return (
      <>
        <ModalContainer onClick={modalOnClickFunc} />
        <ModalWindow sizeStyle={sizeStyle}>
          {children}
          <Buttons border={"black"} onClickFunc={modalOnClickFunc}>
            X
          </Buttons>
        </ModalWindow>
      </>
    );
  }
}

export default Modal;
