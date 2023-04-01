import { configureStore } from "@reduxjs/toolkit";
import airLineReducer from "../features/airlines/airLineSlice";

export const store = configureStore({
  reducer: {
    airline: airLineReducer,
  },
  devTools: false,
});
