import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import quotesReducer from "../features/home/quotesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quotes: quotesReducer,
  },
});
