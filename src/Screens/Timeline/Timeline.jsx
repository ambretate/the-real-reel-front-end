import React, { useEffect, useState } from "react";
import { getUserTimeline } from "../../Services/users.js";
import { getMovie } from "../../Services/movies.js";
import "./Timeline.css";

const YourComponent = () => {
  const [user, setUser] = useState(null);
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchTimeline = async () => {
      const user = await getUserTimeline();
      const movieResponse = await getMovie(user.data[0].movieID);
      setUser(user.data[0]);
      setMovie(movieResponse);
    };

    fetchTimeline();
  }, []);

  return (
    <div className="rewievs-container-tl">
      <h1 className="latest-reviews">Latest Reviews</h1>
      {user !== null ? (
        <div className="review-box-tl">
          <div>
            <img
              src={movie.movie.image}
              alt={movie.movie.title}
              className="movie-review-img"
            />
          </div>
          <div className="movie-review-details">
            <div>
              {/* <img src={user.image} /> */}
              <h3 className="username-h3">{user.userID.username}</h3>
            </div>
            <h4>{user.title}</h4>
            <p>{user.review}</p>
            <p>{movie.movie.title}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YourComponent;
