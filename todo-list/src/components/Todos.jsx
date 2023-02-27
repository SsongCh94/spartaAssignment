const Todos = ({ item, removeFunction, doneFunction}) => {
  if (item.done === false) {
    return (
      <div className="todo" key={item.id}>
        <div className="todoTitle">{item.title}</div>
        <div className="whatTodo">{item.content}</div>

        <div className="todoButtonBox">
          <button
            className="todoDeleteButton"
            onClick={() => removeFunction(item.id)}
          >
            삭제하기
          </button>
          <button className="todoDoneButton" onClick={() => doneFunction(item.id)}>완료</button>
        </div>
      </div>
    );
  } else return ;
};

export default Todos;
