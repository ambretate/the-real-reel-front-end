import React, { useState, useEffect } from 'react';
import "./User.css"

function User({ user }) {


  return (
    user ?
    <div className='user-container'>
      <img src={user.image}/>
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>
    </div>
    :
    <div>You need to log in!</div>
  );
}

export default User;
