import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state) {
      state.isLoggedIn = true;
    },
  },
});

const { actions, reducer } = authSlice;
export const { loginUser } = actions;
export default reducer;
