import { courses } from "../../constants/courses";

export const courseRequest = () => {
  return {
    type: courses.COURSE_LOADING_REQUEST,
  };
};

export const courseSuccess = (payload) => {
  return {
    type: courses.COURSE_LOADING_SUCCESS,
    payload,
  };
};

export const courseError = (error) => {
  return {
    type: courses.COURSE_LOADING_ERROR,
    payload: error,
  };
};
