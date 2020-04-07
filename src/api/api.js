
import axios from "../global/axios";

export const initBooks = async () => {
    return await axios.get("/");
}

export const searchBooks = async (searchTerm) => {
    return await axios.get(`?q=${searchTerm}`);
}