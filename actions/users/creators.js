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

export const setRegisterRequest = () => {
  return {
    type: users.REGISTER_REQUEST,
  };
};

export const setRegisterError = (payload) => {
  return {
    type: users.REGISTER_ERROR,
    error: payload,
  };
};

export const setRegisterSuccess = (payload) => {
  return {
    type: users.REGISTER_REQUEST,
    payload,
  };
};
