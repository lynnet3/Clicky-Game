import React from "react";
import "./Logo.css"

const Logo = props => (
    <div className ="card" onClick={e => props.clickEvent(e.target.src)}>
        <img className="card-img-top card-height" src={props.name} alt="" />
    </div>
);

export default Logo;