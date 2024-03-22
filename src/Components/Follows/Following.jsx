import React, { useState, useEffect } from "react";
import { getFollows } from "../../Services/users.js";
import "./Following.css";

function Follows() {
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

  return (
    <div className="following-container">
      <h1>Following</h1>
      <div className="following">
        {follows &&
          follows.following.map((follow) => (
            <div className="following-users">
              <p>{follow.username}</p>
              <p className="following-p">
                Following: {follow.following.length}
              </p>
              <p className="following-p">
                Followers: {follow.followers.length}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Follows;
