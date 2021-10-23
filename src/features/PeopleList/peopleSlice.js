import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleState",
  initialState: {
    people: [],
    status: "loading",
    totalPeoplePages: 500,
  },
  reducers: {
    fetchPeople: (state) => {
      state.status = "loading";
    },
    fetchPeopleSuccess: (state, { payload: Apipeople }) => {
      state.status = "success";
      state.people = Apipeople.results;
      state.totalPeoplePages = Apipeople.total_pages;
    },
    fetchPeopleError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchPeople, fetchPeopleError, fetchPeopleSuccess } =
  peopleSlice.actions;
export const selectPeopleState = (state) => state.peopleReducer;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectTotalPeoplePages = (state) =>
  selectPeopleState(state).totalPeoplePages;

export default peopleSlice.reducer;
