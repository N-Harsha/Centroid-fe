const baseURL = "http://localhost:8090/";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const logoutURL = `${baseURL}api/auth/logout`;
const loginURL = `${baseURL}api/auth/login`;
const signupURL = `${baseURL}api/auth/user-registration`;
const refreshToken = `${baseURL}api/auth/refresh`;
const userSearch = `${baseURL}api/v1/user/search`;
const sendUserRequestURL = `${baseURL}api/v1/user-request/send`;
const acceptUserRequestURL = `${baseURL}api/v1/user-request/accept`;
const cancelUserRequestURL = `${baseURL}api/v1/user-request/cancel`;
const rejectUserRequestURL = `${baseURL}api/v1/user-request/reject`;
const sentUserRequests = `${baseURL}api/v1/user-request/sent`;
const receivedUserRequests = `${baseURL}api/v1/user-request/received`;
const fetchUserConversationsURL = `${baseURL}api/v1/conversation/all`;
const fetchConversationMessagesURL = `${baseURL}api/v1/message/fetch`;

const APIConstants = {
  defaultHeaders,
  baseURL,
  loginURL,
  signupURL,
  logoutURL,
  refreshToken,
  userSearch,
  sentUserRequests,
  receivedUserRequests,
  sendUserRequestURL,
  acceptUserRequestURL,
  cancelUserRequestURL,
  rejectUserRequestURL,
  fetchUserConversationsURL,
  fetchConversationMessagesURL
};

export default APIConstants;
