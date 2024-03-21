import {useEffect, useState} from 'react';
import {getUser} from '../../Services/users.js';
import './PreReview.css';

function PreReview( { movie, review } ) {
  const [user, setUser] = useState({});

  // fetch the userData with ID
  useEffect(() => {
    const fetchUser = async () => {
      console.log('is this a user id?', review.userID)
      const item = await getUser(review.userID);
      setUser(item);
      
    };
    
    fetchUser();
  }, [review.userID]);
  
  return (
    <div id="mainContainer-PreReview">
      <img id="img-PreReview" src={movie.img} alt={movie.alt} />
      <h1 id="title-PreReview">
        {review.title}  
      </h1>
      <h1 id="userName-PreReview">
        {user.username}
      </h1>
        {
          (review.hasSpoilers)
          ? <p id="body-PreReview"> CONTAINS SPOILERS! </p>
          
          : <p id="body-PreReview">
              {review.review}
            </p>
        }

      
    </div>
  )
}

export default PreReview