import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { signIn } from "../../Services/users.js"; // Using 'signIn' function for authentication
import { useNavigate } from "react-router-dom";

function SignIn({ setUser, setUpdateUser }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  let navigate = useNavigate();

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    let retrievedUser = await signIn(form);
    setUser(retrievedUser);
    setUpdateUser((prev) => (!prev));
    navigate("/timeline");
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
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail Address:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />

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
