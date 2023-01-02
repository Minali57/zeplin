import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: false,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginAuth: (state) => {
      state.isAuth = true;
    },
    logoutAuth: (state) => {
      state.isAuth = false;
    },
  },
});
export const { loginAuth, logoutAuth } = loginSlice.actions;
export default loginSlice.reducer;
