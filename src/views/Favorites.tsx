import { useSelector } from "react-redux";
import { useAppSelector } from "../state";

function Favorites() {
  const articles = useAppSelector((state) => state.favoritesArticles.articles);
  return (
    <>
      Favorites.
      {articles.map((d) => (
        <div>{d.title}</div>
      ))}
    </>
  );
}

export default Favorites;
