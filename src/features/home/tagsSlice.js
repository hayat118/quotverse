import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTags = createAsyncThunk("fetchtags", async () => {
  const response = await fetch("https://api.quotable.io/tags");
  const tags = await response.json();
  return tags.slice(0, 5);
});

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    tags: [],
    status: "idle",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "idle";
        state.tags = action.payload;
      });
  },
});

export const selectTags = (state) => state.tags.tags;
export default tagsSlice.reducer;
