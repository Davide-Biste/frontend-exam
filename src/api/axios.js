import axios from "axios";

export const instance = axios.create({
    baseURL: "https://zenithar-dev.herokuapp.com",
    timeout: 1000,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
});
