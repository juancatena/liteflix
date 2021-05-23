import React from "react";
import logo from "../../assets/images/liteflix.svg";
import plus from "../../assets/images/plus.svg";
import bell from "../../assets/images/bell.svg";
import avatar from "../../assets/images/user-01.svg";
import arrow from "../../assets/images/arrow.svg";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__menuLeft">
        <div></div>
        <img className="navbar__logo" src={logo} alt="" />

        <div className="navbar__menuButton">
          <ul className="navbar__menu">
            <li className="navbar__item">Inicio</li>
            <li className="navbar__item">Series</li>
            <li className="navbar__item">Peliculas</li>
            <li className="navbar__item">Agregados Recientemente</li>
            <li className="navbar__item">Mi Lista</li>
          </ul>
          <button className="navbar__button">
            <img className="navbar__plus" src={plus} alt="plus" />
          </button>
        </div>
      </div>
      <div className="navbar__menuRight">
        <h1 className="navbar__menuRightText">Niños</h1>
        <img className="navbar__menuRightBell" src={bell} alt="bell" />
        <img className="navbar__menuRightAvatar" src={avatar} alt="avatar" />
        <img className="navbar__menuRightArrow" src={arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default Navbar;
