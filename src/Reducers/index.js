import countrylReducer from "./countryReducer";
import fieldlReducer from "./fieldReducer";
import fetchReducer from "./fetchReducer";
import errorReducer from "./errorReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  fieldlReducer,
  countrylReducer,
  fetchReducer,
  errorReducer,
});

export default allReducers;
