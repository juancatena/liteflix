import React from "react";
import "./MyMoviesRow.css";
import Poster from "../poster/Poster";

function MyMoviesRow(props) {
  return (
    <Poster url={props.src} title={props.name} category={props.category} />
  );
}

export default MyMoviesRow;

// {props.content}
