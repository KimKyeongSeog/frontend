import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer // slice-reducer는 매칭되는 관계로 해석 > index.js에 붙임
  }
});

export default store;
