import { useEffect, useState } from 'react';
import { getUser } from '../../Services/users.js';
import './PreReview.css';

function PreReview( { movie, review, showUser } ) {
  const [user, setUser] = useState({});
  const [blur, setBlur] = useState(false);
  // set blur state to review.hasSpoilers 
  setBlur( review.hasSpoilers );
  
  // fetch the userData with ID
  useEffect(() => {
    const fetchUser = async () => {
      const item = await getUser(review.userID);
      setUser(item);
    };
    
    fetchUser();
  }, [review]);

  function handleClick() {
    if(blur) {
      setBlur(false);
    }
  }
  
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
        
        <div 
          className={ blur ? 'blurBody-PreReview' : 'normalBody-PreReview' }
          onClick={handleClick}
          >
          {
            (blur) ? 
              <h3>this review contains spoilers! click to proceed</h3>
            : null
          }
          <p id="body-PreReview"> {review.review} </p>
        </div>

          
        
      </div>
      
    </div>
  )
}

export default PreReview