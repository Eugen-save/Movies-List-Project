import { put, call, takeLatest } from "@redux-saga/core/effects";
import { API_Key, baseSiteUrl, language } from "../../ApiParameters";
import { getApi } from "../../getApi";
import {
  fetchMovie,
  fetchMovieCreditsSuccess,
  fetchMovieError,
  fetchMovieSuccess,
} from "./movieSlice";

function* fetchMovieHandler({ payload: { id } }) {
  const movieURL = `${baseSiteUrl}movie/${id}?api_key=${API_Key}&language=${language}`;
  const creditsURL = `${baseSiteUrl}movie/${id}/credits?api_key=${API_Key}&language=${language}`;
  try {
    const movie = yield call(getApi, movieURL);
    yield put(fetchMovieSuccess(movie));
    const movieCredits = yield call(getApi, creditsURL);
    yield put(fetchMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(fetchMovieError());
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* movieSaga() {
  yield takeLatest(fetchMovie.type, fetchMovieHandler);
}
