import { users } from "../../constants/users";

export const setRequest = () => {
  return {
    type: users.LOGIN_REQUEST,
  };
};

export const setError = (payload) => {
  return {
    type: users.LOGIN_ERROR,
    error: payload,
  };
};

export const setSuccess = (payload) => {
  return {
    type: users.LOGIN_REQUEST,
    payload,
  };
};
