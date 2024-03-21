import { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Services/users.js";

const SignUp = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/timeline");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  const { username, email, password, passwordConfirmation } = form;

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
        <form onSubmit={onSignUp} className="signup-form">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={handleChange}
            required
          />
          {renderError()}
          <br />
          <p>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
