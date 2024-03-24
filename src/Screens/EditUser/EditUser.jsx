import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../Services/users.js";
import "./EditUser.css";

function UpdateAccount({ user }) {
  const [userName, setUserName] = useState({
    username: "",
  });

  let navigate = useNavigate();

  const handleUserName = async (event) => {
    event.preventDefault();

    await updateUser(user.id, userName);
    navigate("/timeline");
  };

  const handleChangeUserName = (event) =>
    setUserName({
      ...userName,
      [event.target.name]: event.target.value,
    });

  const [password, setPassword] = useState({
    password: "",
    passwordConfirmation: "",
  });

  const handlePassword = async (event) => {
    event.preventDefault();

    if (password.password === password.passwordConfirmation) {
      await updateUser(user.id, password.password);
      navigate("/timeline");
    } else {
      alert("Passwords do not match.");
    }
  };

  const handleChangePassword = (event) =>
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });

  return (
    <div className="updateaccount-container">
      <div className="form-container">
        <div className="update">
          <h1>Update Account</h1>
        </div>
        <form onSubmit={handleUserName} className="update-form">
          <label htmlFor="username">New Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName.username}
            onChange={handleChangeUserName}
          />
          <button type="submit">Update Username</button>
          <br />
        </form>
        <form onSubmit={handlePassword} className="update-form">
          <label htmlFor="password">New Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password.password}
            onChange={handleChangePassword}
          />
          <br />
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="text"
            id="confirmPassword"
            name="passwordConfirmation"
            value={password.passwordConfirmation}
            onChange={handleChangePassword}
          />
          <button type="submit">Update Password</button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default UpdateAccount;
