import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteReview as deleteReviewService } from "../../Services/reviews.js";
import { getUser, updateFollowings } from "../../Services/users.js";

import {
  removeUnderscores,
  parseMongoDate,
  extractTime
} from "../../Services/conversions.js";
import "./PreReview.css";

function PreReview({
  movie,
  review,
  showUser,
  isFollowingUser,
  setToggleReviews,
  userID,
}) {
  const [user, setUser] = useState({});
  const [blur, setBlur] = useState(false);
  const [userName, setUserName] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const item = await getUser(review.userID);
        setUser(item);
        setBlur(review.hasSpoilers);
        setUserName(removeUnderscores(item.username));
        setReviewDate(parseMongoDate(item.updatedAt));
        setTime(extractTime( item.updatedAt ) );
      } catch (error) {
        console.error("Error getting user:", error);
        // Handle error: set user state to indicate error or show error message to the user
      }
    };
  
    fetchUser();
  }, []);

  function handleClick() {
    if (blur) {
      setBlur(false);
    }
  }

  async function handleDelete(id) {
    try {
      if (window.confirm("Are you sure you want to delete this item?")) {
        await deleteReviewService(id);
        setToggleReviews((prev) => !prev);
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      // Handle error: display error message or handle accordingly
    }
  }

  async function handleFollowClick(user_ID) {
    try {
      await updateFollowings(user_ID);
      setToggleReviews((prev) => !prev);
    } catch (error) {
      console.error("Error updating followings:", error);
      // Handle error: display error message or handle accordingly
    }
    }
  
  return (
    <div id="mainContainer-PreReview">
      <div id="leftContainer-PreReview">
        {!showUser ? (
          <img
            id="movieImage-PreReview"
            src={movie.image}
            alt={`Movie Title poster for ${movie.title}`}
          />
        ) : (
          <h1 id="userName-PreReview">{userName}</h1>
        )}
      </div>

      <div id="rightContainer-PreReview">
       
        <h2 id="reviewTitle-PreReview">
          <u>{review.title}</u><br></br> 
          <NavLink to={`/user/${userID}`}>
            <span className="name-PreReview">
              By <u className="name-PreReview"> {userName} </u> 
            </span>
          </NavLink>
        </h2>
        {isFollowingUser ? (
          <button className="follow-button">Followed</button>
        ) : (
          <button
            className="follow-button"
            onClick={() => handleFollowClick(review.userID)}
          >
            Follow
          </button>
        )}  
        
        <p>Written on: {reviewDate} @ {time} </p>
        <div onClick={handleClick} id="bodyContainer-PreReview">
          {blur && <p>This review contains spoilers! Click to see: </p>}
          <p
            id="body-PreReview"
            className={blur ? "blurReview-PreReview" : "normalReview-PreReview"}
          >
            {review.review}
          </p>

          {
           
            userID === review.userID ? (
              <button
                className="delete-button"
                onClick={ () => {
                  if (window.confirm(`R U sure you want to delete you're amazing review of ${movie.title}?`)) {
                    handleDelete(review._id);
                    
                  } else {
                    
                  }
                }}
                
              >
                Delete Your Review
              </button>
            ) : null
          } 

        </div>
      </div>
    </div>
  );
}

export default PreReview;
