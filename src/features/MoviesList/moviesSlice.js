import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesState",
  initialState: {
    movies: [],
    status: "loading",
    totalMoviesPages: 500,
  },
  reducers: {
    fetchMovies: (state) => {
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload: Apimovies }) => {
      state.status = "success";
      state.movies = Apimovies.results;
      state.totalMoviesPages = Apimovies.total_pages;
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchMovies, fetchMoviesError, fetchMoviesSuccess } =
  moviesSlice.actions;
export const selectMoviesState = (state) => state.moviesReducer;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectStatus = (state) => selectMoviesState(state).status;
export const selectTotalMoviesPages = (state) =>
  selectMoviesState(state).totalMoviesPages;

export default moviesSlice.reducer;
