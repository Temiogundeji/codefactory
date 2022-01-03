import { courses } from "../../constants/courses";
const initialState = {
  isLoading: false,
  courses: [],
};
export const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case courses.COURSE_LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case courses.COURSE_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        courses: [...payload],
      };
    case courses.COURSE_LOADING_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
