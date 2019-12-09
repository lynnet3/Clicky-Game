import React from "react";
import "./Container.css";
import Restaurant from "../Restaurant";

const Container = props => (
    <div onClick={() => props.setClicked(props.id)} className="card col-md-3">
    <div className="img-container">
        <img alt={props.name} src={props.image} />
    </div>
</div>
)

export default Container;