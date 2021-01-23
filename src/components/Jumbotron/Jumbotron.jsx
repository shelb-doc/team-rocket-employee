import React from "react";

function Jumbotron() {
  return (
    <>
      <div
        className="jumbotron"
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor:'#0093E9' ,
          backgroundImage: 'linear-gradient(45deg, #0093E9 0%, #80D0C7 100%)',
          fontFamily: "'Roboto', cursive",
        }}
      >
        <h1 className="display-4" style={{ fontSize: "60px" }}>
          <i className="fad fa-address-book"></i> Employee Directory
        </h1>
        <p>
          Click the Circle to sort by country or search the input by last name
        </p>
      </div>
    </>
  );
}

export default Jumbotron;
