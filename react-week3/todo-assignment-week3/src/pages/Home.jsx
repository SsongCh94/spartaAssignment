import React, { useEffect, useState } from "react";
import { SiAzuredataexplorer } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Buttons from "../redux/components/Buttons";
import Cards from "../redux/components/Cards";
import { HomeArea, MovieList } from "./Home.style";
import api from "../axios/api";

function Home() {
  const navigate = useNavigate();

  // const fetchMovies =
  const [movies, setMovies] = useState(null);

  const fetchMovies = async () => {
    const { data } = await api.get("/posts");
    console.log("data ===>", data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

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
        {movies?.map((item) => {
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
