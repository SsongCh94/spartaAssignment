import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/commentsSlice";

const store = configureStore({
  reducer: {
    comments: commentsSlice,
  },
});

export default store;
