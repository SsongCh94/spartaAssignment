import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMovie from "../pages/AddMovie";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import NavBar from "../redux/components/NavBar";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addMovie" element={<AddMovie />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
