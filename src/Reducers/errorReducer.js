import { ACTIONS } from "../Actions/actionsList";

const initalState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
};

const errorReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_ERROR:
      return {
        ...state,
        [action.payload.field]: action.payload.msg,
      };
    default:
      return state;
  }
};

export default errorReducer;
