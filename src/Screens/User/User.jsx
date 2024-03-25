import React, { useState, useEffect } from "react";
import "./User.css";
import { getFollows, getUser } from "../../Services/users.js";
import Following from "../../Components/Follows/Following.jsx";
import { Link } from "react-router-dom";
import Follower from "../../Components/Follows/Follower.jsx";
import UpdateAccount from "../EditUser/EditUser";

function User({ user }) {
  const [follows, setFollows] = useState(null);
  const [userProfile, setUserProfile] = useState({});

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

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (user) {
          const userInfo = await getUser(user.id);
          setUserProfile(userInfo);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserInfo();
  }, [user]);

  return user ? (
    <div className="user-container">
      <div>
        <img src={userProfile.profilePicture} alt="User" className="profile-picture" />
      </div>
      <div className="user-information">
        <h1>{userProfile.username}</h1>
        <p>{user.email}</p>
        <p>{user.review}</p>
        <Link to="/following" component={Following}>
          See Following
        </Link>
        <Link to="/follower" component={Follower}>
          See Followers
        </Link>
        <Link to="/updateaccount" component={<UpdateAccount />}>
          Edit Profile
        </Link>
      </div>
    </div>
  ) : (
    <div>You need to log in!</div>
  );
}

export default User;
