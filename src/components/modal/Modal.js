import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
  const [newMovieName, setNewMovieName] = useState("");

  const updateNewMovieNameValue = (e) => setNewMovieName(e.target.value);

  const createNewMovie = () => {
    props.callback(newMovieName);
    setNewMovieName("");
  };

  return (
    <div className="modal">
      <div className="modal__inner">
        <span className="modal__close" onClick={props.handleClose}>
          x
        </span>
        <div className="modal__addRectangle">Arrastre su foto</div>
        <input
          type="text"
          value={newMovieName}
          onChange={updateNewMovieNameValue}
        />
        <button onClick={createNewMovie}>Agregar Peli</button>
        {props.content}
      </div>
    </div>
  );
};

export default Modal;
