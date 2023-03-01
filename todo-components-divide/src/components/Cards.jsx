import React, { useState } from 'react'
import ReviseFunction from './ReviseFunction';
import Buttons from './Buttons';

function Cards({item, todos, setTodos, types}) {

    const [visible, setVisible] = useState(false);

  return (
    <div className="todo" key={item.id}>
              <div className="todoTitle">{item.title}</div>
              <div className="whatTodo">{item.content}</div>

              <div className="todoButtonBox">
                <Buttons todos={todos} setTodos={setTodos} item={item} functions={'deleteFunction'}/>
                <Buttons todos={todos} setTodos={setTodos} item={item} functions={'doneFunction'} types={types}/>
                <Buttons todos={todos} setTodos={setTodos} item={item} functions={'reviseFunction'} visible={visible} setVisible={setVisible} />                
              </div>
              {visible && (
                <ReviseFunction todos={todos} setTodos={setTodos} item={item} />
              )}
            </div>
  )
}

export default Cards