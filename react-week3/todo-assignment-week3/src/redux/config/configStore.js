import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/commentsSlice";
import moviesSlice from "../modules/moviesSlice";

const store = configureStore({
  reducer: {
    comments: commentsSlice,
    movies: moviesSlice,
  },
});

export default store;
