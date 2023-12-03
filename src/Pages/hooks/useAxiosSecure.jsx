import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Login/Providers/Authprovider";

export const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    // console.log('request stopped by interceptor', token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error)
  })

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    // console.log('status error in the interceptor', status);
    // unauthorized detection and logout immediately
    if (status === 401 || status === 403) {
      await (logOut);
      navigate('/login');
    }
    return Promise.reject(error);
  })
  return axiosSecure
};

export default useAxiosSecure;