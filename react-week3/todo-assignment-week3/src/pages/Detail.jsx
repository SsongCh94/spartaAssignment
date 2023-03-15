import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axios/api";
import Inputs from "../redux/components/Inputs";
import { useInput } from "../Hooks/useInput";
import Buttons from "../redux/components/Buttons";

function Detail() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [comment, handleComment] = useInput("");

  const fetchMovies = async () => {
    const { data } = await api.get("/posts");
    setMovie(data);
  };

  //FIXME: 댓글 추가 테스트중
  const onAddBtnClickHandler = async () => {
    const { data } = await api.get(`/posts/${params.id}`);
    console.log("data ===>", data.comments);
  };

  useEffect(() => {
    fetchMovies();
    onAddBtnClickHandler();
  }, []);

  const foundMovie = movie?.find((item) => {
    return item.id === parseInt(params.id);
  });

  console.log("movie ====>>>", movie);

  return (
    <div>
      <h1> 작성자 : {foundMovie?.writer} </h1>
      <h1> url : {foundMovie?.URL} </h1>
      <h1> 제목 : {foundMovie?.title} </h1>
      <h1> 별점 : {foundMovie?.star} </h1>
      <h1> 코멘트 : {foundMovie?.content} </h1>
      <Inputs value={comment} onChange={handleComment} size={"large"} />
      <Buttons>댓글 등록</Buttons>
      <h1>
        {" "}
        댓글 :{" "}
        {foundMovie?.comments.map((item) => {
          return (
            <div key={item.id}>
              <h3> {item.content} </h3>
            </div>
          );
        })}{" "}
      </h1>
    </div>
  );
}

export default Detail;
