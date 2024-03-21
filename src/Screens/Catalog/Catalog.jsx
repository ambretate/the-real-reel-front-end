import { getMovies } from "../../Services/movies.js";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MoviePreview from "../../Components/MoviePreview/MoviePreview.jsx";
import "./Catalog.css";

function Catalog() {
  // use states
  const [movies, setMovies] = useState([]);

  // populate movies array state on mount
  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = await getMovies();
      setMovies(allMovies);
    };
    fetchMovies();

  }, []);

  return (
    <div id="mainContainer-Catalog">
      <h1 id="mainTitle-Catalog"> Movie Catalog </h1>

      <div id="moviePrevContainer-Catalog">
        {movies.map((movie) => (
          <NavLink to={`/movies/${movie._id}`} key={movie._id}>
            <MoviePreview item={movie} />
          </NavLink>
        ))}

      </div>
    </div>
  );
}

export default Catalog;
