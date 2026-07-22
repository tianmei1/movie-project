import MovieList from "../components/MovieList/MovieList";
import Party from "../assets/partying-face.png";

const UpcomingPage = () => {
  return <MovieList type="upcoming" title="Upcoming" emoji={Party} />;
};

export default UpcomingPage;
