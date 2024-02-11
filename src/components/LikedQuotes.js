import { useSelector } from "react-redux";
import { selectLikedQuotes } from "../app/reducers/quotesSlice";

import Quote from "./Quote";

const LikedQuotes = () => {
  const quotes = useSelector(selectLikedQuotes);

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
          <h3 className="text-center mt-4">No quotes liked yet</h3>
        </div>
      )}
    </div>
  );
};

export default LikedQuotes;
