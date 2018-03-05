import React from "react";
import "./FriendCard.css";

const FriendCard = props => {
  return (
    <div className="card" onClick={() => props.handlePick(props)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
};

export default FriendCard;
