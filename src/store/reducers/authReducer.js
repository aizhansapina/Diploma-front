import { AUTH, LOGIN } from "../actions/authActions";
const token = localStorage.getItem("access_token");
const username = token ? token.split(":")[0] : "";

const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload
      };
    case AUTH:
      return {
        ...state,
        email: action.payload
      };

    default:
      return state;
  }
}
