import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import {
  selectTrendingQuotes,
  fetchTrendingQuotes,
  selectLoadStatus,
} from "../app/reducers/quotesSlice";

import Quote from "./Quote";

const TrendingQuotes = () => {
  let { tagname } = useParams();

  const dispatch = useDispatch();
  const quotes = useSelector(selectTrendingQuotes);
  const loadStatus = useSelector(selectLoadStatus);

  useEffect(() => {
    dispatch(fetchTrendingQuotes(tagname));
  }, [tagname]);

  return (
    <div className="">
      <div className="grid grid-cols-12 text-left mb-4 p-4">
        <div className="col-span-1">
          <Link to="/">
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
        </div>
        <div className="col-span-11">
          <p className="text-gray-600 text-sm tracking-widest">TOPIC</p>
          <p className="capitalize font-bold text-lg"># {tagname}</p>
        </div>
      </div>
      <div>
        {loadStatus != "loading" ? (
          quotes.length ? (
            <div className="space-y-6">
              {quotes.map((quote, i) => {
                return <Quote key={i} quote={quote} />;
              })}
            </div>
          ) : (
            <h3 className="text-center mt-2">No Quotes.</h3>
          )
        ) : (
          <div>
            <h3 className="p-4">Loading...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingQuotes;
