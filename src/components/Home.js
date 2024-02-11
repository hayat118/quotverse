import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchQuotes,
  selectLoadStatus,
  selectQuotesFeed,
} from "../app/reducers/quotesSlice";

import Quote from "./Quote";

const Home = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(selectQuotesFeed);
  const loadStatus = useSelector(selectLoadStatus);

  useEffect(() => {
    if (!quotes.length) {
      dispatch(fetchQuotes());
    }
  }, []);

  return (
    <div>
      <div className="space-y-6">
        {loadStatus != "loading" ? (
          quotes.map((quote, i) => <Quote key={i} quote={quote} />)
        ) : (
          <div className="text-left p-4">Loading... </div>
        )}
      </div>
    </div>
  );
};

export default Home;
