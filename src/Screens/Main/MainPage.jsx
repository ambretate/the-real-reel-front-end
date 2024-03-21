import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import Timeline from "../Timeline/Timeline.jsx";
import SearchBar from "../../Components/Search/Search";


function MainPage({ user }) {
  return (
    <div className="main-container">
      <div className="user-details">
        <div className="user-detail-section">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="empty img"
            className="empty-user-img"
          />
          {
            user ?
          <div className="user-detail-section2">
            <h2>Hello, {user.username}</h2>
            <Link to="/user">Go to Profile</Link>
          </div>
          :
          <div>You need to log in!</div>
          }
        </div>
        <SearchBar />
        <p>
          <Link to="/catalog" className="browse-catalog">Browse Catalog</Link>
        </p>
        {/* <p>VIEW YOUR LISTS</p> */}
      </div>
      <div className="timeline-container">
        <Timeline />
      </div>
    </div>
  );
}

export default MainPage;
