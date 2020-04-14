import { combineReducers } from "redux";
import authReducer from "./authReducer";

const appReducer = combineReducers({
  user: authReducer
});

export default appReducer;
