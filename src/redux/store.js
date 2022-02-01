import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";

export default configureStore({
  reducer: {
    moviesReducer: moviesSlice,
  },
});
