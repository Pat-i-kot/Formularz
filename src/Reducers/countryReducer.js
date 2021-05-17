import { ACTIONS } from "../Actions/actionsList";

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_COUNTRIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default countryReducer;
