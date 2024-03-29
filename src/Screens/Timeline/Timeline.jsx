import React, { useEffect, useState } from "react";
import { getUserTimeline } from "../../Services/users.js";
import { getUser } from "../../Services/users.js";
import { getMovie } from "../../Services/movies.js";
import { removeUnderscores } from "../../Services/conversions.js";
import "./Timeline.css";
import { Link } from "react-router-dom";

const Timeline = ({ user }) => {
  const [timelineUsers, setTimelineUsers] = useState([]);
  const [userData, setUserData] = useState();
  // const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchTimeline = async () => {
      const timelineUsersData = await getUserTimeline();
      // const movieResponse = await getMovie(user.data[0].movieID);
      setTimelineUsers(timelineUsersData);
      // setMovie(movieResponse);
    };

    fetchTimeline();
  }, []);

  return (
    <div className="rewievs-container-tl">
      <h1 className="latest-reviews">Latest Reviews</h1>
      {timelineUsers.length > 0 &&
        timelineUsers.map((user) => (
          <div className="review-box-tl" key={user._id}>
            <div className="movie-review-details">
              <div className="user-info-container">
                <img
                  className="user-picture-tl"
                  src={user.userID.profilePicture}
                  alt={user.userID.username}
                />
                <div className="user-info-in-review">
                  <h3 className="username-h3">
                    {removeUnderscores(user.userID.username)}
                  </h3>
                  <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="img-title-review">
                <img
                  src={user.movieID.image}
                  alt={user.movieID.title}
                  className="movie-review-img"
                />
                <div className="title-review">
                  <Link to={`/catalog/${user.movieID._id}`}>
                    <h3>{user.movieID.title}</h3>
                  </Link>
                  <h4>{user.title}</h4>
                  <p className="user-review-in-timeline">{user.review}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Timeline;
