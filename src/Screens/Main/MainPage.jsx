import {useState, useEffect} from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import Timeline from "../Timeline/Timeline.jsx";
import SearchBar from "../../Components/Search/Search";


function MainPage({ user }) {
  const [userObj, setUserObj] = useState({});

  useEffect( () => {
    setUserObj(user);
  }, [user]);

  console.log('this is the user', userObj);
  
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
            (userObj) ?
              <div className="user-detail-section2">
                <h2>Hello, {userObj.username}</h2>
                <Link to="/user">Go to Profile</Link>
              </div>
            : 
              <div>You need to log in!</div>
          }
        </div>
        <p className="browse-catalog">
          <Link to="/catalog">Browse Catalog</Link>
        </p>
        <SearchBar />
        {/* <p>VIEW YOUR LISTS</p> */}
      </div>
      <div className="timeline-container">
        <Timeline />
      </div>
    </div>
  );
}

export default MainPage;
