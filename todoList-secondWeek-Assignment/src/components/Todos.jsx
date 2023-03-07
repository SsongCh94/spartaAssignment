import { useSelector } from "react-redux";
import Cards from "./Cards";

const Todos = ({ types }) => {
  //


  // TODO: setTodos 안줘도 되고, 안주는 대신에 dispatch로 하면 되지!
  // FIXME:
  const todos = useSelector((state) => state.todos);


  return (
    <>
      <div id="working">
        {types === "isWorking" ? "Working..🔥" : "Done..🎉"}
      </div>
      <div id="workingArea">
        {todos.map((item) => {
          if (types === "isWorking") {
            if (item.done === false) {
              return <Cards key={item.id} item={item} />;
            }
          } else {
            if (item.done === true) {
              return <Cards key={item.id} item={item} />;
            }
          }
        })}
      </div>
    </>
  );
};

export default Todos;
