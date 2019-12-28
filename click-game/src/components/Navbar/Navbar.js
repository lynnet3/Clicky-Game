import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="navbar ">
    <div className="title">Logo Game</div>
    <div className={props,navMsgColot}>{props.navMess}</div>
      <div className="score">
        Current Score: {props.score}  Highscore: {props.highScore}
      </div>
  </div>
);

export default Navbar;