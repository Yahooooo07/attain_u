import { GET_FOOD, SORT_FOOD } from "./Types";
import axios from "axios";
import { url } from "../config";

export const getFood = () => (dispatch) => {
  console.log(url + "food/all/");
  return axios
    .get(url + "food/all/")
    .then((res) => {
      console.log("Food Response", res);
      dispatch({
        type: GET_FOOD,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sortFood = (val) => (dispatch) => {
  dispatch({
    type: SORT_FOOD,
    payload: val,
  });
};
