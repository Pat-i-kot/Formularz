import { ACTIONS } from "../Actions/actionsList";

const fetchReducer = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA:
      return { ...state, isLoading: true, error: "" };
    case ACTIONS.FETCH_SUCCESS:
      return { ...state, isLoading: false };
    case ACTIONS.FETCH_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
