import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../axios/api";

const TodoList = styled.div`
  background-color: beige;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

function Todos() {
  const [movies, setMovies] = useState(null);

  const fetchMovies = async () => {
    // const movie = await api.get("/posts");
    const { data } = await axios.get("http://localhost:3001/posts");
    console.log("data ===>", data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <TodoList>
      {movies?.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.id}</h2>
            <h2>{item.URL}</h2>
            <h2>{item.title}</h2>
            <h2>{item.star}</h2>
            <h2>{item.comment}</h2>
          </div>
        );
      })}
    </TodoList>
  );
}

export default Todos;
