import { useEffect } from "react";
import { useQuery } from "react-query";
import { Routes, Route, useParams } from "react-router-dom";
import styled from "styled-components";
import { Article } from "../types";

import Comment from "../components/Comment";

function Post() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<Article>(
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

  if (isLoading) {
    return <></>;
  }

  return (
    <PostContainer>
      <div>{data?.title}</div>
      <div>{data?.author}</div>

      {data && data?.children
        ? data?.children.map((d, index) => (
            <Comment key={d.id + index} data={d} />
          ))
        : null}
    </PostContainer>
  );
}

const PostContainer = styled.div``;

export default Post;
