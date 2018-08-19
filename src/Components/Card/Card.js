import React from "react";
import IconImage from "../IconImage";

const Card = props =>

<div className="card">
  <IconImage source={props.source} alt={props.alt}/>
  <div className="card-body text-center">
    <p className="card-text">{props.text}</p>
  </div>
</div>

export default Card;