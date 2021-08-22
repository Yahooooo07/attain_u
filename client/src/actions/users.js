import axios from "axios";
import { url } from "../config";

export const userLogin = (userData, actions, history) => () => {
  console.log(url + "users/login/");
  return axios
    .post(url + "users/login/", userData)
    .then((res) => {
      console.log(res);
      if (res.data.loggedIn === "success") {
        localStorage.setItem("attainUToken", res.data.accessToken);
        history.push("/");
      } else {
        alert(res.data.message);
      }
      actions.setSubmitting(false);
    })
    .catch((err) => {
      alert(err);
    });
};

export const userSignup = (userData, actions, history) => () => {
  return axios
    .post(url + "users/signup/", userData)
    .then((res) => {
      console.log(res);
      if (res.data.data) {
        localStorage.setItem("attainUToken", res.data.accessToken);
        history.push("/login");
      } else {
        alert(res.data.message);
      }
      actions.setSubmitting(false);
    })
    .catch((err) => {
      alert(err);
    });
};
