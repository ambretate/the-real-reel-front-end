import React, { useState, useEffect } from "react";
import "./User.css";
import { getFollows } from "../../Services/users.js";
import Following from "../../Components/Follows/Following.jsx";
import { Link } from "react-router-dom";
import Follower from "../../Components/Follows/Follower.jsx";

function User({ user }) {
  console.log('huh',user)
  const [follows, setFollows] = useState(null);

  useEffect(() => {
    const fetchFollows = async () => {
      try {
        const followsResponse = await getFollows();
        setFollows(followsResponse);
      } catch (error) {
        console.error("Error fetching follows:", error);
      }
    };

    fetchFollows();
  }, []);

  return user ? (
    <div className="user-container">
      <img src={user.image} />
      <h1>{user.username}</h1>
      <p>{user.email}</p>
      <p>{user.review}</p>
      <Link to="/following" element={<Following />}>
        See Following
      </Link>
      <Link to="/follower" element={<Follower />}>
        See Followers
      </Link>
    </div>
  ) : (
    <div>You need to log in!</div>
  );
}

export default User;
