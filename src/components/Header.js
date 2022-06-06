import React from "react";
import "../App.css";

const AppHeader = (props) => {
    return(
  <div className="Top">
    <h1>{props.heading}</h1>
  </div>
    );
};

export default AppHeader;
