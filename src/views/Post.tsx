import { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { Routes, Route, useParams } from "react-router-dom";
import styled from "styled-components";
import { Article } from "../types";

import Comment from "../components/Comment";
import TextContent from "../components/TextContent";
import UrlContent from "../components/UrlContent";

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

  const comments = useMemo(() => {
    if (!data?.children) {
      return <></>;
    }

    return data.children.map((articleChildren, index) => (
      <Comment key={articleChildren.id + index} data={articleChildren} />
    ));
  }, [data]);

  if (isLoading) {
    return <></>;
  }

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>{data?.title}</PostTitle>
        <span>by {data?.author}</span>
      </PostHeader>

      <PostContent>
        {data?.text ? (
          <TextContent content={data.text} />
        ) : (
          <UrlContent url={data?.url || ""} />
        )}
      </PostContent>

      <PostActions>
        <button>Add to Favorites</button>
      </PostActions>

      <PostComments>{comments}</PostComments>
    </PostContainer>
  );
}

const PostActions = styled.div`
  display: flex;
`;

const PostContent = styled.div`
  padding: 1rem 0rem;
`;

const PostComments = styled.div`
  padding: 1rem;
`;

const PostContainer = styled.div``;
const PostTitle = styled.div`
  font-size: 1.5rem;
`;

const PostHeader = styled.div`
  margin-bottom: 1rem;

  & span {
    font-size: 1rem;
    opacity: 0.5;
  }
`;

export default Post;
