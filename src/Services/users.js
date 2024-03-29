import api from "./apiConfig.js";
import { jwtDecode } from "jwt-decode";

export const signUp = async (credentials) => {
  console.log('Credentials:', credentials);
  try {
    const resp = await api.post("/users/sign-up", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    console.error("Error signing up: ", error);
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/users/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    console.error("Error signing in: ", error);
  }
};

export const verifyUser = async () => {
  try {
    const resp = await api.get("/users/verify");
    return resp.data;
  } catch (error) {
    console.error("Error verifying user: ", error);
  }
};

export const getFollows = async () => {
  try {
    const resp = await api.get("/users/follows");
    return resp.data;
  } catch (error) {
    console.error("Error getting follows: ", error);
  }
};

export const getUserTimeline = async () => {
  try {
    const resp = await api.get("/users/timeline");
    return resp.data;
  } catch (error) {
    console.error("Error getting timeline: ", error);
  }
};

export const updateFollowings = async (followedUserId) => {
  try {
    const resp = await api.put(`/users/follow/${followedUserId}`);
    localStorage.getItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    console.error("Error updating followings: ", error);
  }
};

export const getUsers = async () => {
  try {
    const resp = await api.get("/users");
    return resp.data;
  } catch (error) {
    console.error("Error getting users: ", error);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const resp = await api.get(`/users/email/${email}`);
    return resp.data;
  } catch (error) {
    console.error("Error getting user by email: ", error);
  }
};

export const getUserByUsername = async (username) => {
  try {
    const resp = await api.get(`/users/username/${username}`);
    return resp.data;
  } catch (error) {
    console.error("Error getting user by username: ", error);
  }
};

export const getUser = async (userId) => {
  try {
    const resp = await api.get(`/users/${userId}`);
    return resp.data;
  } catch (error) {
    console.error("Error getting user: ", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};

export const updateUser = async (id, updatedUserData) => {
  try {
    const resp = await api.put(`/users/${id}`, updatedUserData);
    return resp.data;
  } catch (error) {
    console.error("Error updating user: ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    const resp = await api.delete(`/users/${id}`);
    return resp.data;
  } catch (error) {
    console.error("Error deleting user: ", error);
  } 
};
