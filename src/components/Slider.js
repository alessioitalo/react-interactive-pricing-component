import React from "react";
import "./Slider.module.css";

function Slider(props) {
  const inputHandler = (event) => {
    props.onPriceChange(event.target.value);
  };

  return (
    <form onChange={inputHandler}>
      <input
        min="1"
        max="5"
        type="range"
        style={{ backgroundImage: `${props.color}` }}
        defaultValue={props.value}
      ></input>
    </form>
  );
}

export default Slider;
