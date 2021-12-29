import { combineReducers } from "redux";
import { signupReducer, loginReducer } from "./user";

const rootReducer = combineReducers({
  register: signupReducer,
  login: loginReducer,
});

export default rootReducer;
