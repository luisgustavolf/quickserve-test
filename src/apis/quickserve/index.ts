import axios from "axios";

export const QuickServeApi = axios.create({ 
  baseURL: import.meta.env.VITE_QUICK_SERVE_API_BASE_URL
})