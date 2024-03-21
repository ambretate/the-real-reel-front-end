import React, { useEffect, useState } from 'react';
import { getUserTimeline } from '../../Services/users.js'; 

const YourComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchTimeline = async () => {
      const user = await getUserTimeline();
      setUser(user.data[0]);
    };

    fetchTimeline();
  }, []);
  console.log(user)
  return (
    <div>
      <h1>User Timeline</h1>
      {user !== null ?
      <p>{user.review}</p> :
      <p>Loading...</p>}
    </div>
  );
};

export default YourComponent;
