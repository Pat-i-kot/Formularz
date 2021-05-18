import { ACTIONS } from "./actionsList";

export const updateField = (field, value) => {
  return {
    type: ACTIONS.UPDATE_FIELD,
    payload: { field, value },
  };
};

export const updateError = (field, msg) => {
  return {
    type: ACTIONS.UPDATE_ERROR,
    payload: { field, msg },
  };
};

export const post = () => {
  return {
    type: ACTIONS.POST_DATA,
  };
};

export const postSuccess = () => {
  return {
    type: ACTIONS.POST_DATA_SUCCESS,
  };
};

export const postFail = () => {
  return {
    type: ACTIONS.POST_DATA_FAIL,
  };
};
