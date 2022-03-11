import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <div style={{ textAlign: "center" }}>
      <svg class="loads" viewBox="0 0 50 50">
        <circle class="ring" cx="25" cy="25" r="20"></circle>
        <circle class="ball" cx="25" cy="5" r="3.5"></circle>
      </svg>

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loader;
