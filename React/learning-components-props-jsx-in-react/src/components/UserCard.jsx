import React from "react";
import userImg from "../assets/userImg.png";
import "./UserCard.css";

export default function UserCard(props) {
  return (
    <div className="user-container" style={props.style}>
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={props.image} alt={props.name} />
      <p id="user-desc">{props.desc}</p>
    </div>
  );
}
