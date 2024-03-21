import api from "./apiConfig.js";
import { jwtDecode } from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/users/sign-up", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/users/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  try {
    const resp = await api.get("/users/verify");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getFollows = async () => {
  try {
    const resp = await api.get("/users/follows");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getUserTimeline = async () => {
  try {
    const resp = await api.get("/users/timeline");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const updateFollowings = async (followedUserId) => {
  try {
    const resp = await api.put(`/users/follow/${followedUserId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const resp = await api.get("/users");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const resp = await api.get(`/users/email/${email}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getUserByUsername = async (username) => {
  try {
    const resp = await api.get(`/username/${username}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const resp = await api.get(`/users/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, updatedUserData) => {
  try {
    const resp = await api.put(`/users/${id}`, updatedUserData);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const resp = await api.delete(`/users/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
