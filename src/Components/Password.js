import React from "react";

export default function Password({
  errorMsg,
  password,
  dispatch,
  updateField,
}) {
  return (
    <div className="form-group">
      <label htmlFor="password" className={`${errorMsg ? "errorLabel" : ""}`}>
        Hasło
      </label>
      <input
        id="password"
        className={`form-control ${errorMsg ? "errorInput" : ""}`}
        type="password"
        name="password"
        placeholder="Podaj hasło"
        value={password}
        onChange={(e) => {
          dispatch(updateField(e.target.name, e.target.value));
        }}
      />
      {errorMsg && <p className="errorMessages">{errorMsg}</p>}
    </div>
  );
}
