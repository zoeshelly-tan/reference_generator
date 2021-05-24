import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <a href="#" className="btn-more"><i className="icon"></i></a>
  );
}

export default SaveBtn;
