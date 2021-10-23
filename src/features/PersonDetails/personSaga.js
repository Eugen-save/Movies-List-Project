import { put, call, takeLatest } from "@redux-saga/core/effects";
import { API_Key, baseSiteUrl, language } from "../../ApiParameters";
import { getApi } from "../../getApi";

import {
  fetchPerson,
  fetchPersonCreditsSuccess,
  fetchPersonError,
  fetchPersonSuccess,
} from "./personSlice";

function* fetchPersonHandler({ payload: { id } }) {
  const personURL = `${baseSiteUrl}person/${id}?api_key=${API_Key}&language=${language}`;
  const creditsURL = `${baseSiteUrl}person/${id}/movie_credits?api_key=${API_Key}&language=${language}`;
  try {
    const person = yield call(getApi, personURL);
    yield put(fetchPersonSuccess(person));
    const personCredits = yield call(getApi, creditsURL);
    yield put(fetchPersonCreditsSuccess(personCredits));
  } catch (error) {
    yield put(fetchPersonError());
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* personSaga() {
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
}
