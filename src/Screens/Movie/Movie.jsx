import React, { useEffect, useState } from "react";
import { getMovie } from "../../Services/movies.js";

function Movie({ id }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await getMovie(id);
        setMovie(movieData.movie);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="mainContain-Movie">
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.image} alt={movie.title} />
          <p>Description: {movie.description}</p>
          <p>Release Date: {movie.releaseDate}</p>
        </div>
      )}
    </div>
  );
}

export default Movie;
