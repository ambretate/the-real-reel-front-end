import { useState } from "react";
import "./MoviePreview.css";

function MoviePreview({ movie }) {
  const [hover, setHover] = useState(false);
  const [delay, setDelay] = useState('');
  
  const handleHover = () => {
    const del = setTimeout(() => {
      setHover(true);
    }, 1500);
    setDelay(del);
  }

  const handleLeave = () => {
    clearTimeout(delay);
    setHover(false);

  }
  
  return (
    <div 
      id="background-MoviePreview"  
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img id="image-MoviePreview" src={movie.image} alt={movie.alt} />
      {
        (hover) ?
          <p id="description-MoviePreview">{movie.description}</p>
        : null

      }
    </div>
  );
}

export default MoviePreview;
