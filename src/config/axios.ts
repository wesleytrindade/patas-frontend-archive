import axios from "axios";

export const api = axios.create();

api.defaults.baseURL = process.env.BASE_URL;