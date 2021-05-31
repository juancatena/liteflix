import React from "react";
import "./MobileMenu.css";
import logo from "../../assets/images/liteflix.svg";
import fill1 from "../../assets/images/fill-1.svg";
import plus from "../../assets/images/plus.svg";
import bell from "../../assets/images/bell.svg";
import { animated, useSpring } from "react-spring";

function MobileMenu({ handleClick, handleClose, toggled }) {
  const { x } = useSpring({
    x: toggled ? 0 : 100,
  });

  return (
    toggled && (
      <div onClick={handleClose} className="mobileMenu">
        <animated.div
          style={{
            transform: x.interpolate((x) => `translate3d(${x * -1}%, 0, 0)`),
          }}
          className="mobileMenu__inner"
        >
          <img src={logo} alt="logo" className="mobileMenu__logo" />
          <div className="mobileMenu__userContainer">
            <div className="mobileMenu__userOval">
              <img src={fill1} alt="fill1" className="mobileMenu__userImage" />
            </div>
            <h1 className="mobileMenu__userName">Ernesto Garmendia</h1>
          </div>

          <h1 className="mobileMenu__option">Cambiar Usuario</h1>
          <div className="mobileMenu__line" />
          <h1 className="mobileMenu__option">Configuración</h1>
          <div className="mobileMenu__line" />
          <h1 className="mobileMenu__option">Ayuda</h1>
          <div className="mobileMenu__line" />

          <div className="mobileMenu__list">
            <ul className="mobileMenu__menu">
              <li className="mobileMenu__item mobileMenu__new">
                <div className="mobileMenu__notification" />
                <img className="mobileMenu__Bell" src={bell} alt="bell" />
                Novedades
              </li>
              <li className="mobileMenu__item">Series</li>
              <li className="mobileMenu__item">Películas</li>
              <li className="mobileMenu__item">Mi Lista</li>
              <li className="mobileMenu__item">Niños</li>
            </ul>
            <button className="mobileMenu__button" onClick={handleClick}>
              <img className="mobileMenu__plus" src={plus} alt="plus" />
              <p className="mobileMenu__add"> Agregar película </p>
            </button>
            <h3 className="mobileMenu__logOut">Log Out</h3>
          </div>
        </animated.div>
      </div>
    )
  );
}

export default MobileMenu;
