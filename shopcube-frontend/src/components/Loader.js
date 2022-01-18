import React from "react";
import { Spinner } from "react-bootstrap";
function Loader() {
  return (
    <div style={{ textAlign: "center" }}>
      <Spinner
        animation="border"
        role="status"
        style={{
          height: "50px",
          width: "50px",
          margin: "auto",
          display: "block",
        }}
      ></Spinner>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loader;
