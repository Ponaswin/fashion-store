// popupSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false, // Initially, the popup is closed
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isOpen = true;
    },
    closePopup: (state) => {
      state.isOpen = false;
    },
    togglePopup: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openPopup, closePopup, togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
