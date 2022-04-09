import { ref } from "vue";
import axios from "axios";

const movies = ref();
const movie = ref();


const api = axios.create({
    baseURL: "https://the-one-api.dev/v2/",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
});


export const useAPI = () => {
    const getMovies = async () => {
        const response = await api.get("movie");
        movies.value = response.data.docs;
    };

    const getMovie = async (id) => {
        const response = await api.get(`movie/${id}`);
        movie.value = response.data.docs[0]
    };


    getMovies();

    return {movies, movie, getMovies, getMovie};
};


