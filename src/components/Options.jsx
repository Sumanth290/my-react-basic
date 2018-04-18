import React from "react";
import Option from "./Option.jsx"

const Options = (props) => (
  <div>
    {( props.opts && ( props.opts.length > 0 ) ) ? <p className="options_header options_para">Here are your Options :</p> : (
      <p className="options_header option_start">Please add an option to start :</p>
    )}
    <button disabled={!props.hasOptions} onClick={props.removeOpts}>Remove all</button>
    {( props.opts && ( props.opts.length > 0 ) ) && (
      <div className="options">
        <ul>
          {props.opts.map( (opt,ind) => <Option removeOpt={props.removeOpt} opt={opt} key={ind}/> ) }
        </ul>
      </div>
    )}
  </div>
);

export default Options;
