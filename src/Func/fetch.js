import axios from "axios";
import { post, postSuccess, postFail } from "../Actions/dataUpdate";

export const fetchCountries = (dispatch) => {
  return axios
    .get("https://api.first.org/data/v1/countries")
    .then((response) => {
      let countries = Object.values(response.data.data).map(
        (country) => country.country
      );
      dispatch({
        type: "ADD_COUNTRIES",
        payload: countries,
      });
      dispatch({
        type: "FETCH_SUCCESS",
      });
    })
    .catch((e) => {
      dispatch({
        type: "FETCH_FAIL",
        payload: e.message,
      });
    });
};

export const postForm = (
  { firstName, lastName, email, password, country },
  dispatch
) => {
  dispatch(post());
  return axios
    .post("http://localhost:5000/form", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      country: country,
    })
    .then((res) => {
      if (
        firstName === res.data.firstName &&
        lastName === res.data.lastName &&
        email === res.data.email &&
        password === res.data.password &&
        country === res.data.country
      ) {
        dispatch(postSuccess());
      } else {
        dispatch(postFail());
      }
    })
    .catch((error) => {
      dispatch(postFail());
    });
};
