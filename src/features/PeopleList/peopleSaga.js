import { call, put, debounce } from "@redux-saga/core/effects";
import { getApi } from "../../getApi";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { API_Key, baseSiteUrl, language } from "../../ApiParameters";
function* fetchPeopleHandler({ payload: { page, query } }) {
  const url = query
    ? `${baseSiteUrl}search/person?api_key=${API_Key}&query=${query}&page=${page}`
    : `${baseSiteUrl}person/popular?api_key=${API_Key}&language=${language}&page=${page}`;
  try {
    const people = yield call(getApi, url);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* peopleSaga() {
  yield debounce(500, fetchPeople.type, fetchPeopleHandler);
}
