import React, { useState, useEffect } from "react";
import "./User.css";
import { getFollows } from "../../Services/users.js";

function User({ user }) {
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
      <h2>{user.email}</h2>
      <p>{user.review}</p>

      <div>
        {follows && follows.following.map((follow) => (
          <div>
            <p>{follow.username}</p>
            {/* <button>{follow.following.length}</button> */}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>You need to log in!</div>
  );
}

export default User;
