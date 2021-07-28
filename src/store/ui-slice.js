import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // not mutating prev state | immer dependency of redux toolkit handles immutability
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
