/* eslint-disable import/no-anonymous-default-export */
import { GET_FOOD, SORT_FOOD } from "../actions/Types";

const initialState = {
  foodListings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOD:
      return { ...state, foodListings: action.payload };
    case SORT_FOOD:
      let tempArray = state.foodListings;
      if (action.payload === "high")
        tempArray.sort((a, b) =>
          a.restaurant_price < b.restaurant_price ? 1 : -1
        );
      else
        tempArray.sort((a, b) =>
          a.restaurant_price > b.restaurant_price ? 1 : -1
        );
      return { ...state, foodListings: tempArray };
    default:
      return state;
  }
};
