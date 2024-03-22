import { useEffect, useState } from "react";
import { getUser } from "../../Services/users.js";
import "./PreReview.css";

function PreReview({ movie, review, showUser }) {
  const [user, setUser] = useState({});

  // fetch the userData with ID
  useEffect(() => {
    const fetchUser = async () => {
      const item = await getUser(review.userID);
      setUser(item);
    };

    fetchUser();
  }, [review]);

  const userName = !user ? "loading ..." : user.username;
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
          <h1 id="movieTitle-PreReview">{movie.title}</h1>
          {review.hasSpoilers ? <button>Spoilers!!!</button> : null}
        </div>

        <h2 id="reviewTitle-PreReview">
          <u>{review.title}</u> By {userName}
        </h2>

        {/* {review.hasSpoilers ? (
          <p id="body-PreReview"> CONTAINS SPOILERS! </p>
        ) : ( */}
          <p id="body-PreReview">{review.review}</p>
        {/* )} */}
      </div>
    </div>
  );
}

export default PreReview;
