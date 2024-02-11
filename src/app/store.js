import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import quotesReducer from "../features/home/quotesSlice";
import tagsReducer from "../features/home/tagsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quotes: quotesReducer,
    tags: tagsReducer,
  },
});
