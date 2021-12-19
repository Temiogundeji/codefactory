import { users } from "../../constants";
import { getUserData } from "../../shared/utils";
const initialState =
  getUserData("user") !== null || {}
    ? { isLoggedIn: true, user: getUserData("user") }
    : { isLoading: false, isLoggedIn: false, token: "", data: "" };

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case users.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case users.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      };
    case users.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export const signupReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case users.REGISTER_REQUEST:
      return {
        isLoading: true,
      };
    case users.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegistered: true,
      };
    case users.REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
