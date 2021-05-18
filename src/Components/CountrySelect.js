import React from "react";
import { useSelector } from "react-redux";

export default function CountrySelect({
  errorMsg,
  country,
  dispatch,
  updateField,
}) {
  const countries = useSelector((state) => state.countrylReducer);
  const firstOption = (
    <option key="nullValue" value="" disabled hidden>
      Wybierz kraj
    </option>
  );
  let options = countries.sort().map((country) => {
    return (
      <option key={country} value={country}>
        {country}
      </option>
    );
  });

  options = [firstOption, ...options];
  return (
    <div className="form-group">
      <label htmlFor="country" className={`${errorMsg ? "errorLabel" : ""}`}>
        Kraj
      </label>

      <select
        id="country"
        className={`form-control custom-select ${errorMsg ? "errorInput" : ""}`}
        name="country"
        value={country}
        onChange={(e) => {
          dispatch(updateField(e.target.name, e.target.value));
        }}
      >
        {options}
      </select>
      {errorMsg && <p className="errorMessages">{errorMsg}</p>}
    </div>
  );
}
