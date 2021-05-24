import React from "react";
import "./style.css";

class CardBtn extends React.Component {
  render(){
  return (
    <button 
      onClick={props.onClick} 
      className={`card-btn ${props["data-value"]}`} 
      data-value={props["data-value"]} 
    />
  );
  }
}

export default CardBtn;
