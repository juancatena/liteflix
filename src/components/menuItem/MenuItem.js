import React from "react";
import "./MenuItem.css";
import fill1 from "../../assets/images/fill-1.svg";

function MenuItem({ closeMenuAvatar }) {
  return (
    <div onClick={closeMenuAvatar} className="menuItem">
      <div className="menuItem__rectangle" />
      <div className="menuItem__top">
        <div className="menuItem__topItem1">
          <div className="menuItem__itemOval">
            <img src={fill1} alt="fill1" className="menuItem__avatarImage" />
          </div>
          <h1 className="menuItem__name">Ernesto G...</h1>
        </div>
        <div className="menuItem__topItem2">
          <div className="menuItem__itemOval2">
            <img src={fill1} className="menuItem__acatarImage2" alt="fill1" />
          </div>
          <h1 className="menuItem__name2">User 03</h1>
        </div>
        <div className="menuItem__topItem2">
          <div className="menuItem__itemOval2">
            <img src={fill1} className="menuItem__acatarImage2" alt="fill1" />
          </div>
          <h1 className="menuItem__name2">User 04</h1>
        </div>
      </div>
      <div className="menuItem_bottom">
        <h1 className="menuItem__option">Configuración</h1>
        <div className="menuItem__line" />
        <h1 className="menuItem__option">Ayuda</h1>
        <div className="menuItem__line" />
        <h1 className="menuItem__option">
          <strong>Log Out</strong>
        </h1>
      </div>
    </div>
  );
}

export default MenuItem;
