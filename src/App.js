import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./Screens/Sign/SignIn.jsx";
import SignUp from "./Screens/Sign/SignUp.jsx";
import Timeline from "./Screens/Timeline/Timeline.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import "./App.css";
import MainPage from "./Screens/Main/MainPage";

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
      </Routes>

      {/* Components that need the layout overlay */}
      
      <Routes>
        <Route
          path="/home"
          element={isLoggedIn ? <Timeline /> : <Navigate to="/" replace />}
        />
        <Route path="/main" element={<Layout><MainPage /></Layout>} />
      </Routes>
      
    </>
  );
}

export default App;
