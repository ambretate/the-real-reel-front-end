import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/images/TRR-LOGO-1.png';
import './Header.css';

function Header({ isLoggedIn, handleLogin, handleLogout }) {
  const loginButtonText = isLoggedIn ? 'Sign Out' : 'Sign In'; 
  const homePath = isLoggedIn ? '/timeline' : '/';

  const handleButtonClick = () => {
    isLoggedIn ? handleLogout() : handleLogin(); 
  };

  return (
    <div id="background-Header">
      <div id="logoContainer-Header">
        <Link to={homePath}>
          <img id="logo-Header" src={logo} alt="The Real Reel logo" />
        </Link>
      </div>
      {isLoggedIn ? (
        <button id="signInButton-Header" onClick={handleButtonClick}>
          {loginButtonText}
        </button>
      ) : (
        <Link to="/">
          <button id="signInButton-Header">{loginButtonText}</button>
        </Link>
      )}
    </div>
  );
}

export default Header;