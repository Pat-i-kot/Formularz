import React from "react";

export default function AlertInfo({ body, effect }) {
  return (
    <div
      className={`alert align-middle ${
        effect === "Success" ? "alert-success" : "alert-warning"
      } `}
      role="alert"
    >
      {effect === "Waiting" ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        ""
      )}
      <span className="ml-2 ">{body}</span>
    </div>
  );
}
