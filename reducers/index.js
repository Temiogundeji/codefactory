import { combineReducers } from "redux";
import { signupReducer, loginReducer } from "./user";
import { courseReducer } from "./course/courses";

const rootReducer = combineReducers({
  register: signupReducer,
  login: loginReducer,
  courses: courseReducer
});

export default rootReducer;
