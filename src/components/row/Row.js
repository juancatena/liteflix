import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import "./Row.css";
import Poster from "../poster/Poster";
import PosterLarge from "../posterLarge/PosterLarge";

const base_url = "https://image.tmdb.org/t/p/w780/";

function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props]);

  const sendName = (name) => {
    props.callback(name);
  };

  return (
    <div className="row">
      <h2 className="row__title">{props.title}</h2>

      <div className="row__posters">
        {props.isMyMovie
          ? props.fetchData.map((item) => {
              return (
                <Poster
                  key={item.name}
                  url={item.image}
                  title={item.name}
                  category={item.category}
                  data={props.fetchData}
                  handleClickPoster={() => sendName(item.name)}
                />
              );
            })
          : movies.slice(0, 4).map((movie) => {
              return props.isLargeRow ? (
                <PosterLarge
                  key={movie.id}
                  url={`
              ${base_url}${movie.poster_path}`}
                  title={movie?.title || movie?.name || movie?.original_name}
                />
              ) : (
                <Poster
                  key={movie.id}
                  url={`
                  ${base_url}${movie.backdrop_path}`}
                  title={movie?.title || movie?.name || movie?.original_name}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Row;
