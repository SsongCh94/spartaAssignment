const Done = ({ item, removeFunction, doneFunction}) => {
    if (item.done === true) {
      return (
        <div className="todo" key={item.id}>
          <div className="todoTitle">{item.title}</div>
          <div className="whatTodo">{item.content}</div>
  
          <div className="todoButtonBox">
            <button
              className="todoDeleteButton"
              onClick={() => removeFunction(item.id)}
            >
              삭제
            </button>
            <button className="todoDoneButton" onClick={() => doneFunction(item.id)}>취소</button>
          </div>
        </div>
      );
    } else return ;
  };
  
  export default Done;
  