import axios from "axios";

const fetchCountries = (dispatch) => {
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

export default fetchCountries;
