import React, { useState } from "react";
import "./Modal.css";
import Dropdown from "../dropdown/Dropdown";
import Dropzone from "../dropzone/Dropzone";
import liteflix from "../../assets/images/liteflix.svg";
import useWindowSize from "../../utils/useWindowSize";
import CloseIcon from "@material-ui/icons/Close";

const Modal = (props) => {
  const [newMovieName, setNewMovieName] = useState("");
  const [newMovieCategory, setNewMovieCategory] = useState("");
  const [image, setImage] = useState("");
  const [upload, setUpload] = useState(false);
  const size = useWindowSize();

  const recibeImagen = (image) => {
    setImage(image);
  };

  const sendCategory = (newMovieCategory) => {
    setNewMovieCategory(newMovieCategory);
  };

  const updateNewMovieNameValue = (e) => setNewMovieName(e.target.value);

  const createNewMovie = () => {
    props.callback(newMovieName, newMovieCategory, image);
    setUpload(true);
  };

  const clean = () => {
    props.handleClose();
    setNewMovieName("");
    setNewMovieCategory("");
  };

  return (
    <div className="modal">
      <div className={`modal__inner ${upload && `modal__upload`}`}>
        <span className="modal__close" onClick={props.handleClose}>
          <CloseIcon style={{ fontSize: 14 }} />
        </span>
        {!upload ? (
          <div className="modal__inputsContent">
            <Dropzone callback={recibeImagen} />
            <div className="modal__inputs">
              <div className="modal__name ">
                <h3 className="modal__title">
                  {size.width < 1080 ? `NOMBRE` : `NOMBRE DE LA PELICULA`}
                </h3>
                <input
                  className={`modal__nameInput ${
                    newMovieName && "modal__nameSet"
                  }`}
                  type="text"
                  value={newMovieName}
                  onChange={updateNewMovieNameValue}
                />
              </div>
              <Dropdown callback={sendCategory} />
            </div>
            {newMovieName && newMovieCategory && image ? (
              <button
                onClick={createNewMovie}
                className="modal__buttonUploadOk"
              >
                <h3 className="modal__buttonTitle">Subir Película</h3>
              </button>
            ) : (
              <button className="modal__buttonUpload">
                <h3 className="modal__buttonTitle">Subir Película</h3>
              </button>
            )}
          </div>
        ) : (
          <div className="modal__uploadContainer">
            <img src={liteflix} alt="Liteflix" />
            <h1 className="modal__uploadTitle">Felicitaciones!</h1>
            <p className="modal__uploadDescription">
              <strong>{`${newMovieName} `}</strong>
              fue correctamente subido a la categoria
              <strong>{` ${newMovieCategory}`}</strong>
            </p>
            <button onClick={clean} className="modal__buttonClose">
              <h3 className="modal__buttonTitle">Cerrar</h3>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
