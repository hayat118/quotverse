import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { HeartIcon } from "@heroicons/react/24/outline";

import {
  quotesAdded,
  fetchQuotes,
  selectQuotesFeed,
  likeQuote,
} from "./quotesSlice";

import Quote from "./Quote";

const Home = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(selectQuotesFeed);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  const handleLikeQuote = (id) => {
    dispatch(likeQuote(id));
  };

  return (
    <div>
      <div className="space-y-6">
        {quotes.map((quote, i) => (
          <Quote key={i} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default Home;
