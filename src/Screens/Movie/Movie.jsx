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

  // function to add st rd and so on
  const appendDay = function (day) {
    const arr = day.split("");
    let answer = "";
    switch (arr[arr.length - 1]) {
      case "1":
        answer = "st";
        break;
      case "2":
        answer = "nd";
        break;
      case "3":
        answer = "rd";
        break;
      default:
        answer = "th";
    }
    return answer;
  };

  return `${num2date[arr[1]]} ${arr[2]}${appendDay(arr[2])} ${arr[0]}`;

  // we should add a back button here to nav back to the main Catalog
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
