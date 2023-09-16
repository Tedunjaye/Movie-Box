import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function SearchResultsPage({ location }) {
  const searchQuery = new URLSearchParams(location.search).get('q');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!searchQuery) {

      setLoading(false);
      return;
    }

    const apiKey = import.meta.env.ACCESS_TOKEN_AUTH
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((err) => {
        setError(`Error fetching data: ${err.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery]);

  return (
    <div className="search-results">
      {searchQuery && (
        <h2>Search Results for: {searchQuery}</h2>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="movie-grid">
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
