import { movieStart, movieSucess, movieFailure, currentMovieStart, currentMovieFailure, currentMovieSucess, filterFailure, filterStart, filterSuccess } from "./movieSlice"
import axios from "axios"
export const fetchMovies = async (dispatch, text) => {
  dispatch(movieStart());
  try {
    const res = await axios.get(`https://imdb-api.tprojects.workers.dev/search?query=${text}`)
    dispatch(movieSucess(res.data.results))
  } catch (err) {
    console.log("err in fetch", err);
    dispatch(movieFailure())
  }
}

export const fetchSingleMovie = async (dispatch, movieId) => {
  dispatch(currentMovieStart());
  try {
    const res = await axios.get(`https://imdb-api.tprojects.workers.dev/title/${movieId}`)
    dispatch(currentMovieSucess(res.data))
  } catch (err) {
    console.log("err in fetch", err);
    dispatch(currentMovieFailure())
  }
}

export const filterReviews = async (dispatch, basedOn, sortFilter, movieId) => {
  dispatch(filterStart());
  try {
    const res = await axios.get(`https://imdb-api.tprojects.workers.dev/reviews/${movieId}?option=${basedOn}&sortOrder=${sortFilter}`)
    console.log("res.data", res.data);
    dispatch(filterSuccess(res.data.reviews))
  } catch (err) {
    console.log("err in fetch", err);
    dispatch(filterFailure())
  }
}