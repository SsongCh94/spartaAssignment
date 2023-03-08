import { useSelector } from "react-redux";
import Cards from "./Cards";

const Todos = ({ types }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div id="working">{types ? "Done..🎉" : "Working..🔥"}</div>
      <div id="workingArea">
        {todos.map((item) => {
          return types === item.done && <Cards key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Todos;
