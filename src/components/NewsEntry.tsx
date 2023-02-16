import { Link } from "react-router-dom";
import styled from "styled-components";

export interface NewsEntryProp {
  entryId: number;
  entryIndex?: number;
  entryTitle?: string;
  entryAuthor?: string;
  entryNumComments?: number;
  entryNumPoints?: number;
}

const NewsEntry: React.FC<NewsEntryProp> = ({
  entryIndex,
  entryTitle,
  entryAuthor,
  entryNumComments,
  entryNumPoints,
  entryId,
}) => {
  return (
    <Link to={"/post/" + entryId}>
      <EntryContainer>
        {entryIndex !== undefined ? (
          <EntryIndex>{entryIndex + 1}.</EntryIndex>
        ) : (
          <EntryIndex>-</EntryIndex>
        )}

        {entryNumPoints !== undefined ? (
          <ArticlePoints>{entryNumPoints}</ArticlePoints>
        ) : (
          <ArticlePoints>-</ArticlePoints>
        )}

        <ArticleBody>
          <span className="title">{entryTitle}</span>
          <span className="subtitle">submited by {entryAuthor}</span>
        </ArticleBody>
        {entryNumComments ? (
          <ArticleComments>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>

            <span>{entryNumComments ?? 0} Comments</span>
          </ArticleComments>
        ) : null}
      </EntryContainer>
    </Link>
  );
};

const EntryContainer = styled.div`
  border: 1px solid var(--primary-2);
  border-radius: 2px;
  display: flex;
  justify-content: start;
  height: 4rem;

  /* & > * {
    margin-bottom: 0.2rem;
  }

  &:hover {
    background-color: #2c2c2c;
  } */
`;

const ArticlePoints = styled.div`
  width: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: var(--primary-3);

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    width: 1.5rem;
  }
`;

const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1rem;
  flex: 1;
  word-break: break-all;

  .title {
    font-weight: 700;
  }

  .subtitle {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;

    & .subtitle {
      font-size: 0.7rem;
    }
  }
`;

const ArticleComments = styled.div`
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--primary-0);
  font-weight: 600;

  border-left: 1px solid var(--primary-2);

  & > *:last-child {
    margin-top: 0.1rem;
  }

  svg {
    width: 1.5rem;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const EntryIndex = styled.div`
  width: 3rem;
  //background-color: var(--primary-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    width: 1.5rem;
  }
`;

export default NewsEntry;
