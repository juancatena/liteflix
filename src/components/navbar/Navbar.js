import React, { useState, useEffect } from "react";
import logo from "../../assets/images/liteflix.svg";
import plus from "../../assets/images/plus.svg";
import bell from "../../assets/images/bell.svg";
import avatar from "../../assets/images/user-01.svg";
import arrow from "../../assets/images/arrow.svg";
import MenuItem from "../menuItem/MenuItem";
import "./Navbar.css";
import useWindowSize from "../../utils/useWindowSize";
import menu from "../../assets/images/menu.svg";
import MobileMenu from "../mobileMenu/MobileMenu";

function Navbar({ handleModal }) {
  const [show, handleShow] = useState(false);
  const [addFilm, setAddFilm] = useState(false);
  const [menuAvatar, setMenuAvatar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const size = useWindowSize();

  const onMouseEnterAdd = () => setAddFilm(true);
  const onMouseLeaveAdd = () => setAddFilm(false);

  const onMouseEnterMenu = () => setMenuAvatar(true);
  const onMouseLeaveMenu = () => setMenuAvatar(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickMenu = () => setMobileMenu(false);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      {size.width > 1080 ? (
        <>
          <div className="navbar__menuLeft">
            <img className="navbar__logo" src={logo} alt="" />
            <div className="navbar__menuButton">
              <ul className="navbar__menu">
                <li className="navbar__item navbar__itemActive">Inicio</li>
                <li className="navbar__item">Series</li>
                <li className="navbar__item">Películas</li>
                <li className="navbar__item">Agregados recientemente</li>
                <li className="navbar__item">Mi Lista</li>
              </ul>
              <button
                className="navbar__button hover"
                onMouseEnter={onMouseEnterAdd}
                onMouseLeave={onMouseLeaveAdd}
                onClick={handleModal}
              >
                <img className="navbar__plus hover2" src={plus} alt="plus" />
                {addFilm && <p className="navbar__add"> Agregar película </p>}
              </button>
            </div>
          </div>
          <div className="navbar__menuRight">
            <h1 className="navbar__menuRightText">Niños</h1>
            <div>
              <div className="navbar__notification"></div>
              <img className="navbar__menuRightBell" src={bell} alt="bell" />
            </div>
            <div className="navbar__menuRightAvatar">
              <img
                className="navbar__avatarImg"
                src={avatar}
                alt="avatar"
                onMouseEnter={onMouseEnterMenu}
                onMouseLeave={onMouseLeaveMenu}
              />
              {menuAvatar && <MenuItem />}
            </div>
            <img className="navbar__menuRightArrow" src={arrow} alt="arrow" />
          </div>
        </>
      ) : (
        <>
          <button
            className="navbar__buttonMennu"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <img src={menu} alt="menu" className="navbar__menuLogo" />
          </button>
          <img
            className={!mobileMenu ? `navbar__logo` : `none`}
            src={logo}
            alt=""
          />
          {mobileMenu && (
            <>
              <MobileMenu handleClickMenu={handleClickMenu} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Navbar;
