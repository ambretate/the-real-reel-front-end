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
        const response = await api.get(`/movies/${title}`);
        return response.data;
    } catch (error) {
        console.error("Error getting movie", error);
    }
};
export const getMovieByGenre = async (genre) => {
    try {
        const response = await api.get(`/movies/${genre}`);
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

export const editMovie = async (id, movieData) => {
    // try {
    //     const response
    // }
}
