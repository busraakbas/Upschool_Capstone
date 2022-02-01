import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/76341?api_key=d7976c42d390b3c51e76728ce4b92d74";
const SEARCH_API_URL = MOVIE_API_URL + "search/movie";
const DISCOVER_API_URL = MOVIE_API_URL + "discover/movie";
const API_KEY = "d7976c42d390b3c51e76728ce4b92d74";
const BACKDROP_PATH_URL = "https://image.tmdb.org/t/p/w1280";

export const moviesService = createAsyncThunk(
  "moviesSlice/moviesReducer",
  async () => {
    const res = await axios.get(MOVIE_API_URL);
    return res.data;
  }
);
