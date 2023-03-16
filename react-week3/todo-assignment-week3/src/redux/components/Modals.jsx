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
    width: 80%;
    height: 70%;
  `,
};

function Modals({ setModalOpen, size, children, modalOnClickFunc, Func }) {
  const sizeStyle = SIZE[size];
  const modalCloseHandler = () => {
    setModalOpen(false);
  };
  return (
    <>
      <ModalContainer onClick={modalOnClickFunc} />
      <ModalWindow sizeStyle={sizeStyle}>
        {children}

        <ButtonArea>
          <Buttons Func={modalCloseHandler}>닫기</Buttons>
          <Buttons size={"small"} Func={Func}>
            수정완료
          </Buttons>
        </ButtonArea>
      </ModalWindow>
    </>
  );
}

export default Modals;
