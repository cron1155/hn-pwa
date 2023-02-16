import { useCallback, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { Routes, Route, useParams } from "react-router-dom";
import styled from "styled-components";
import { Article } from "../types";

import Comment from "../components/Comment";
import TextContent from "../components/TextContent";
import UrlContent from "../components/UrlContent";
import { useDispatch } from "react-redux";
import { addArticle } from "../state/slices";
import LoadingSkeleton from "../components/LoadingSkeleton";

function Post() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<Article>(
    "storyData",
    () =>
      fetch("http://hn.algolia.com/api/v1/items/" + id).then((res) =>
        res.json()
      ),
    { cacheTime: 5000 }
  );

  const handleAddFavorite = useCallback(() => {
    if (!data) {
      return;
    }

    dispatch(addArticle(data));
  }, [data]);

  const comments = useMemo(() => {
    if (!data?.children || data.children.length === 0) {
      return <LoadingSkeleton />;
    }

    return data.children.map((articleChildren, index) => (
      <Comment key={articleChildren.id + index} data={articleChildren} />
    ));
  }, [data]);

  const postContent = useMemo(() => {
    if (!data?.text && !data?.url) {
      return <LoadingSkeleton />;
    }

    if (data?.text) {
      return <TextContent content={data.text} />;
    }

    if (data?.url) {
      return <UrlContent url={data?.url || ""} />;
    }
  }, [data?.url, data?.text]);

  if (isLoading || !data) {
    return <LoadingSkeleton />;
  }

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>{data?.title}</PostTitle>
        <span> {data?.author ? "by" + data.author : <LoadingSkeleton />}</span>
      </PostHeader>

      <PostContent>{postContent}</PostContent>

      <PostActions>
        <button onClick={handleAddFavorite}>Add to Favorites</button>
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
