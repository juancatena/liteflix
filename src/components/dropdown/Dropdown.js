import React, { useState, useEffect } from "react";
import Arrow from "../../assets/images/arrow.svg";
import "./Dropdown.css";

function DropdownMenu(props) {
  const [newMovieCategory, setNewMovieCategory] = useState("");
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const sendCategory = () => {
      props.callback(newMovieCategory);
    };
    sendCategory();
  }, [newMovieCategory, props]);

  useEffect(() => {
    setDropdown(false);
  }, [newMovieCategory]);

  const updateNewMovieCategoryValue = (e) => {
    setNewMovieCategory(e.target.value);
  };

  const handleDropdown = () => setDropdown(true);

  return (
    <div className="dropdown">
      <h3 className="dropdown__title">CATEGORIA</h3>
      {!dropdown ? (
        !newMovieCategory ? (
          <button onClick={handleDropdown} className="dropdown__button">
            <div className="dropdown__inButton">
              <h3 className="dropdown__buttonTitle">
                Selecciona una categoría
              </h3>
              <img src={Arrow} className="dropdown__arrow" alt="arrow" />
            </div>
          </button>
        ) : (
          <h3 className="dropdown__categorySet" onClick={handleDropdown}>
            {newMovieCategory}
          </h3>
        )
      ) : (
        <div className="dropdown__menu">
          <div className="dropdown__menuItems">
            <button
              className="dropdpwn__menuItem"
              value="Acción"
              onClick={updateNewMovieCategoryValue}
            >
              Acción
            </button>
            <button
              className="dropdpwn__menuItem"
              value="Animación"
              onClick={updateNewMovieCategoryValue}
            >
              Animación
            </button>
            <button
              className="dropdpwn__menuItem"
              value="Aventuras"
              onClick={updateNewMovieCategoryValue}
            >
              Aventuras
            </button>
            <button
              className="dropdpwn__menuItem"
              value="Ciencia Ficción"
              onClick={updateNewMovieCategoryValue}
            >
              Ciencia Ficción
            </button>
            <button
              className="dropdpwn__menuItem"
              value="Comedia"
              onClick={updateNewMovieCategoryValue}
            >
              Comedia
            </button>
            <button
              className="dropdpwn__menuItem"
              value="Documentales"
              onClick={updateNewMovieCategoryValue}
            >
              Documentales
            </button>
            <button
              className="dropdpwn__menuItem"
              value="Terror"
              onClick={updateNewMovieCategoryValue}
            >
              Terror
            </button>
            <button
              className="dropdpwn__menuItem"
              value="Romance"
              onClick={updateNewMovieCategoryValue}
            >
              Romance
            </button>
            <button
              className="dropdpwn__menuItem"
              value="Infantil"
              onClick={updateNewMovieCategoryValue}
            >
              Infantil
            </button>
            <button
              className="dropdpwn__menuItem last"
              value="Musical"
              onClick={updateNewMovieCategoryValue}
            >
              Musical
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
