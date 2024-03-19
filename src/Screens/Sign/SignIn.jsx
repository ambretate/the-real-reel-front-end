import React from "react";
import "./SignIn.css";
import { Link } from 'react-router-dom';
import SignUp from './SignUp.jsx';

function SignIn({ handleLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  return (
    <div className="signin-container">
      <div className="logo-div">
        <img
          className="logo"
          src="https://i.imgur.com/YtDu5o3.png"
          alt="real-reel-logo"
        />
      </div>
      <div className="form-div">
        <div className="welcome">
          <h1>Welcome</h1>
          <h3>Please Sign In</h3>
        </div>
        <form className="form">
          <label for="email">E-mail Address:</label>
          <input type="email" id="email" name="email" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Sign In</button>
          <a href="/forgot-password">Forgot your password?</a>
          <br />
          <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
