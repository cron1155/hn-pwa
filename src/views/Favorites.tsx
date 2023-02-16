import { useMemo } from "react";
import { useSelector } from "react-redux";
import NewsEntry from "../components/NewsEntry";
import { useAppSelector } from "../state";

function Favorites() {
  const articles = useAppSelector((state) => state.favoritesArticles.articles);

  const favoritedArticles = useMemo(() => {
    if (articles.length == 0) {
      return <p>No Articles</p>;
    }

    return articles.map((article, index) => {
      return (
        <NewsEntry
          key={article.id}
          entryTitle={article.title}
          entryAuthor={article.author}
          entryIndex={index}
          entryId={article.id}
        />
      );
    });
  }, [articles]);

  return (
    <>
      <h2>Current Favorite Articles</h2>
      <div>{favoritedArticles}</div>
    </>
  );
}

export default Favorites;
