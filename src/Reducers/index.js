import { combineReducers } from "redux";
import countrylReducer from "./countryReducer";
import fetchReducer from "./fetchReducer";

const allReducers = combineReducers({ countrylReducer, fetchReducer });

export default allReducers;
