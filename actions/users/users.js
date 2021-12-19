import { userEndpoints } from "../../shared/api";
import { setRequest, setError, setSuccess } from "./creators";
import { storeUserData } from "../../shared/utils";

export const login = (loginInput, callback = () => {}) => {
  const { email, password } = loginInput;
  return (dispatch) => {
    dispatch(setRequest());
    return fetch(userEndpoints.login, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const { status, data, token, message } = json;
        if (status === "success") {
          let user = { data, token };
          storeUserData("user", user);
          dispatch(setSuccess(data));
          callback();
        } else {
          Alert.alert("Login Failed", message);
        }
      })
      .catch((err) => {
        Alert.alert("Login Failed", "Some error occured, please retry");
        dispatch(setError(err));
        console.log(err);
      });
  };
};

export const signup = (signupInput, callback = () => {}) => {
  return (dispatch) => {
    dispatch(setRequest());
    return fetch(userEndpoints.signup, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupInput),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const { status, data, token, message } = json;
        if (status === "success") {
          let user = { data, token };
          storeUserData("user", user);
          dispatch(setLoginSuccess(data));
          Alert.alert("Registeration successful", message);
          callback();
        }
      })
      .catch((err) => {
        Alert.alert("Error", "Some error occured, please retry");
        dispatch(setLoginError(err));
        console.log(err);
      });
  };
};
