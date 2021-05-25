import React from "react";
import "./MyMoviesRow";

function MyMoviesRow({ key, nombre }) {
  return (
    <div key={key}>
      <h1 className="name">{nombre}</h1>
    </div>
  );
}

export default MyMoviesRow;
