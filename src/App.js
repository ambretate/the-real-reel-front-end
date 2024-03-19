import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./Screens/Sign/SignIn.jsx";
import SignUp from "./Screens/Sign/SignUp.jsx";
import Timeline from "./Screens/Timeline/Timeline.jsx";
import MainPage from "./Screens/Main/MainPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Add a logout function to update state
  };

  return (
      <Routes>
        <Route
          path="/"
          element={<SignIn handleLogin={handleLogin} />}
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Timeline handleLogout={handleLogout} /> // Pass logout function to Timeline
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timeline" element={isLoggedIn ? <Timeline /> : <Navigate to="/" replace />} />
        <Route path="/main" element={<MainPage />} /> 
      </Routes>
  );
}

export default App;
