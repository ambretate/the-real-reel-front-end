import React, { useState, useEffect } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import Timeline from "../Timeline/Timeline.jsx";
import SearchBar from "../../Components/Search/Search";
import { getUser } from "../../Services/users.js";


function MainPage({ user }) {
  
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const item = await getUser(user.userID);
        setUserInfo(item);
      } catch (error) {
        console.error("Error getting user:", error);
      }
    }
  })

  fetchUser(user);

  return (
    <div className="main-container">
      <div className="user-details">
        <div className="user-detail-section">
            <img
              src={userInfo.profilePicture}
              alt="Profile"
              className="user-img"
            />
          {user ? (
            <div className="user-detail-section2">
              <h2>Hello, {user.username}</h2>
              <Link to="/user">Go to Profile</Link>
            </div>
          ) : (
            <div>You need to log in!</div>
          )}
        </div>
        <p className="browse-catalog">
          <Link to="/catalog">Browse Catalog</Link>
        </p>
        <SearchBar />
      </div>
      <div className="timeline-container">
        <Timeline />
      </div>
    </div>
  );
}

export default MainPage;