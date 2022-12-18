const baseURL = "http://192.168.0.145:8090/";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const logoutURL = `${baseURL}api/auth/logout`;
const loginURL = `${baseURL}api/auth/login`;
const signupURL = `${baseURL}api/auth/user-registration`;
const refreshToken = `${baseURL}api/auth/refresh`;
const userSearch = `${baseURL}api/v1/user/search`;
const sentUserRequests = `${baseURL}api/v1/user-request/sent`;
const receivedUserRequests = `${baseURL}api/v1/user-request/received`;

const APIConstants = {
  defaultHeaders,
  baseURL,
  loginURL,
  signupURL,
  logoutURL,
  refreshToken,
  userSearch,
  sentUserRequests,
  receivedUserRequests
};

export default APIConstants;
