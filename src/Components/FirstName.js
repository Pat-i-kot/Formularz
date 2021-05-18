import React from "react";

export default function FirstName({
  errorMsg,
  firstName,
  dispatch,
  updateField,
}) {
  return (
    <div className="form-group">
      <label htmlFor="firstName" className={`${errorMsg ? "errorLabel" : ""}`}>
        Imię
      </label>
      <input
        id="firstName"
        className={`form-control ${errorMsg ? "errorInput" : ""}`}
        type="text"
        name="firstName"
        placeholder="Podaj imię"
        value={firstName}
        onChange={(e) => {
          dispatch(updateField(e.target.name, e.target.value));
        }}
      />
      {errorMsg && <p className="errorMessages">{errorMsg}</p>}
    </div>
  );
}
