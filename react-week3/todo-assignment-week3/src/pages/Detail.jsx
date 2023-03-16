import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Inputs from "../redux/components/Inputs";
import { useInput } from "../Hooks/useInput";
import Buttons from "../redux/components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { __addComments, __getComments } from "../redux/modules/commentsSlice";
import { __getMovies } from "../redux/modules/moviesSlice";

function Detail() {
  const params = useParams();
  const [comment, handleComment] = useInput("");
  const dispatch = useDispatch();

  const { comments } = useSelector((state) => state.comments);
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(__getComments());
    dispatch(__getMovies());
  }, [dispatch]);

  const newComment = { comment, postsId: parseInt(params.id) };

  const onAddBtnClickHandler = () => {
    dispatch(__addComments(newComment));
  };

  const foundMovie = movies.find((item) => {
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
