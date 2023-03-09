import Cards from "./Cards"

const Todos = ({ todos, setTodos, types }) => {

  //
  return (
  <>
    <div id="working">{ types === 'isWorking' ? 'Working..🔥' : 'Done..🎉'}</div>
    <div id="workingArea">
      {todos.map((item) => {
        if (types === 'isWorking') {
        if (item.done === false) {
          return (          
            <Cards item={item} todos={todos} setTodos={setTodos} types={types}/>            
          );
        }} 
        else {
          if (item.done === true) {
            return (
              <Cards item={item} todos={todos} setTodos={setTodos} types={types}/>
            );
          }
        }
      })}
    </div>
  </>);
};

export default Todos;
