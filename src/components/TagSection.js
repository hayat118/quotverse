import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchTags, selectTags } from "../app/reducers/tagsSlice";

const TagSection = () => {
  const dispatch = useDispatch();
  const tags = useSelector(selectTags);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <div className="mt-4 space-y-6">
      {tags.map((tag, i) => {
        return (
          <Link key={i} to={`/tags/${tag.slug}`} className="mb-4 block">
            <p className="uppercase text-sm text-gray-500">{tag.name}</p>
            <p className="text-md">#{tag.slug}</p>
            <p className="text-sm text-gray-600">{tag.quoteCount} quotes</p>
          </Link>
        );
      })}
    </div>
  );
};

export default TagSection;
