import { useEffect } from "react";
import { useQuery } from "react-query";
import { Routes, Route, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(
    "storyData",
    () =>
      fetch("http://hn.algolia.com/api/v1/items/" + id).then((res) =>
        res.json()
      ),
    { cacheTime: 5000 }
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <>{id}</>;
}

export default Post;
