import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  quotesAdded,
  fetchQuotes,
  selectQuotesFeed,
  likeQuote,
} from "./quotesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const quotesFeed = useSelector(selectQuotesFeed);
  const quotes = useSelector(selectQuotesFeed);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  const handleLikeQuote = (id) => {
    dispatch(likeQuote(id));
  };

  return (
    <div>
      <div>
        {quotes.map((quote, i) => {
          return (
            <div>
              <p>{quote.content}</p>
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => handleLikeQuote(quote._id)}
              >
                Like - {quote.isLiked ? "Liked" : "Unliked"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
