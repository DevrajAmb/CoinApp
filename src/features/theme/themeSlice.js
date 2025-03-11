import { createSlice } from "@reduxjs/toolkit";

const themeExist = JSON.parse(localStorage.getItem("theme"));

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: themeExist || false,
  },
  reducers: {
    switchTheme: (state, action) => {
      return {
        ...state,
        theme: state.theme ? false : true,
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
