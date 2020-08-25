import React from "react";
import loader from "../images/loader.svg";

function Loader() {
  return (
    <div>
      <img src={loader} alt="Loading..." className="mx-auto mt-32" />
    </div>
  );
}

export default Loader;
