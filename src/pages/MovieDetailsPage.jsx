import { useEffect, useState } from 'react';

function MovieDetailsPage({ match }) {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieId = match.params.id;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.ACCESS_TOKEN_AUTH}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      })
      .catch((err) => {
        setError('Error fetching movie details. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [match.params.id]);

  return (
    <div className="movie-details">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>{movie.original_language}</p>
          <p>{movie.overview}</p>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
