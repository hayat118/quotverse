import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk("fetchQuotes", async () => {
  const response = await fetch(
    "https://api.quotable.io/quotes/random?limit=12"
  );
  const quotes = await response.json();
  console.log("STEP 1 - in FETCHQUORES", quotes);
  return quotes;
});

export const fetchTrendingQuotes = createAsyncThunk(
  "fetchTrendingQuotes",
  async (tagname) => {
    const response = await fetch(
      `https://api.quotable.io/quotes?tags=${tagname}`
    );

    const quotes = await response.json();
    console.log("FTRERE", quotes);
    return quotes.results;
  }
);

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotesFeed: [],
    likedQuotes: [],
    trendingQuotes: [],
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
        state.quotesFeed = action.payload;
      });

    builder
      .addCase(fetchTrendingQuotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrendingQuotes.fulfilled, (state, action) => {
        state.status = "idle";
        state.trendingQuotes = action.payload;
      });
  },
});

export const selectQuotesFeed = (state) => state.quotes.quotesFeed;
export const selectLikedQuotes = (state) => state.quotes.likedQuotes;
export const selectTrendingQuotes = (state) => state.quotes.trendingQuotes;
export const selectLoadStatus = (state) => state.quotes.status;

export const { quotesAdded, likeQuote } = quotesSlice.actions;

export default quotesSlice.reducer;
