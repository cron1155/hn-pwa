import { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import LoadingSkeleton from "../components/LoadingSkeleton";
import NewsEntry from "../components/NewsEntry";

function Dashboard() {
  const { isLoading, error, data } = useQuery(
    "storyData",
    () =>
      fetch(
        "https://hn.algolia.com/api/v1/search_by_date?tags=front_page&hitsPerPage=50"
      ).then((res) => res.json()),
    { cacheTime: 5000 }
  );

  const newsList = useMemo(() => {
    if (!data || !data.hits) return <LoadingSkeleton />;

    return data.hits.map((hitObject: any, index: number) => (
      <NewsEntry
        key={hitObject.objectID}
        entryTitle={hitObject.title}
        entryAuthor={hitObject.author}
        entryIndex={index}
        entryId={hitObject.objectID}
        entryNumComments={hitObject.num_comments}
        entryNumPoints={hitObject.points}
      />
    ));
  }, [data]);

  return <ArticleList>{newsList}</ArticleList>;
}

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 0.5rem;
  }
`;

export default Dashboard;
