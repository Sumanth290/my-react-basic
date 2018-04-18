import React from "react";

const Option = (props) => (
  <li>
    <div className="option">
      <div className="optiontext">{props.opt}</div>
      <div className="remove_link">
        <a className="removelink_anchor" onClick={()=>{props.removeOpt(props.opt);}}>remove</a>
      </div>
    </div>
  </li>
);

export default Option;
