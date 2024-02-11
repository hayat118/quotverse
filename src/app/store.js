import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./reducers/quotesSlice";
import tagsReducer from "./reducers/tagsSlice";

export const store = configureStore({
  reducer: {
    quotes: quotesReducer,
    tags: tagsReducer,
  },
});
