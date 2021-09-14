import React from 'react';
import "./burger.css";

const Burger = ({menuOpen, setMenuOpen}) => {
  return (
    <button className="burger__StyledBurger" onClick={() => setMenuOpen(!menuOpen)}>
      <div className="ham-box">
        <div className= "ham-box-inner"></div>
      </div>
    </button>
  )
}

export default Burger;
