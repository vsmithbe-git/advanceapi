import { ref } from "vue";
import axios from "axios";

const movies = ref();
const movie = ref();
const quotes = ref();

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
        movie.value = response.data.docs[0];
    };

    const getQuotes = async (id) => {
        const response = await api.get(`movie/${id}/quote`);
        quotes.value = response.data.docs;
    };


    getMovies();

    return {movies, movie, quotes, getMovies, getMovie, getQuotes};
};


