import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { HeartIcon } from "@heroicons/react/24/outline";

import {
  quotesAdded,
  fetchQuotes,
  selectQuotesFeed,
  selectLikedQuotes,
  likeQuote,
} from "./quotesSlice";

import Quote from "./Quote";

const LikedQuotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(selectLikedQuotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  const handleLikeQuote = (id) => {
    dispatch(likeQuote(id));
  };

  return (
    <div>
      {quotes.length ? (
        <div className="space-y-6">
          {quotes.map((quote, i) => {
            return <Quote key={i} quote={quote} />;
          })}
        </div>
      ) : (
        <div>
          <h3>No quotes liked yet</h3>
        </div>
      )}
    </div>
  );
};

export default LikedQuotes;
