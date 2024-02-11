import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk("fetchQuotes", async () => {
  const response = await fetch("https://api.quotable.io/quotes/random?limit=3");
  const quotes = await response.json();
  console.log("STEP 1 - in FETCHQUORES", quotes);
  return quotes;
});

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotesFeed: [],
    likedQuotes: [],
    status: "idle",
  },
  reducers: {
    quotesAdded(state, action) {
      state.push({});
    },
    likeQuote: (state, action) => {
      console.log("in LikeQuote", action, state);
      const quote = state.quotesFeed.find(
        (quote) => quote._id === action.payload
      );

      quote.isLiked = !quote.isLiked;

      // if already liked remove from likedQuotes, or else add.
      const quoteExists = state.likedQuotes.find(
        (quote) => quote._id === action.payload
      );
      if (!quoteExists) {
        state.likedQuotes.push(quote);
      } else {
        state.likedQuotes.filter(
          (quote, index) => action.payload !== quote._id
        );
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("STEP 2 - inside reducer", action);
        state.quotesFeed = action.payload;
      });
  },
});

export const selectQuotesFeed = (state) => state.quotes.quotesFeed;
export const selectLikedQuotes = (state) => state.quotes.likedQuotes;

export const { quotesAdded, likeQuote } = quotesSlice.actions;

export default quotesSlice.reducer;
