import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: {
    id: 0,
    author: "",
    title: "",
    content: "",
    isDone: false,
  },
  isLoading: false,
  ieError: false,
  error: null,
};

const __getTodos = createAsyncThunk("todos/getTodos");

const todos = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {},
});
