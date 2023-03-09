import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
import Modal from "./components/Modal";
import { SiAccenture, SiBitcoincash } from "react-icons/si";

function App() {
  const orangeColor = "RGB(250, 177, 160)";
  const greenColor = "RGB(85, 239, 196)";

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const modalOpenHandler = () => {
    setModalOpen(true);
  };
  const modal2OpenHandler = () => {
    setModal2Open(true);
  };
  const modal2CloseHandler = () => {
    setModal2Open(false);
  };

  const onClickHandler = () => {
    if (name && price) {
      alert("name :" + name + ", price :" + price);
    } else alert("이름과 가격 모두 입력");
  };

  //FIXME: input 가격에 숫자만 입력, 컴마 나오게

  return (
    <>
      <h1>Button</h1>
      <Area colors={greenColor}>
        <Buttons size={"large"} border={"green"}>
          Large Primary Buttons <SiAccenture />
        </Buttons>
        <Buttons size={"large"} colors={greenColor}>
          Large
        </Buttons>
        <Buttons size={"medium"} colors={greenColor}>
          Medium
        </Buttons>
        <Buttons size={"small"} colors={greenColor}>
          Small
        </Buttons>
      </Area>
      <Area colors={orangeColor}>
        <Buttons size={"large"} border={"orange"}>
          Large Negative Button <SiBitcoincash />
        </Buttons>
        <Buttons size={"large"} colors={orangeColor}>
          Large
        </Buttons>
        <Buttons size={"medium"} colors={orangeColor}>
          Medium
        </Buttons>
        <Buttons size={"small"} colors={orangeColor}>
          small
        </Buttons>
      </Area>
      <h1>Input</h1>
      <Area>
        이름 <Inputs value={name} onChangeFunc={nameChangeHandler} />
        가격 <Inputs value={price} onChangeFunc={priceChangeHandler} />
        <Buttons
          size={"medium"}
          colors={greenColor}
          onClickFunc={onClickHandler}
        >
          저장
        </Buttons>
      </Area>
      {/* FIXME: 모달 시작 */}
      <h1>Modal</h1>
      <Area>
        <Buttons
          size={"medium"}
          colors={greenColor}
          onClickFunc={modalOpenHandler}
        >
          open modal
        </Buttons>
        {modalOpen && (
          <Modal setModalOpen={setModalOpen} size={"large"}>
            닫기와 확인 버튼, 외부 눌러도 안닫힘
          </Modal>
        )}
        <Buttons
          size={"large"}
          border={"orange"}
          onClickFunc={modal2OpenHandler}
          type={true}
        >
          open modal
        </Buttons>
        {modal2Open && (
          <Modal
            setModal2Open={setModal2Open}
            size={"small"}
            modalOnClickFunc={modal2CloseHandler}
            type={false}
          >
            닫기 버튼, 외부 누르면 닫힘
          </Modal>
        )}
      </Area>
    </>
  );
}

const Area = styled.div`
  width: 90%;
  height: 100px;
  margin-top: 20px;
  border: 5px solid ${(props) => props.colors};
  border-radius: 20px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default App;
