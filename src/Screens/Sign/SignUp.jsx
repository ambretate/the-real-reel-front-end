import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement your sign-up logic here (e.g., API call, data validation)
    console.log('Sign Up form submitted:', { email, username, password });
    // Clear form fields (optional)
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

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
      </form>
    </div>
  );
}

export default SignUp;
