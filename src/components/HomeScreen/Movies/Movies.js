import MovieCardPlaceholder from "../../Placeholders/MovieCardPlaceholder";
import Movie from "./Movie";

const Movies = ({ searchedMovie, movies, isLoading }) => {
  return (
    <div className="flex justify-center flex-col mx-auto max-w-7xl">
      <div className="flex justify-between flex-row flex-wrap">
        {isLoading ? (
          <>
            <MovieCardPlaceholder/>
            <MovieCardPlaceholder/>
            <MovieCardPlaceholder/>
          </>
        ) : movies?.length > 0 ? (
          movies?.map((movie, index) => (
            <div key={index}>
              <Movie
                title={movie.title}
                year={movie.year}
                titlyType={movie.titleType}
                url={movie?.image?.url}
                id={movie.id}
              />
            </div>
          ))
        ) : (
          <h1>There is no movies</h1>
        )}
      </div>
    </div>
  );
};

export default Movies;
