import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { detailsReducer } from "./detailsSlice";

const rootReducer = combineReducers({
  details: detailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
