import React, { useState, useEffect } from "react";
import "./MyMoviesRow.css";

function MyMoviesRow(props) {
  const [movieName, setMovieName] = useState("");

  useEffect(() => {
    setMovieName(props.name);
  }, [props.name]);
  console.log(movieName);

  const deleteMovie = () => {
    props.callback(movieName);
    setMovieName("");
  };

  return (
    <div className="myMoviesRow" key={props.key}>
      <h1 className="name">{props.name}</h1>
      <p>{props.category}</p>
      <img src={props.src} alt="name" />
      <button onCick={deleteMovie}>eliminar</button>
      {props.content}
    </div>
  );
}

export default MyMoviesRow;
