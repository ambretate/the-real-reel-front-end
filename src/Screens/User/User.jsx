import React, { useState, useEffect } from 'react';
import { getUserByUsername } from '../../Services/users.js'; // Import the service function

function User() {
  const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Fetch user data using the service function
        const user = await getUserByUsername({userData}); // Replace 'example_username' with the actual username
        setUserData(user); // Set the fetched user data
        setLoading(false); // Update loading state to false
      } catch (error) {
        setError(error.message); // Set error message
        setLoading(false); // Update loading state to false
      }
    };

    fetchUserData(); // Call the fetchUserData function
  }, []); // Empty dependency array ensures useEffect runs only once

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching data fails
  }

  return (
    <div>
      {userData && ( // Check if userData is not null before accessing its properties
        <div>
          <h2>User Details</h2>
          <p>Username: {userData.username}</p> {/* Display username */}
          <p>Email: {userData.email}</p> {/* Display email */}
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
}

export default User;
