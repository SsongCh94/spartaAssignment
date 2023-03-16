import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __deleteMovies } from "../modules/moviesSlice";
import Buttons from "./Buttons";

function Cards({ id, title, URL, writer, star }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const giveId = {id}
  const deleteBtnHandler = (id) => {
    dispatch(__deleteMovies(id));
  };

  return (
    <CardBox>
      <h2>{title}</h2>
      <h3>{URL}</h3>
      <h3>{writer}</h3>
      <h3>{star}</h3>
      <Buttons Func={() => navigate(`/detail/${id}`)}>상세보기</Buttons>
      <Buttons size={"delete"} Func={() => deleteBtnHandler(id)}>
        삭제
      </Buttons>
    </CardBox>
  );
}

const CardBox = styled.div`
  background-color: aqua;
  width: 300px;
  height: 400px;

  padding: 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  word-break: break-all;
`;

export default Cards;
