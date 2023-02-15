import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: null,
    currentMovie: null,
    error: false,
    isFetching: false,
    filteredReview: null,
  },
  reducers: {
    movieStart: (state) => {
      state.isFetching = true
    },
    movieSucess: (state, action) => {
      state.isFetching = false;
      state.movies = action.payload
    },
    movieFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    currentMovieStart: (state) => {
      state.isFetching = true
    },
    currentMovieSucess: (state, action) => {
      state.isFetching = false;
      state.currentMovie = action.payload
    },
    currentMovieFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    filterStart: (state) => {
      state.isFetching = true
    },
    filterSuccess: (state, action) => {
      state.isFetching = false;
      state.filteredReview = action.payload
    },
    filterFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
  }

})

export const { movieStart, movieFailure, movieSucess, currentMovieStart, currentMovieFailure, currentMovieSucess, filterFailure, filterSuccess, filterStart } = movieSlice.actions;
export default movieSlice.reducer;