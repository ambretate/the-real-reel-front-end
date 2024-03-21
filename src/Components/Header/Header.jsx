import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/TRR-LOGO-1.png";
import "./Header.css";

function Header({ isLoggedIn, handleLogin, handleLogout, user }) {
  const loginButtonText = user !== null ? "Sign Out" : "Sign In";
  const homePath = user !== null ? "/timeline" : "/";
  const handleButtonClick = () => {
    user ? handleLogout() : handleLogin();
  };

  return (
    <div id="background-Header">
      <div id="logoContainer-Header">
        <Link to={homePath}>
          <img id="logo-Header" src={logo} alt="The Real Reel logo" />
        </Link>
      </div>
      <div className="links-in-header">
        {user ? (
          <button id="signInButton-Header" onClick={handleButtonClick}>
            {loginButtonText}
          </button>
        ) : (
          <Link to="/">
            <button id="signInButton-Header">{loginButtonText}</button>
          </Link>
        )}
        <Link to={homePath} className="link-to-home">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Header;
