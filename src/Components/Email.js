import React from "react";

export default function Email({ errorMsg, email, dispatch, updateField }) {
  return (
    <div className="form-group">
      <label htmlFor="email" className={`${errorMsg ? "errorLabel" : ""}`}>
        Email
      </label>
      <input
        id="email"
        className={`form-control ${errorMsg ? "errorInput" : ""}`}
        type="email"
        name="email"
        placeholder="Podaj email"
        value={email}
        onChange={(e) => {
          dispatch(updateField(e.target.name, e.target.value));
        }}
      />
      {errorMsg && <p className="errorMessages">{errorMsg}</p>}
    </div>
  );
}
