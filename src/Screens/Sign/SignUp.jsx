
import React, { useState } from "react";
import "./SignUp.css";
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log("Sign Up form submitted:", { email, username, password });
    // Clear form fields (optional)
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="signup-container">
      <div className="logo-div">
        <img
          className="logo"
          src="https://i.imgur.com/YtDu5o3.png"
          alt="real-reel-logo"
        />
      </div>
      <div className="form-container">
      <div className="welcome">
          <h1>Welcome</h1>
          <h3>Join Real Reel</h3>
        </div>
      <form onSubmit={handleSignUp} className="signup-form">

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />

        <button type="submit">Sign Up</button>

        <p>Already have an account? <Link to="/">Sign In</Link></p>
      </form>
      </div>

    </div>
  );
}

export default SignUp;
