import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";
import plus from "../../assets/images/plus.svg";
import addList from "../../assets/images/add-list.svg";
import play from "../../assets/images/play.svg";
import useWindowSize from "../../utils/useWindowSize";

function Banner() {
  const [movie, setMovie] = useState({});
  const size = useWindowSize();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNowPlaying);
      console.log(request);
      setMovie(request.data.results[0]);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h2 className="banner__preTitle">
          ORIGINAL DE <strong>LITEFLIX</strong>
        </h2>
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">
            <img className="banner__play" src={play} alt="play" /> Reproducir
          </button>
          {size.width > 1080 ? (
            <button className="banner__button">
              <img src={plus} alt="plus" className="banner__plus" /> Mi Lista
            </button>
          ) : (
            <img src={addList} alt="plus" className="banner__plusCircle" />
          )}
        </div>
        {size.width > 1080 && (
          <div className="banner__description">
            <p className="banner__descriptionText">
              <strong> Ver temporada 1 </strong>
              <br />
              {truncate(movie?.overview, 300)}
            </p>
          </div>
        )}
        {size.width < 1080 && <div className="banner__gradient" />}
      </div>
    </header>
  );
}

export default Banner;
