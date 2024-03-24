import { useEffect, useState } from "react";
import { deleteReview as deleteReviewService } from "../../Services/reviews.js";
import { getUser, updateFollowings } from "../../Services/users.js";
import {
  removeUnderscores,
  parseMongoDate,
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
  //const [user, setUser] = useState({});
  const [expand, setExpand] = useState(false);
  const [blur, setBlur] = useState(false);
  const [userName, setUserName] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  
  
  // fetch the userData with ID
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const item = await getUser(review.userID);
        //console.log('item', item)
      
        //setUser(item);
        setUserName(removeUnderscores(item.username));
        setReviewDate(parseMongoDate(item.updatedAt));
      } catch {
        console.log('no user data or something idk');
      }
    };

    fetchUser();
  }, [review.userID]);

  // set has spoilers
  useEffect( () => {
    setBlur(review.hasSpoilers);
  }, [review.hasSpoilers]);

  // toggle blur if contains spoiler is true
  function handleClick() {
    if (blur) {
      setBlur(false);
    }
  }

  // handle exapnd Click
  function handleExpandClick() {
    setExpand((prev) => !prev);
  }

  // delete this review and update toggle review state in parent Movie
  async function handleDelete(id) {
    await deleteReviewService(id);
    setToggleReviews((prev) => !prev);
  }
  // follow user of review and update toggle review state in parent Movie
  async function handleFollowClick(user_ID) {
    await updateFollowings(user_ID);
    setToggleReviews((prev) => !prev);
  }

  // werid error handling here because it seems the first
  //const userName = !user ? "loading ..." : user.username;
  return (
    <div id={(expand) ? "mainContainerExpand-PreReview" : "mainContainer-PreReview"}>
      <div id={(expand) ? "leftContainerExpand-PreReview" :"leftContainer-PreReview" }>
        {
          !showUser ? (
            <img
              id="movieImage-PreReview"
              src={movie.image}
              alt={`Movie Title poster for ${movie.title}`}
            />
          ) : null
        }
      </div>

      <div id={(expand) ? "rightContainerExpand-PreReview" :"rightContainer-PreReview" }>
        <div className="spoilerTitle-container">
          <h2 id="reviewTitle-PreReview">
            <u>{review.title}</u>
          </h2>
          <p id="author-PreReview">
          By {userName}
          </p>
          {isFollowingUser ? (
            <button id="followButton-PreReview">Followed</button>
          ) : (
            <button
              id="followButton-PreReview"
              onClick={() => handleFollowClick(review.userID)}
            >
              Follow
            </button>
          )}
        </div>
        <p id="date-PreReview">Written on: {reviewDate}</p>
        {
            userID === review.userID ? (
              <button
                id="deleteButton-PreReview"
                onClick={ () => {
                  if (window.confirm('U sure you want to delete this item?')) {
                    handleDelete(review._id);
                    
                  } else {
                    
                  }
                }}
                
              >
                Delete Your Review
              </button>
            ) : null
          }
          <buttton
            onClick={handleExpandClick}
            id="expandReviewButton-PreReview"
          > Expand Review </buttton> 
        <div 
          onClick={handleClick} 
          
          id={(expand) ? "openBody-PreReview" : "bodyClippedContainer-PreReview"}
        >
          {blur ? <p>This review contains spoilers! Click to see: </p> : null}
          <p
            id="body-PreReview"
            className={blur ? "blurReview-PreReview" : "normalReview-PreReview"}
          >
            {review.review}
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default PreReview;
