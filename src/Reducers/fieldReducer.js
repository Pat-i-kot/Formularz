import { ACTIONS } from "../Actions/actionsList";

const initalState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
};

const fieldlReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};

export default fieldlReducer;
