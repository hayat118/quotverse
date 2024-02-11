import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk("fetchQuotes", async () => {
  const response = await fetch(
    "https://api.quotable.io/quotes/random?limit=12"
  );
  const quotes = await response.json();
  return quotes;
});

export const fetchTrendingQuotes = createAsyncThunk(
  "fetchTrendingQuotes",
  async (tagname) => {
    const response = await fetch(
      `https://api.quotable.io/quotes?tags=${tagname}`
    );
    const quotes = await response.json();
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
      let quote = state.quotesFeed.find(
        (quote) => quote._id === action.payload
      );

      if (!quote) {
        quote = state.trendingQuotes.find(
          (quote) => quote._id === action.payload
        );
      }

      if (quote) {
        quote.isLiked = !quote.isLiked;
      }

      // if already liked remove from likedQuotes, or else add.
      const quoteExists = state.likedQuotes.find(
        (quote) => quote._id === action.payload
      );

      if (!quoteExists) {
        state.likedQuotes.push(quote);
      } else {
        state.likedQuotes = state.likedQuotes.filter(
          (quote, index) => quote._id != action.payload
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
