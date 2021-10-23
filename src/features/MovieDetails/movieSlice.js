import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieState",
  initialState: { movie: [], credits: [], status: "loading" },
  reducers: {
    fetchMovie: (state) => {
      state.status = "loading";
    },
    fetchMovieSuccess: (state, { payload: ApiMovie }) => {
      state.status = "success";
      state.movie = ApiMovie;
    },
    fetchMovieCreditsSuccess: (state, { payload: ApiMovieCredits }) => {
      state.status = "success";
      state.credits = ApiMovieCredits;
    },
    fetchMovieError: (state) => {
      state.status = "error";
    },
  },
});
export const {
  fetchMovie,
  fetchMovieCreditsSuccess,
  fetchMovieError,
  fetchMovieSuccess,
  fetchMovieImagesSuccess,
} = movieSlice.actions;

export const selectMovieState = (state) => state.movieReducer;
export const selectMovie = (state) => selectMovieState(state).movie;
export const selectMovieCredits = (state) => selectMovieState(state).credits;
export const selectStatus = (state) => selectMovieState(state).status;

export default movieSlice.reducer;
