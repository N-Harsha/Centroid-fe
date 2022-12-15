const baseURL = "http://localhost:8090/";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const logoutURL = `${baseURL}api/auth/logout`;
const loginURL = `${baseURL}api/auth/login`;
const signupURL = `${baseURL}api/auth/user-registration`;
const refreshToken = `${baseURL}api/auth/refresh`;
const userSearch =  `${baseURL}api/v1/user/search`;

const APIConstants = {
  defaultHeaders,
  baseURL,
  loginURL,
  signupURL,
  logoutURL,
  refreshToken,
  userSearch
};

export default APIConstants;
