import React from "react";

export default function Button(props) {
  return (
    <div>
      {props.children}
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
}
