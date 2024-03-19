import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="main-container">
      <div className="user-details">
        <div className="user-detail-section">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="empty img"
            className="empty-user-img"
          />
          <div className="user-detail-section2">
            <h2>USERNAME</h2>
            <Link to="/user">See Profile</Link>
          </div>
        </div>
        <input htmlFor="search" type="text" placeholder="SEARCH" />
        <button id="search">Go</button>
        <p>BROWSE CATALOG</p>
        <p>VIEW YOUR LISTS</p>
      </div>
      <div className="timeline-container">
        <p>hello</p>
      </div>
    </div>
  );
}

export default MainPage;
