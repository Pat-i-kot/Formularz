import { ACTIONS } from "../Actions/actionsList";

const fetchReducer = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA:
      return { ...state, isLoading: true, error: "" };
    case ACTIONS.FETCH_SUCCESS:
      return { ...state, isLoading: false, fetchSuccess: true };
    case ACTIONS.FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        fetchFail: true,
      };
    case ACTIONS.POST_DATA:
      return { ...state, isPosting: true, postSuccess: false, postFail: false };
    case ACTIONS.POST_DATA_SUCCESS:
      return { ...state, isPosting: false, postSuccess: true };
    case ACTIONS.POST_DATA_FAIL:
      return { ...state, isPosting: false, postFail: true };
    default:
      return state;
  }
};

export default fetchReducer;
