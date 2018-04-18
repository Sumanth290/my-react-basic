import React from "react";

const Action = (props) => (
  <div className="big_button_div">
    <button className="big_button" disabled={!props.hasOptions} onClick={props.handlePick}>What Should I do?</button>
  </div>
);

export default Action;
