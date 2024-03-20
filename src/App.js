import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./Screens/Sign/SignIn.jsx";
import SignUp from "./Screens/Sign/SignUp.jsx";
import Timeline from "./Screens/Timeline/Timeline.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import MainPage from "./Screens/Main/MainPage.jsx";
import Catalog from "./Screens/Catalog/Catalog.jsx";
import User from "./Screens/User/User.jsx" 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Add a logout function to update state
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn handleLogin={handleLogin} />} />
        <Route path="/sign-up" element={<SignUp />} /> 
        {/* Components that need the layout overlay */}
        <Route
          path="/home"
          element={isLoggedIn ? <Timeline /> : <Navigate to="/" replace />}
        />
        <Route path="/main" element={<Layout><MainPage /></Layout>} />
        <Route path="/user" element={<Layout><User /></Layout>} />
        <Route path="/catalog" element={<Layout><Catalog /></Layout>} />

        </Routes>
    </>
  );
}

export default App;
