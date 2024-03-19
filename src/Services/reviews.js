import api from "./apiConfig.js";

export const getReviews = async () => {
  try {
    const response = await api.get("/reviews");
    return response.data;
  } catch (error) {
    console.error("Error Getting all Reviews: ", error);
  }
};

export const getReview = async (id) => {
  try {
    const response = await api.get(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Getting all Review: ", error);
  }
};

export const createReview = async (reviewData) => {
  try {
    const response = await api.post("/reviews", reviewData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const editReview = async (id, reviewData) => {
  try {
    const response = await api.put(`/teamreviews/${id}`, reviewData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};