import { useSelector } from "react-redux";
import Cards from "./Cards";
import { TodoArea } from "./TodosStyle";

const Todos = ({ types }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <h2>{types ? "Done..🎉" : "Working..🔥"}</h2>
      <TodoArea>
        {todos.map((item) => {
          return types === item.done && <Cards key={item.id} item={item} />;
        })}
      </TodoArea>
    </>
  );
};

export default Todos;
