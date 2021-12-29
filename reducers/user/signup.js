const initialState = { isRegistered: false, userToken: "" };
import { users } from "../../constants";
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
    case users.REGISTER_ERROR:
      return {
        ...state,
        isRegistered: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
