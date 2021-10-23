import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "personState",
  initialState: { person: [], credits: [], status: "loading" },
  reducers: {
    fetchPerson: (state) => {
      state.status = "loading";
    },
    fetchPersonSuccess: (state, { payload: ApiPerson }) => {
      state.status = "success";
      state.person = ApiPerson;
    },
    fetchPersonCreditsSuccess: (state, { payload: ApiPersonCredits }) => {
      state.status = "success";
      state.credits = ApiPersonCredits;
    },
    fetchPersonError: (state) => {
      state.status = "error";
    },
  },
});
export const {
  fetchPerson,
  fetchPersonCreditsSuccess,
  fetchPersonError,
  fetchPersonSuccess,
} = personSlice.actions;

export const selectPersonState = (state) => state.personReducer;
export const selectPerson = (state) => selectPersonState(state).person;
export const selectPersonCredtis = (state) => selectPersonState(state).credits;
export const selectStatus = (state) => selectPersonState(state).status;

export default personSlice.reducer;
