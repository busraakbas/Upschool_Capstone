import { createSlice } from "@reduxjs/toolkit";
import { moviesService } from "./services";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";
export const moviesSlice = createSlice({
  name: "movisSlice",
  initialState: {
    name: undefined,
    date: undefined,
    img: undefined,
    isLoading: false,
  },
  extraReducers: {
    [moviesService.pending]: (state) => {
      state.isLoading = true;
    },
    [moviesService.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.name = action.payload.title;
      state.img = BACKDROP_PATH + action.payload.poster_path;
      state.date = action.payload.release_date;
    },
    [moviesService.rejected]: (state) => {
      state.isLoading = false;
      console.log("MoviesSlice hata ");
    },
  },
});

export default moviesSlice.reducer;
