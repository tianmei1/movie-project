import MovieList from "../components/MovieList/MovieList";
import Star from "../assets/glowing-star.png";

const TopRatedPage = () => {
  return <MovieList type="top_rated" title="Top Rated" emoji={Star} />;
};

export default TopRatedPage;
