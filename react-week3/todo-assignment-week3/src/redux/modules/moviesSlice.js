import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";

const initialState = {
  movies: [
    {
      id: null,
      writer: null,
      URL: null,
      title: null,
      star: null,
      content: null,
    },
  ],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getMovies = createAsyncThunk(
  "movies/getMovies",
  async (payload, thunkAPI) => {
    try {
      const data = await api.get("/posts");
      // console.log("data.data ==>", data.data);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("error", error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addMovies = createAsyncThunk(
  "movies/addMovies",
  async (payload, thunkAPI) => {
    try {
      await api.post("/posts", payload);
      console.log("payload ==>", payload);
      const data = await api.get("/posts");

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("error", error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMovies.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      // console.log("action ===>", action.payload);
      state.movies = action.payload;
    },
    [__getMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__addMovies.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__addMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.movies = action.payload;
    },
    [__addMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export default moviesSlice.reducer;
