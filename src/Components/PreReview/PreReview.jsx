import { useEffect, useState } from 'react';
import { getUser } from '../../Services/users.js';
import './PreReview.css';

function PreReview( { movie, review, showUser } ) {
  const [user, setUser] = useState({});

  // fetch the userData with ID
  useEffect(() => {
    const fetchUser = async () => {
      const item = await getUser(review.userID);
      setUser(item);
      
    };
    
    fetchUser();
  }, [review]);
  
  const userName = (!user) ? 'loading ...' : user.username;
  return (
    <div id="mainContainer-PreReview">
      <div id="leftContainer-PreReview">
        {
          (!showUser) ? 
            <img 
              id="movieImage-PreReview"
              src={movie.image}
              alt={`Movie Title poster for ${movie.title}`}
            />
           
          : 
            <h1 id="userName-PreReview">
              {userName}
            </h1>
        } 

      </div>

      <div id="rightContainer-PreReview">
        {
          (!showUser) ? 
            <h1 id="movieTitle-PreReview">
              {movie.title}
            </h1>

          : null
            
        } 

        <h2 id="reviewTitle-PreReview">
          <u>{review.title}</u> By {userName} 
        </h2>
        
        <p 
          id="body-PreReview"
          className={review.hasSpoilers ? 'blurBody-PreReview' : 'bodyClear-PreReview'}
        > 
          {review.title} 
        </p>
        
      </div>
      
    </div>
  )
}

export default PreReview