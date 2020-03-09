export const LOGIN = "LOGIN";
export const login = (email, token) => dispatch => {
  localStorage.setItem("access_token", token);

  dispatch({
    type: LOGIN,
    payload: email
  });
};

export const AUTH = "AUTH";
export const authorize = (email, token) => dispatch => {
  const data = email + ":" + token;
  localStorage.setItem("access_token", data);

  dispatch({
    type: AUTH,
    payload: email
  });
};
export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({
    type: "LOGOUT"
  });
};
