import { useMemo } from "react";
import styled from "styled-components";
import { ArticleChildren } from "../types";
import TextContent from "./TextContent";

export interface CommentProps {
  data: ArticleChildren;
}

const Comment: React.FC<CommentProps> = ({ data }) => {
  const { id } = data;

  const comments = useMemo(() => {
    if (!data?.children) {
      return <></>;
    }

    return data.children.map((articleChildren, index) => (
      <Comment key={articleChildren.id + index} data={articleChildren} />
    ));
  }, [data]);

  return (
    <CommentContainer>
      <CommentHeader>
        <span>{data.author}</span>
      </CommentHeader>
      <CommentContent>
        {data.text ? <TextContent content={data.text} /> : null}
      </CommentContent>

      <PostComments>{comments}</PostComments>
    </CommentContainer>
  );
};

const CommentHeader = styled.div`
  border-bottom: solid 1px #292929;
  padding: 0.2rem 0.5rem;
  opacity: 0.4;
`;

const CommentContent = styled.div`
  padding: 0.5rem 0.5rem;
  opacity: 0.8;
  /* &:hover {
    background-color: #1e1e1e;
  } */
`;

const CommentContainer = styled.div`
  /* background-color: #1e1e1e; */
  /* padding-left: 0.1rem; */
  border-left: solid 1px var(--primary-1);
  background-color: var(--primary-3);
`;

const PostComments = styled.div`
  padding: 0.3rem;
  background-color: var(--primary-2);
`;

export default Comment;
