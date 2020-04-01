import React from "react";
import "./card.css";

const card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}`}
      alt="{props.monster.name}"
    />
    <h2 key={props.monster.id}>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

export default card;
