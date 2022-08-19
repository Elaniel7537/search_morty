import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPeoplesFav: [],
};

export const peopleSlice = createSlice({
  name: "listCard",
  initialState,
  reducers: {
    setPeoplesFav: (state) => {
      state;
    },
  },
});

export const { setPeoplesFav } = peopleSlice.actions;

export default peopleSlice.reducer;
