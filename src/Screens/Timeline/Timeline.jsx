import React, { useEffect, useState } from "react";
import { getUserTimeline } from "../../Services/users.js";
import { getMovie } from "../../Services/movies.js";
import "./Timeline.css";
import { Link } from "react-router-dom";

const YourComponent = () => {
  const [user, setUser] = useState(null);
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchTimeline = async () => {
      const user = await getUserTimeline();
      const movieResponse = await getMovie(user.data[0].movieID);
      setUser(user.data[0]);
      setMovie(movieResponse);
      console.log(movieResponse.movie._id)
    };

    fetchTimeline();
  }, []);

  return (
    <div className="rewievs-container-tl">
      <h1 className="latest-reviews">Latest Reviews</h1>
      {user !== null ? (
        <div className="review-box-tl">
          <div className="movie-review-details">
            <div className="user-info-in-review">
              <h3 className="username-h3">{user.userID.username}</h3>
              <p>{new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="img-title-review">
              <img
                src={movie.movie.image}
                alt={movie.movie.title}
                className="movie-review-img"
                />
              <div className="title-review">
                <Link to={`/catalog/${movie.movie._id}`}><h3>{movie.movie.title}</h3></Link>
                <h4>{user.title}</h4>
                <p className="user-review-in-timeline">{user.review}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YourComponent;
