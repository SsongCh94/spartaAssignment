import React, { useEffect } from "react";
import { SiAzuredataexplorer } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Buttons from "../redux/components/Buttons";
import Cards from "../redux/components/Cards";
import { HomeArea, MovieList } from "./Home.style";
import { useDispatch, useSelector } from "react-redux";
import { __getMovies } from "../redux/modules/moviesSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);

  return (
    <HomeArea>
      <h1>DdopartaPedia</h1>
      <Buttons
        size={"home"}
        emoticon={<SiAzuredataexplorer />}
        Func={() => navigate("/addMovie")}
      >
        영화 기록하기
      </Buttons>
      <MovieList>
        {movies.map((item) => {
          return (
            <Cards
              key={item.id}
              title={item.title}
              URL={item.URL}
              writer={item.writer}
              star={item.star}
              id={item.id}
            />
          );
        })}
      </MovieList>
    </HomeArea>
  );
}

export default Home;
