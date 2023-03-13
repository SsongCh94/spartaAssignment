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
};

const __getTodos = createAsyncThunk({});

const todos = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {},
});
