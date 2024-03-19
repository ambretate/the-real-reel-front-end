import React from 'react'
import "./MainPage.css"

function MainPage() {
  return (
    <div className='main-container'>
      <div className='user-details'>
        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt="empty img"  className='empty-user-img'/>
        <p>USERNAME</p>
        <p>SEE PROFILE</p>
        <input for="search"type='text' placeholder='SEARCH'/>
        <button id='search'>Go</button>
        <p>BROWSE CATALOG</p>
        <p>VIEW YOUR LISTS</p>
      </div>
      <div className='timeline-container'>
        <p>hello</p>
      </div>
    </div>
  )
}

export default MainPage