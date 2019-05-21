import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.clickPic(props.id)} className = "shuffle" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong> {props.name} </strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
