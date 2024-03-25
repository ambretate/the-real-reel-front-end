import React, { useEffect, useState } from "react";
import { getFollows } from "../../Services/users.js";
import "./Follower.css";

function Follower() {
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
    <div>
      <div className="following">
        {follows &&
          follows.followers.map((follow) => (
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

export default Follower;
