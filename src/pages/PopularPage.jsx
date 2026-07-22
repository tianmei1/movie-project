import MovieList from "../components/MovieList/MovieList";
import Fire from "../assets/fire.png";

const PopularPage = () => {
  return <MovieList type="popular" title="Popular" emoji={Fire} />;
};

export default PopularPage;
