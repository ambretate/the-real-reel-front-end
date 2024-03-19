import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import SignIn from "./Screens/Sign/SignIn.jsx";
import SignUp from "./Screens/Sign/SignUp.jsx";
import Timeline from "./Screens/Timeline/Timeline.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn handleLogin={handleLogin} />} />
      </Routes>
      <Routes>
        <Route
          path="/home"
          element={isLoggedIn ? <Timeline /> : <Navigate to="/" replace />}
        />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
