import { courseEndpoints } from "../../shared/api";
import { courseRequest, courseError, courseSuccess } from ".";

export const getCourses = () => {
  return (dispatch) => {
    dispatch(courseRequest());
    return fetch(courseEndpoints.courses)
      .then((response) => response.json())
      .then((data) => {
        const { status, courses } = data;
        if (status === "success") {
          dispatch(courseSuccess(courses));
        }
      })
      .catch((err) => {
        alert("Error", "Some error occured, please retry");
        dispatch(courseError(err.message));
      });
  };
};