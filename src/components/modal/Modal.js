import React, { useState, useEffect } from "react";
import "./Modal.css";
import Clip from "../../assets/images/clip.svg";
import Arrow from "../../assets/images/arrow.svg";

const Modal = (props) => {
  const [newMovieName, setNewMovieName] = useState("");
  const [newMovieCategory, setNewMovieCategory] = useState("");
  const [image, setImage] = useState("");
  const [onImage, setOnImage] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
        setOnImage(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
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
        <span className="modal__close" onClick={props.handleClose}>
          x
        </span>
        <>
          <label className="modal__boxUpload" htmlFor="upload-input">
            {!onImage ? (
              <div className="modal__inBox">
                {" "}
                <img src={Clip} alt="placeholder" class="modal__clip" />
                <p className="modal__boxText">
                  <p className="modal__boxTextBold">Agregar archivo</p>o
                  arrastrarlo y soltarlo aquí
                </p>
              </div>
            ) : (
              <div className="modal__inBoxOn">
                <p className="modal__boxText">
                  !Tu imagen a sido cargada{" "}
                  <p className="modal__boxTextBold marginLeft">
                    {" "}
                    exitosamente!
                  </p>
                </p>
              </div>
            )}
          </label>
          <input
            onDrop={handleImageChange}
            type="file"
            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
            onChange={handleImageChange}
            id="upload-input"
          />
        </>
        <div className="modal__inputs">
          <div className="modal__name">
            <h3 className="modal__title">NOMBRE DE LA PELICULA</h3>
            <input
              className="modal__nameInput"
              type="text"
              value={newMovieName}
              onChange={updateNewMovieNameValue}
            />
          </div>
          <div className="modal__category">
            <h3 className="modal__title">CATEGORIA</h3>
            <button onClick={handleDropdown} className="modal__button">
              <div
                className={
                  newMovieCategory === ""
                    ? `modal__inButton`
                    : `modal__inButton black`
                }
              >
                <h3 className="modal__inButtonTitle">
                  {newMovieCategory === ""
                    ? "Selecciona una categoría"
                    : newMovieCategory}
                </h3>
                <img src={Arrow} className="modal__arrow" alt="arrow" />
              </div>
              {dropdown && (
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
            </button>
          </div>
        </div>
        <button onClick={createNewMovie} className="modal__buttonUpload">
          <h3 className="modal__buttonTitle">Subir Película</h3>
        </button>
      </div>
    </div>
  );
};

export default Modal;
