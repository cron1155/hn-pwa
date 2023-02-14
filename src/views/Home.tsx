import { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import NewsEntry from "../components/NewsEntry";

function Dashboard() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story").then(
      (res) => res.json()
    )
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const newsList = useMemo(() => {
    if (!data) return <></>;

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
