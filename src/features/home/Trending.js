import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchTags, selectTags } from "./tagsSlice";

const Trending = () => {
  const dispatch = useDispatch();
  const tags = useSelector(selectTags);

  useEffect(() => {
    console.log("called in trending");
    dispatch(fetchTags());
  }, []);

  return (
    <div className="p-4 text-left">
      {tags.map((tag, i) => {
        return (
          <Link to={`/tags/${tag.slug}`} className="mb-4">
            <p className="capitalize text-gray-500">{tag.name}</p>
            <p className="">#{tag.slug}</p>
            <p className="text-sm text-gray-600">{tag.quoteCount} quotes</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Trending;
