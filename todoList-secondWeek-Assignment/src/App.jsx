import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="todoList">
      <Navbar />
      <Header />
      <Todos types={false} />
      <Todos types={true} />
    </div>
  );
}

export default App;
