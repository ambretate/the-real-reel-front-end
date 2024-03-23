import { useEffect, useState } from "react";
import { deleteReview as deleteReviewService } from "../../Services/reviews.js";
import { getUser, updateFollowings } from "../../Services/users.js";
import {removeUnderscores, parseMongoDate} from "../../Services/conversions.js";
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
  const [userName, setUserName] = useState('');
  const [reviewDate, setReviewDate] = useState('');
 

  // set spoiler state
  // fetch the userData with ID
  useEffect(() => {
    const fetchUser = async () => {
      const item = await getUser(review.userID);
      setUser(item);
      setBlur(review.hasSpoilers);
      setUserName(removeUnderscores(item.username));
      setReviewDate(parseMongoDate(item.updatedAt));
    };

    fetchUser();
  }, []);

  // toggle blur if contains spoiler is true
  function handleClick() {
    if (blur) {
      setBlur(false);
    }
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
        <div className="spoilerTitle-container">
          <h2 id="reviewTitle-PreReview">
            <u>{review.title}</u> By {userName}
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
        </div>
        <p>Written on: {reviewDate}</p>
        <div onClick={handleClick} id="bodyContainer-PreReview">
          {blur ? <p>This review contains spoilers! Click to see: </p> : null}
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
                  if (window.confirm('U sure you want to delete this item?')) {
                    handleDelete(review._id);
                    
                  } else {
                    
                  }
                }}
                
              >
                Delete
              </button>
            ) : null
          } 
        </div>
      </div>
    </div>
  );
}

export default PreReview;
