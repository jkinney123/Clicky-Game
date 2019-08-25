import React from "react";
import "./CardMatch.css";

const CardMatch = props => (
    <div onClick={() => props.imageClick(props.id)} className ="card">
            <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
</div>



);

export default CardMatch;