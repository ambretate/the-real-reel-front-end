import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./Screens/Sign/SignIn.jsx";
import SignUp from "./Screens/Sign/SignUp.jsx";
import Timeline from "./Screens/Timeline/Timeline.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import MainPage from "./Screens/Main/MainPage.jsx";
import Catalog from "./Screens/Catalog/Catalog.jsx";
import User from "./Screens/User/User.jsx";
import { verifyUser } from "./Services/users.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route
          path="/timeline"
          element={
            <Layout>
              <MainPage />{" "}
            </Layout>
          }
        />
        <Route
          path="/user"
          element={
            <Layout>
              <User />
            </Layout>
          }
        />
        <Route
          path="/catalog"
          element={
            <Layout>
              <Catalog />
            </Layout>
          }
        />
        <Route
          path="/user/:username"
          element={
            <Layout>
              <User />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
