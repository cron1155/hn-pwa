import { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import LoadingSkeleton from "../components/LoadingSkeleton";
import NewsEntry from "../components/NewsEntry";

function Dashboard() {
  const { isLoading, error, data } = useQuery(
    "storyData",
    () =>
      fetch(
        "https://hn.algolia.com/api/v1/search_by_date?tags=front_page&hitsPerPage=10"
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

  return <>{newsList}</>;
}

export default Dashboard;
