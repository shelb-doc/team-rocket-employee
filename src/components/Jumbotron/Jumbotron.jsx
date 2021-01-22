import React from "react";

function Jumbotron() {
  return (
    <>
      <div
        className="jumbotron"
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#000080",
          color: "#e6e6ff",
          fontFamily: "'Patrick Hand', cursive",
        }}
      >
        <h1 className="display-4" style={{ fontSize: "60px" }}>
          <i className="fad fa-address-book"></i> Employee Directory
        </h1>
        <p>
          Click the caret to sort by country or search the input by last name
        </p>
      </div>
    </>
  );
}

export default Jumbotron;
