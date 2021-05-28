import React, { useState, useEffect } from "react";
import "./Modal.css";

import Arrow from "../../assets/images/arrow.svg";
import Dropzone from "../dropzone/Dropzone";

const Modal = (props) => {
  const [newMovieName, setNewMovieName] = useState("");
  const [newMovieCategory, setNewMovieCategory] = useState("");
  const [image, setImage] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [thankYou, setThankYou] = useState(true);

  const recibeImagen = (image) => {
    setImage(image);
  };

  useEffect(() => {
    setDropdown(false);
  }, [newMovieCategory]);

  const updateNewMovieNameValue = (e) => setNewMovieName(e.target.value);

  const updateNewMovieCategoryValue = (e) => {
    setNewMovieCategory(e.target.value);
  };
  const createNewMovie = () => {
    props.callback(newMovieName, newMovieCategory, image);
    setNewMovieName("");
    setNewMovieCategory("");
  };

  const handleDropdown = () => setDropdown(true);

  return (
    <div className="modal">
      <div className="modal__inner">
        {thankYou && <h3>skl;dasd</h3>}
        <span className="modal__close" onClick={props.handleClose}>
          x
        </span>

        <Dropzone callback={recibeImagen} />

        <div className="modal__inputs">
          <div className="modal__name ">
            <h3 className="modal__title">NOMBRE DE LA PELICULA</h3>
            <input
              className={`modal__nameInput ${newMovieName && "modal__nameSet"}`}
              type="text"
              value={newMovieName}
              onChange={updateNewMovieNameValue}
            />
          </div>
          <div className="modal__category">
            <h3 className="modal__title">CATEGORIA</h3>
            {!dropdown ? (
              !newMovieCategory ? (
                <button onClick={handleDropdown} className="modal__button">
                  <div className="modal__inButton">
                    <h3 className="modal__inButtonTitle">
                      Selecciona una categoría
                    </h3>
                    <img src={Arrow} className="modal__arrow" alt="arrow" />
                  </div>
                </button>
              ) : (
                <h3 className="modal__categorySet" onClick={handleDropdown}>
                  {newMovieCategory}
                </h3>
              )
            ) : (
              <div className="modal__dropdown">
                <div className="modal__dropdownButtons">
                  <button
                    className="modal__dropdowButton"
                    value="Acción"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Acción
                  </button>
                  <button
                    className="modal__dropdowButton"
                    value="Animación"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Animación
                  </button>
                  <button
                    className="modal__dropdowButton"
                    value="Aventuras"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Aventuras
                  </button>
                  <button
                    className="modal__dropdowButton"
                    value="Ciencia Ficción"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Ciencia Ficción
                  </button>
                  <button
                    className="modal__dropdowButton"
                    value="Comedia"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Comedia
                  </button>
                  <button
                    className="modal__dropdowButton"
                    value="Documentales"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Documentales
                  </button>
                  <button
                    className="modal__dropdowButton"
                    value="Terror"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Terror
                  </button>
                  <button
                    className="modal__dropdowButton"
                    value="Romance"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Romance
                  </button>
                  <button
                    className="modal__dropdowButton"
                    value="Infantil"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Infantil
                  </button>
                  <button
                    className="modal__dropdowButton last"
                    value="Musical"
                    onClick={updateNewMovieCategoryValue}
                  >
                    Musical
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {newMovieName && newMovieCategory && image ? (
          <button
            onClick={createNewMovie}
            className="modal__buttonUpload black"
          >
            <h3 className="modal__buttonTitle">Subir Película</h3>
          </button>
        ) : (
          <button className="modal__buttonUpload">
            <h3 className="modal__buttonTitle">Subir Película</h3>
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
