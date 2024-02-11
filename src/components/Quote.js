import { useDispatch } from "react-redux";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconActive } from "@heroicons/react/24/solid";

import { likeQuote } from "../app/reducers/quotesSlice";

const Quote = ({ quote }) => {
  const dispatch = useDispatch();

  const handleLikeQuote = (id) => {
    dispatch(likeQuote(id));
  };

  return (
    <div className="grid grid-cols-12 border-b p-4 border-gray-700">
      <div className="col-span-1">
        <img src="/avatar.png" className="h-8 w-8 rounded-full" />
      </div>

      <div className="col-span-11 text-left space-y-2">
        <h2 className="font-semibold">{quote.author}</h2>
        <p>{quote.content}</p>
        <div className="flex space-x-8  ">
          {quote.isLiked ? (
            <HeartIconActive
              onClick={() => handleLikeQuote(quote._id)}
              className="h-6 w-6 text-red-500 cursor-pointer "
            />
          ) : (
            <HeartIcon
              onClick={() => handleLikeQuote(quote._id)}
              className="h-6 w-6 cursor-pointer"
            />
          )}
          <ChatBubbleOvalLeftIcon className="h-6 w-6" />
          <PaperAirplaneIcon className="h-6 w-6" />
        </div>

        <p>
          {quote.tags.map((tag, j) => (
            <span className="text-sm text-gray-500" key={j}>
              {tag} &nbsp;
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Quote;
