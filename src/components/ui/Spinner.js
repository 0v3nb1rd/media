import React from "react";
import spiner from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spiner}
      style={{ width: "300px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default Spinner;
