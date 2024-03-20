import {getMovies} from '../../Services/movies.js';
import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import MoviePreview from '../../Components/MoviePreview/MoviePreview.jsx';

function Catalog() {
  // use states
  const [movies, setMovies] = useState([]);

  // populate movies array state on mount
  
  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = await getMovies()
      setMovies(allMovies)
      
    }
    fetchMovies()
  }, [])



  console.log('where da movies at', movies[0])

  return (
    <div id="mainContainer-Catalog">
      <h1 id="mainTitle-Catalog"> Movie Catalog </h1>
      
      <div id="moviePrevContainer-Catalog">
        {
          (movies) ?
          movies.map( (item, idx) => (
            
            <NavLink to={`/movies/${item._id}`}>
              <MoviePreview item={item} key={idx} />
            </NavLink>
          ))
          : null
        }
      </div>
      
    </div>
  )
}

export default Catalog