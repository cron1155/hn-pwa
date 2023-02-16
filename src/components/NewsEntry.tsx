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
        <EntryHeader>
          {entryIndex !== undefined ? (
            <EntryIndex>{entryIndex + 1}.</EntryIndex>
          ) : (
            <EntryIndex>-</EntryIndex>
          )}

          {entryTitle ? (
            <EntryTitle>{entryTitle}</EntryTitle>
          ) : (
            <EntryTitle>Undefined Title</EntryTitle>
          )}

          {entryAuthor ? (
            <EntryAuthor>by {entryAuthor}</EntryAuthor>
          ) : (
            <EntryAuthor>by Unknown</EntryAuthor>
          )}
        </EntryHeader>
        <EntryBody>
          {entryNumPoints ? <span>{entryNumPoints} Points</span> : null}
          {entryNumComments ? <span>{entryNumComments} Comments</span> : null}
        </EntryBody>
      </EntryContainer>
    </Link>
  );
};

const EntryBody = styled.div`
  display: flex;
  justify-content: start;
  width: 17%;

  --margin: 0.4rem;

  & > * {
    /* margin-right: var(--margin); */
    padding-right: var(--margin);
    border-right: 1px solid white;
    margin-right: 0.5rem;
    flex: 1;
  }

  &:first-child {
    padding-left: var(--margin);
    padding-right: var(--margin);
    border-right: 1px solid white;
  }

  & > *:last-child {
    border: 0;
  }

  & span {
    font-size: 0.7rem;
    color: white;
    opacity: 0.5;
    display: flex;
    justify-content: center;
  }
`;

const EntryContainer = styled.div`
  background-color: #1c1c1c;
  color: white;
  padding: 0.2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    margin-bottom: 0.2rem;
  }

  &:hover {
    background-color: #2c2c2c;
  }
`;

const EntryIndex = styled.span`
  font-weight: 500;
  font-size: 1rem;
  color: white;
  opacity: 0.9;
`;

const EntryAuthor = styled.span`
  padding: 0.1rem;
  font-size: 0.6rem;
  color: white;
  opacity: 0.5;
`;

const EntryTitle = styled.div`
  font-weight: 600;
  color: white;
  opacity: 0.7;
`;

const EntryHeader = styled.div`
  display: flex;

  align-items: baseline;

  & > * {
    margin-right: 0.5rem;
  }
`;

export default NewsEntry;
