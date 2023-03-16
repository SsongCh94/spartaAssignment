import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";

const initialState = {
  comments: [
    {
      id: null,
      comment: "",
      postsId: null,
    },
  ],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await api.get("/comments");
      // console.log("data.data ==>", data.data);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("error", error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComments = createAsyncThunk(
  "comments/addComments",
  async (payload, thunkAPI) => {
    try {
      await api.post("/comments", payload);
      console.log("payload ==>", payload);
      const data = await api.get("/comments");

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("error", error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      // console.log("action ===>", action.payload);
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__addComments.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.comments = action.payload;
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
