import React from "react";

export default function Card(props) {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>
        name state variable ki value inside {props.title} : {props.name}{" "}
      </p>
    </div>
  );
}
