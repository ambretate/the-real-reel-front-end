import api from "./apiConfig.js";
import { jwtDecode } from "jwt-decode";

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error getting all users", error);
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user", error);
  }
};

export const getUserByUsername = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user", error);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await api.get(`/users/${email}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user", error);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user", error);
  }
};

export const editUser = async (id, userData) => {
  try {
    const response = await api.put(`/countries/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user", error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user", error);
  }
};


export const signUp = async (credentials) => {
    try {
        const response = await api.post("/sign-up", credentials);
        localStorage.setItem("token", response.data.token);
        const user = jwtDecode(response.data.token);
        return user;
    } catch (error) {
        console.error("Error creating user");
    }
}