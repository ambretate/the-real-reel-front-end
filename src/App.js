import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./Screens/Sign/SignIn.jsx";
import SignUp from "./Screens/Sign/SignUp.jsx";
import Timeline from "./Screens/Timeline/Timeline.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import MainPage from "./Screens/Main/MainPage.jsx";
import Catalog from "./Screens/Catalog/Catalog.jsx";
import User from "./Screens/User/User.jsx";
import Movie from "./Screens/Movie/Movie.jsx";
import Review from "./Screens/Review/Review.jsx";
import { verifyUser } from "./Services/users.js";
import Following from "./Components/Follows/Following.jsx";
import Follower from "./Components/Follows/Follower.jsx";
import CreateReview from "./Screens/CreateReview/CreateReview.jsx";
import UpdateAccount from "./Screens/EditUser/EditUser.jsx";
import OtherUser from "./Screens/OtherUser/OtherUser.jsx";

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
            <Layout user={user}>
              <MainPage user={user} />
            </Layout>
          }
        />
        <Route
          path="/user"
          element={
            <Layout user={user}>
              <User user={user} />
            </Layout>
          }
        />
        
        <Route
          path="/user/:id"
          element={
            <OtherUser />
          }
        />

        <Route
          path="/catalog"
          element={
            <Layout user={user}>
              <Catalog user={user} />
            </Layout>
          }
        />

        <Route
          path="catalog/:id"
          element={
            <Layout>
              <Movie user={user} />
            </Layout>
          }
        />
        <Route
          path="movies/:id"
          element={
            <Layout>
              <Movie user={user} />
            </Layout>
          }
        />
        <Route path="users/timeline" element={<Timeline user={user} />} />
        <Route
          path="/following"
          element={
            <Layout>
              <Following />
            </Layout>
          }
        />
        <Route
          path="/follower"
          element={
            <Layout>
              <Follower />
            </Layout>
          }
        />
        <Route
          path="/updateaccount"
          element={
            <Layout>
              <UpdateAccount user={user} />
            </Layout>
          }
        />
        <Route path="user/follows" element={<User />} />
        <Route path="reviews/:id" element={<Review />} />
        <Route path="reviews/create" element={<CreateReview user={user} />} />
      </Routes>
    </>
  );
}

export default App;
