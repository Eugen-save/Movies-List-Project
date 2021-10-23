import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./features/MoviesList/moviesSlice";
import peopleReducer from "./features/PeopleList/peopleSlice";
import personReducer from "./features/PersonDetails/personSlice";
import movieReducer from "./features/MovieDetails/movieSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  moviesReducer: moviesReducer,
  peopleReducer: peopleReducer,
  personReducer: personReducer,
  movieReducer: movieReducer,
});

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
