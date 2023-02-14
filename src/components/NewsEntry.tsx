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
}) => {
  return (
    <EntryContainer>
      <EntryHeader>
        {entryIndex !== undefined ? (
          <EntryIndex>{entryIndex}.</EntryIndex>
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
        <span>{entryNumPoints ?? 0} Points</span>
        <span>{entryNumComments ?? 0} Comments</span>
        <span>200 Hours Ago</span>
      </EntryBody>
    </EntryContainer>
  );
};

const EntryBody = styled.div`
  display: flex;

  --margin: 0.4rem;

  & > * {
    /* margin-right: var(--margin); */
    padding-right: var(--margin);
    border-right: 1px solid white;
  }

  & > * + * {
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

const EntryContainer = styled.a`
  background-color: #1c1c1c;
  color: white;
  padding: 0.2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
