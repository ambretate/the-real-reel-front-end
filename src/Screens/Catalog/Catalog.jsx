import {getMovies} from '../../Services/movies.js';
import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import MoviePreview from '../../Components/MoviePreview/MoviePreview.jsx';

function Catalog() {
  // use states
  const [movies, setMovies] = useState([]);

  // populate movies array state on mount
  useEffect( () => {
    setMovies(getMovies);
  }, []);

  return (
    <div id="mainContainer-Catalog">
      <h1 id="mainTitle-Catalog"> Movie Catalog </h1>
      
      <div id="moviePrevContainer-Catalog">
        {/* {movies.map( (item, idx) => (
          <NavLink to={`/movies/${item.id}`}>
            <MoviePreview id={item} key={idx} />
          </NavLink>
        ))} */}
      </div>
      
    </div>
  )
}

export default Catalog