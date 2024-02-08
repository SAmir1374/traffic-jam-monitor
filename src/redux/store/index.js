import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import imgWallReducer from "../slice/imgWall";

const store = configureStore({
  reducer: {
    auth: authReducer,
    imgWall: imgWallReducer,
  },
});

export default store;
