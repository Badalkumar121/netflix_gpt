import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="flex flex-col bg-black pb-6">
      <div className="relative  pl-4 sm:pl-8 md:pl-10 z-20 -mt-0 sm:-mt-48 md:-mt-64">
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayMovies} />
        <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Favorite Movies"} movies={movies.nowPlayMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />

        <MovieList title="Adventure Movies" movies={movies?.Adventure} />
        <MovieList title="Fantasy Movies" movies={movies?.Fantasy} />
        <MovieList title="Animation Movies" movies={movies?.Animation} />
        <MovieList title="Comedy Movies" movies={movies?.Comedy} />
        <MovieList title="Action Movies" movies={movies?.Action} />
        <MovieList title="Mystery Movies" movies={movies?.Mystery} />
        <MovieList title="Drama Movies" movies={movies?.Drama} />
        <MovieList title="Family Movies" movies={movies?.Family} />
        <MovieList title="History Movies" movies={movies?.History} />
        <MovieList title="Horror Movies" movies={movies?.Horror} />
        <MovieList title="Crime Movies" movies={movies?.Crime} />
        <MovieList title="Music Movies" movies={movies?.Music} />
        <MovieList title="War Movies" movies={movies?.War} />
        <MovieList title="Documentary Movies" movies={movies?.Documentary} />
        <MovieList title="Western Movies" movies={movies?.Western} />
        <MovieList
          title="Science Fiction"
          movies={movies?.["Science Fiction"]}
        />
        <MovieList title="TV Movies" movies={movies?.["TV Movies"]} />
        {/*<MovieList title={"Advanture Movies"} movies={movies.advantureMovies} />*/}
      </div>
    </div>
  );
};

export default SecondaryContainer;
