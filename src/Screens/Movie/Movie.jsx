import {useEffect, useState} from 'react';
import MovieBlock from '../../Components/MovieBlock/MovieBlock.jsx';
import PreReview from '../../Components/PreReview/PreReview.jsx';
import MoviePreview from '../../Components/MoviePreview/MoviePreview.jsx';

function Movie({ id }) {
  // set states
  const [reviews, setReviews] = useState([]);
  const [recs, setRecs] = useState([]);
  
  // make function to populate reviews
  useEffect( () => {
    
  }, []);

  // make function to populate recommendations
  useEffect( () => {
    
  }, []);

  return (
    <div id="mainContain-Movie">
      <MovieBlock />
      <div id="reviews-Movie">
        <PreReview id={reviews[0]} />
      </div>
      <div id="recommendations-Movie">
        <MoviePreview id={reviews[0]}/>
      </div>


    </div>
  )
}

export default Movie