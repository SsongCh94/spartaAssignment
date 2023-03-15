import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axios/api";
import Inputs from "../redux/components/Inputs";
import { useInput } from "../Hooks/useInput";
import Buttons from "../redux/components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { __addComments, __getComments } from "../redux/modules/commentsSlice";

function Detail() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [comment, handleComment] = useInput("");
  const dispatch = useDispatch();

  const { isLoading, error, comments } = useSelector((state) => {
    return state.comments;
  });

  const fetchMovies = async () => {
    const { data } = await api.get("/posts");
    setMovie(data);
  };

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  const newComment = { comment, postsId: parseInt(params.id) };

  // FIXME: 댓글 추가 테스트중
  const onAddBtnClickHandler = () => {
    dispatch(__addComments(newComment));
    // const { data } = await api.get("/comments");
    // console.log("data ===>", data);
  };
  // FIXME: 댓글추가 블럭

  useEffect(() => {
    fetchMovies();
  }, []);

  const foundMovie = movie?.find((item) => {
    return item.id === parseInt(params.id);
  });

  const foundComments = comments.filter((item) => {
    return item.postsId === parseInt(params.id);
  });

  return (
    <div>
      <h1> 작성자 : {foundMovie?.writer} </h1>
      <h1> url : {foundMovie?.URL} </h1>
      <h1> 제목 : {foundMovie?.title} </h1>
      <h1> 별점 : {foundMovie?.star} </h1>
      <h1> 코멘트 : {foundMovie?.content} </h1>
      <Inputs value={comment} onChange={handleComment} size={"large"} />
      <Buttons Func={onAddBtnClickHandler}>댓글 등록</Buttons>
      <h1>
        {" "}
        댓글 :{" "}
        {foundComments.map((item) => {
          return (
            <div key={item.id}>
              <h3> {item.comment} </h3>
            </div>
          );
        })}{" "}
      </h1>
    </div>
  );
}

export default Detail;
