import { parseDate } from "../../Services/conversions.js";
import './MovieBlock.css';

function MovieBlock( { movie } ) {
  console.log('movie block incoming props', movie);
  // const newDate = parseDate(movie?.releaseDate);
  if (!movie.title) return <h1>Loading...</h1>
  
  return (
    <div id="mainContainer-MovieBlock">
        
        <div id="imgContainer-MovieBlock">
          <img id="img-MovieBlock" src={movie.image} alt={movie.alt} />
        </div>

        <div id="movieInfo-MovieBlock">
          <h1 id="title-MovieBlock"> {movie.title} </h1>
          <h3 id="genreDateLength-MovieBlock"> 
            
            Release Date: ‧  { parseDate(movie?.releaseDate) }  ‧ 
          </h3>
          <p id="description-MovieBlock"> {movie.description} </p>
          <p id="budget-MovieBlock"> {movie.budget} </p>
        </div>
    </div>
  )
}

export default MovieBlock
