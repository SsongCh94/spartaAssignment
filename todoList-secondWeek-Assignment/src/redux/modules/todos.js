const ADD_NEW_TODO = "todos/ADD_NEW_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const DONE_TODO = "todos/DONE_TODO";
const REVISE_TODO = "todos/REVISE_TODO";

const initialState = [
  {
    id: 0,
  },
  {
    id: 1,
    title: "리액트 공부하기",
    content: "리액트 기초를 공부해봅시다.",
    done: false,
  },
];

export const addTodo = (payload) => {
  return {
    type: ADD_NEW_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload,
  };
};
export const reviseTodo = (payload) => {
  return {
    type: REVISE_TODO,
    payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      const deleteTodo = state.filter((value) => {
        return value.id !== action.payload;
      });
      return [...deleteTodo];
    case DONE_TODO:
      const doneTodoThings = state.map((value) => {
        if (value.id === action.payload) {
          value.done ? value.done = false : value.done = true;
        }
        return value;
      });
      return [...doneTodoThings];
    case REVISE_TODO:
      const revisedThingsIndex = state.findIndex(item => item.id === action.payload.id)
      state.splice(revisedThingsIndex, 1, action.payload)
      return [...state];
    default:
      return state;
  }
};

export default todos;
