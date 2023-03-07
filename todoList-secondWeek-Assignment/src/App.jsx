import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {

  //FIXME: 여기선 필요없지! redux 쓸거니까 이제
  // const todos = useSelector((state) => {
  //   return state;
  // });
  // const dispatch = useDispatch();

  return (
    <div id="todoList">
      <Navbar />
      <Header/>
      <Todos types={"isWorking"}/>
      <Todos types={"isDone"} />
    </div>
  );
}

export default App;
