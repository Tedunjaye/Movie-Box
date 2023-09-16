
function MovieCard({ movie, loading, error }) {
  return (
    <div className="movie-card">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <h6>{movie.overview}</h6>
          <p>Release Date: {movie.release_date} </p>
        </>
      )}
    </div>
  );
}

export default MovieCard;
