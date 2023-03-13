import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddTodos from "../pages/AddTodos";
import Home from "../pages/Home";
import Todos from "../pages/Todos";

function Router() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/todos"}>Todos</Link>
        <Link to={"/addTodos"}>AddTodos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/addTodos" element={<AddTodos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
