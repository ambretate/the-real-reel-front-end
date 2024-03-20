import {useEffect, useState, useParams} from 'react';
import MovieBlock from '../../Components/MovieBlock/MovieBlock.jsx';
import PreReview from '../../Components/PreReview/PreReview.jsx';
import MoviePreview from '../../Components/MoviePreview/MoviePreview.jsx';
import { getReviews } from '../../Services/reviews.js';

function Movie() {
  // get id with useParams
  const {movieId} = useParams();

  // set states
  const [reviews, setReviews] = useState([]);
  const [recs, setRecs] = useState([]);
  
  // make function to fetch movie
  useEffect(() => {
    const fetchReviews = async () => {
      const allReviews = await getReviews();
      setReviews(allReviews);
    };
    
    fetchReviews();
  }, [])

  // make function to populate reviews
  useEffect(() => {
    const fetchReviews = async () => {
      const allReviews = await getReviews();
      setReviews(allReviews);
    };
    
    fetchReviews();
  }, [])

  // make function to populate recommendations
  useEffect( () => {
    
  }, []);

  return (
    <div id="mainContain-Movie">
      <MovieBlock id={movieId}/>
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