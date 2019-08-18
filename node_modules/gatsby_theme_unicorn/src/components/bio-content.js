import React from "react";

/**
 * Shadow me to add your own bio content
 */

export default props => (
  <span>
    {props.author}
    <br />
    <span
      style={{
        color: "grey",
        fontSize: "14px"
      }}
    >
      {props.description}
    </span>
  </span>
);
