import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { createUser } from "../../Services/users.js"

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      console.error("Signup failed:", response.statusText);
      return;
    }

    const data = await response.json();
    console.log("Signup successful:", data);
  };
  
  const handleSignUp = async (event) => {
    event.preventDefault();

    if ( password !== confirmPassword) {
      console.log("passwords don't match")
    } else {
      createUser({
        username: username,
        email: email,

         // password needs to be transformed into password digest either here or in the createuser function 
        password: password
      })
    console.log("Sign up form submitted!");
    }
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

          <p>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
