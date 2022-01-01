import { courseEndpoints } from "../../shared/api";
import { courseRequest, courseError, courseSuccess } from ".";

export const getCourses = () => {
  return (dispatch) => {
    dispatch(courseRequest());
    fetch(courseEndpoints.courses)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const { status, courses } = json;
        if (status === "success") {
          console.log(courses);
          dispatch(courseSuccess(courses));
        }
      })
      .catch((e) => {
        alert("Error", "Some error occured, please retry");
        dispatch(courseError(e.message));
        alert(e.message);
        console.log(e.message);
      });
  };
};
