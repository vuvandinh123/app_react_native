import axios from "axios";
import { AppURL } from "./AppUrl";
const axiosInstance = axios.create({
  baseURL: AppURL.BaseURL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
export default axiosInstance