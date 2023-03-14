import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {
    id: 0,
    url: "",
    title: "",
    score: "",
    content: "",
  },
  isLoading: false,
  ieError: false,
  error: null,
};

const todos = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {},
});
