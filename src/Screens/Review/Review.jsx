import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../Services/reviews.js';

import './Review.css';

function Review() {
  // get id with useParams
  const { id } = useParams();

  // set state
  const [review, setReview] = useState({});

  // fetch the review with ID
  useEffect(() => {
    const fetchReview = async () => {
      const item = await getReview(id);
      setReview(item);

    };
    
    fetchReview();
  }, [id]);

  return (
    <div id="mainContainer-Review">
      <h1 id="title-Review"> {review.title} </h1>
      <p> {review.review} </p>
      
    </div>
  )
}

export default Review;