import React from "react";

export default function LastName({
  errorMsg,
  lastName,
  dispatch,
  updateField,
}) {
  return (
    <div className="form-group">
      <label htmlFor="lastName" className={`${errorMsg ? "errorLabel" : ""}`}>
        Nazwisko
      </label>
      <input
        id="lastName"
        className={`form-control ${errorMsg ? "errorInput" : ""}`}
        type="text"
        name="lastName"
        placeholder="Podaj nazwisko"
        value={lastName}
        onChange={(e) => {
          dispatch(updateField(e.target.name, e.target.value));
        }}
      />
      {errorMsg && <p className="errorMessages">{errorMsg}</p>}
    </div>
  );
}
