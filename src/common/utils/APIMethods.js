import APIConstants from "../common/constants/APIConstants";

const generateHeaders = (authConfig, requestHeaders, isFormData) => {
  const headers = new Headers();
  if (authConfig) {
    headers.append("session", authConfig.sessionId);
    headers.append("Authorization", `Bearer ${authConfig.accessToken}`);
  }
  if (!isFormData) {
    headers.append("Content-Type", "application/json");
  }
  Object.keys(headers).forEach((key) =>
    headers.append(key, requestHeaders[key])
  );
  return headers;
};

const fetchRefreshToken = async ({
  response: oldRes,
  requestObject,
  sessionId
}) => {
  const headers = new Headers();
  headers.append("session", sessionId);
  return fetch(APIConstants.refreshToken, {
    method: "PUT",
    headers
  })
    .then(async (refreshTokenResponse) => {
      if (refreshTokenResponse.status === 200) {
        const requestURL = oldRes.url;
        const responseData = await refreshTokenResponse.json();
        global.authDispatch({
          type: "onRefresh",
          payload: responseData
        });

        requestObject.headers.set(
          "Authorization",
          `Bearer ${responseData.accessToken}`
        );

        return fetch(requestURL, requestObject).then((response) => response);
      }
      return refreshTokenResponse;
    })
    .then((response) => {
      if (response.status === 401) {
        window.sessionStorage.clear();
        window.location.reload();
      }
      return response;
    });
};

const checkAuthentication = ({
  response,
  requestObject,
  sessionId = "",
  checkAuth
}) => {
  if (checkAuth && response.status === 401) {
    return fetchRefreshToken({ response, requestObject, sessionId });
  }
  return response;
};

const errorResponses = [400, 401, 403, 404, 500, 415];

async function checkError(response) {
  if (errorResponses.includes(response.status)) {
    throw await response.json();
  }
  return response;
}

export const api = async (
  {
    url = "",
    method = "GET",
    requestHeaders = {},
    params,
    body = null,
    isFormData = false,
    checkAuth = true
  },
  authConfig
) => {
  const headers = generateHeaders(authConfig, requestHeaders, isFormData);
  const paramString = new URLSearchParams(params).toString();
  const requestURL = params ? `${url}?${paramString}` : url;
  let requestObject = { headers, method };
  if (body) {
    requestObject = {
      ...requestObject,
      body: isFormData ? body : JSON.stringify(body)
    };
  }

  return fetch(requestURL, requestObject)
    .then((response) =>
      checkAuthentication({
        response,
        requestObject,
        sessionId: authConfig?.sessionId,
        checkAuth
      })
    )
    .then(checkError)
    .then((response) => response.json());
};

export const signupAction = async (formData) => {
  const { signupURL } = APIConstants;
  return fetch(signupURL, {
    method: "POST",
    body: formData
  })
    .then(checkError)
    .then((res) => res.json());
};
