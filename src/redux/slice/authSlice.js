import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: localStorage.getItem("accessToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    updateAccessToken: () => {
      state.accessToken = { ...state.user, ...action.payload };
      const accessTokenStringify = JSON.stringify(action.payload);
      localStorage.setItem("accessToken", accessTokenStringify);
    },
    logout: (state, action) => {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { updateAccessToken, setAccessToken, logout } = authSlice.actions;

export default authSlice.reducer;
