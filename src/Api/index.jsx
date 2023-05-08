import axios from "axios";

export const API = axios.create({
    baseURL:"https://645863f14eb3f674df736723.mockapi.io/api/v1/",
    headers:{"Content-Type":"application/json"}
})