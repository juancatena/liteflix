import React, { useState } from "react";
import "./PosterLarge.css";
import playCircle from "../../assets/images/playCircle.svg";
import bigArrow from "../../assets/images/bigArrow.svg";
import like from "../../assets/images/like.png";

function PosterLarge({ url, title }) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="posterLarge"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${url})`,
        backgroundPosition: "center center",
      }}
    >
      {hover && (
        <div className="posterLarge__hover">
          <div className="posterLarge__hoverTop" />
          <div className="posterLarge__hoverBottom">
            <img src={playCircle} alt="play" className="posterLarge__play" />
            <div className="posterLarge__middlePart">
              <div className="posterLarge__info">
                <h1 className="posterLarge__title">{title}</h1>
                <h1 className="posterLarge__text">98% Coincidencia</h1>
                <div className="posterLarge__ageDuration">
                  <div className="poster__age">
                    <h1 className="posterLarge__text">+16</h1>
                  </div>
                  <h1 className="posterLarge__text">1h 30 min</h1>
                </div>
                <h1 className="posterLarge__text">Suspenso</h1>
              </div>
              <img className="posterLarge__like" src={like} alt="like" />
            </div>

            <img className="posterLarge__arrow" src={bigArrow} alt="arrow" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PosterLarge;
