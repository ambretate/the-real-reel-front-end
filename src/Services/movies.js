import api from "./apiConfig.js";

export const getMovies = async () => {
  try {
    const response = await api.get("/movies");
    return response.data;
  } catch (error) {
    console.error("Error getting all movies", error);
  }
};

export const getMovie = async (id) => {
  try {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting movie", error);
  }
};

export const getMovieByTitle = async (title) => {
  try {
    const response = await api.get(`/movies/title/${title}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error getting movie", error);
  }
};
export const getMovieByGenre = async (genre) => {
  try {
    const response = await api.get(`/movies/genre/${genre}`);
    return response.data;
  } catch (error) {
    console.error("Error getting movie", error);
  }
};

export const createMovie = async (movieData) => {
  try {
    const response = await api.post("/movies", movieData);
    return response.data;
  } catch (error) {
    console.error("Error creating movie", error);
  }
};

export const updateMovie = async (id, movieData) => {
  try {
    const response = await api.put(`/movies/${id}`, movieData);
    return response.data;
  } catch (error) {
    console.error("Error updating movie", error);
  }
};

export const deleteMovies = async (id) => {
  try {
    const resp = await api.delete(`/movies/${id}`);
    return resp.data;
  } catch (error) {
    console.error("Error deleting movie", error);
  }
};
