import React, { useState, useEffect } from "react";
import "./Poster.css";
import addList from "../../assets/images/add-list.svg";
import playCircle from "../../assets/images/playCircle.svg";
import MyMoviesRow from "../myMoviesRow/MyMoviesRow";

function Poster({ url, title, category, data, content }) {
  const [hasCategory, setHasCategory] = useState("");
  const [hover, setHover] = useState(false);
  const [newMovies, setNewMovies] = useState({});

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  useEffect(() => {
    setHasCategory(category);
  }, [category]);

  const handleClick = () => {
    delete localStorage.movies.title;
  };

  // onClick={() => {
  //   const newMovies = movie.filter(
  //     (mov) => mov.name !== item.name
  //   );
  //   setMovie(newMovies);
  // }}

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="poster"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${url})`,
        backgroundPosition: "center center",
      }}
    >
      {hover && (
        <div className="poster__hover">
          <div className="poster__top">
            <img className="poster__icon" src={addList} alt="addList" />
            <img className="poster__icon" src={addList} alt="addList" />{" "}
          </div>
          <div className="poster__middle">
            <img
              onClick={hasCategory && handleClick}
              className="poster__iconMiddle"
              src={playCircle}
              alt="play"
            />
          </div>
          <div className="poster__bottom">
            <h1 className="poster__title">{title}</h1>
            <div className="poster__bottom2">
              <h1 className="poster__text">98% Coincidencia</h1>
              <div className="poster__age">
                <h1 className="poster__text">+16</h1>
              </div>
              <h1 className="poster__text">1h 30 min</h1>
            </div>

            <h1 className="poster__text">
              {hasCategory ? category : `Suspenso`}
            </h1>
          </div>
          {content}
        </div>
      )}
    </div>
  );
}

export default Poster;
