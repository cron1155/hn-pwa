import { ArticleChildren } from "../types";

export interface CommentProps {
  data: ArticleChildren;
}

const Comment: React.FC<CommentProps> = ({ data }) => {
  const { id } = data;
  return (
    <>
      {data?.id} <br />
      <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
      {data?.children
        ? data.children.map((d, index) => <Comment key={id + index} data={d} />)
        : null}
    </>
  );
};

export default Comment;
